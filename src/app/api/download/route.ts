import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      service: 'reeldropnow Media Extraction API',
      methods: ['POST', 'GET']
    },
    { status: 200 }
  );
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    if (!body || typeof body.url !== 'string') {
      return NextResponse.json(
        { error: 'Missing or invalid URL parameter.' },
        { status: 400 }
      );
    }

    const trimmedUrl = body.url.trim();
    let isSupported = false;
    try {
      const parsed = new URL(trimmedUrl);
      const host = parsed.hostname.toLowerCase();
      isSupported = (
        host === 'instagram.com' ||
        host.endsWith('.instagram.com') ||
        host === 'facebook.com' ||
        host.endsWith('.facebook.com') ||
        host === 'fb.watch' ||
        host.endsWith('.fb.watch')
      );
    } catch {
      isSupported = false;
    }

    if (!isSupported) {
      return NextResponse.json(
        { error: 'Invalid URL. Please provide a valid public Instagram or Facebook link.' },
        { status: 400 }
      );
    }

    const workerUrl = process.env.WORKER_URL || 'https://reeldrop.duckdns.org/api/download';
    const workerSecret = process.env.WORKER_SECRET;

    const headers: Record<string, string> = {
      'Content-Type': 'application/json'
    };

    if (workerSecret) {
      headers['x-worker-secret'] = workerSecret;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000);

    let workerResponse: Response;
    try {
      workerResponse = await fetch(workerUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify({ url: body.url }),
        signal: controller.signal
      });
    } catch (err: unknown) {
      clearTimeout(timeoutId);
      if (err instanceof Error && err.name === 'AbortError') {
        return NextResponse.json({ error: 'Worker request timed out' }, { status: 504 });
      }
      throw err;
    } finally {
      clearTimeout(timeoutId);
    }

    if (!workerResponse.ok) {
      const err = await workerResponse.json().catch(() => null);
      const errorMessage = err?.error || err?.message || 'Worker error';
      return NextResponse.json({ error: errorMessage, code: err?.code }, { status: workerResponse.status });
    }

    const responseHeaders = new Headers();
    const upstreamContentType = workerResponse.headers.get('content-type') || 'video/mp4';
    responseHeaders.set('Content-Type', upstreamContentType);
    
    const isImage = upstreamContentType.includes('image') || upstreamContentType.includes('jpeg') || upstreamContentType.includes('png');
    const ext = isImage ? 'jpg' : 'mp4';
    responseHeaders.set('Content-Disposition', `attachment; filename="reeldrop_${Date.now()}.${ext}"`);

    return new Response(workerResponse.body, {
      status: 200,
      headers: responseHeaders
    });
  } catch (error) {
    console.error('Frontend API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
