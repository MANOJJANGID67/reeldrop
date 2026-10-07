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
    if (!body || typeof body.url !== 'string' || !body.url.startsWith('https://www.instagram.com/')) {
      return NextResponse.json(
        { error: 'Invalid URL. Must be a valid Instagram URL starting with https://www.instagram.com/' },
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
      return NextResponse.json({ error: errorMessage }, { status: workerResponse.status });
    }

    const responseHeaders = new Headers();
    responseHeaders.set('Content-Type', 'video/mp4');
    responseHeaders.set('Content-Disposition', 'attachment; filename="reeldrop.mp4"');

    return new Response(workerResponse.body, {
      status: 200,
      headers: responseHeaders
    });
  } catch (error) {
    console.error('Frontend API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
