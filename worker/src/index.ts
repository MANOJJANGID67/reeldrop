import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import https from 'https';
import http from 'http';
import { provider } from './provider';
import { parseInstagramUrl, sanitizeLog } from './utils';
import { ExtractionError, UnsupportedUrlError } from './errors';

const app = express();

app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' }
}));
app.use(cors());
app.use(express.json());

// Health Check
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', service: 'reeldrop-worker' });
});

// Download & Stream Endpoint
app.post('/api/download', async (req: Request, res: Response) => {
  try {
    const { url } = req.body;
    if (!url || typeof url !== 'string') {
      return res.status(400).json({
        error: 'URL is required',
        code: 'MISSING_URL'
      });
    }

    const urlInfo = parseInstagramUrl(url);
    if (!urlInfo || urlInfo.type === 'UNKNOWN') {
      throw new UnsupportedUrlError();
    }

    console.log(`[API Stream] Received request for ${urlInfo.type}: ${sanitizeLog(urlInfo.cleanUrl)}`);

    const mediaUrl = await provider.getMediaUrl(urlInfo.cleanUrl);

    // Determine default file extension based on type
    const isStory = urlInfo.type === 'STORY' || urlInfo.type === 'HIGHLIGHT';
    const client = mediaUrl.startsWith('https') ? https : http;

    client.get(mediaUrl, (streamRes) => {
      const upstreamContentType = streamRes.headers['content-type'] || 'video/mp4';
      const isImage = upstreamContentType.includes('image') || upstreamContentType.includes('jpeg') || upstreamContentType.includes('png');
      const ext = isImage ? 'jpg' : 'mp4';
      const prefix = isStory ? 'instagram_story' : 'instagram_reel';
      const filename = `${prefix}_${Date.now()}.${ext}`;

      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      res.setHeader('Content-Type', upstreamContentType);

      streamRes.pipe(res);
    }).on('error', (streamErr) => {
      console.error('[API Stream] Stream error:', streamErr.message);
      if (!res.headersSent) {
        res.status(502).json({
          error: 'Failed to stream media from storage server',
          code: 'STREAM_FAILED'
        });
      }
    });

  } catch (error: any) {
    if (error instanceof ExtractionError) {
      console.warn(`[API] ExtractionError (${error.code}) [${error.statusCode}]: ${sanitizeLog(error.message)}`);
      return res.status(error.statusCode).json({
        error: error.message,
        code: error.code
      });
    }

    console.error('[API] Unexpected error:', sanitizeLog(error.message || String(error)));
    return res.status(500).json({
      error: 'Failed to process media extraction request',
      code: 'INTERNAL_ERROR'
    });
  }
});

const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Worker listening on port ${PORT}`);
  });
}

export default app;
