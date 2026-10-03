import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { RapidApiProvider, MockMediaProvider, MediaProvider } from './provider';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const workerSecret = process.env.WORKER_SECRET;
const isMock = () => process.env.MOCK_MEDIA_PROVIDER === 'true';
const getProvider = (): MediaProvider => isMock() ? new MockMediaProvider() : new RapidApiProvider();

const tempDir = path.join(__dirname, '..', 'temp');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

// Authentication Middleware
const authenticate = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!workerSecret) {
    return next(); // if no secret configured, allow (not recommended for production)
  }
  if (!authHeader || authHeader !== `Bearer ${workerSecret}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

import { isValidInstagramUrl } from './utils';

app.post('/api/download', authenticate, async (req: express.Request, res: express.Response) => {
  const { url } = req.body;
  if (!url || !isValidInstagramUrl(url)) {
    return res.status(400).json({ error: 'Invalid or unsupported Instagram URL' });
  }

  try {
    const provider = getProvider();
    const outputPath = await provider.downloadMedia(url, tempDir);
    
    // If it's a URL, send it directly
    if (outputPath.startsWith('http')) {
      return res.json({ url: outputPath });
    }

    // Send file and then delete it
    res.download(outputPath, (err: any) => {
      if (err) {
        console.error('Download error:', err);
      }
      fs.unlink(outputPath, (unlinkErr: any) => {
        if (unlinkErr) console.error('Error deleting temp file:', unlinkErr);
      });
    });
  } catch (error) {
    console.error('Error processing media:', error);
    res.status(500).json({ error: 'Failed to process media' });
  }
});

app.get('/health', (req: express.Request, res: express.Response) => {
  res.json({ status: 'ok', mock: isMock() });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Worker listening on port ${port}, Mock mode: ${isMock()}`);
  });
}

export default app;
