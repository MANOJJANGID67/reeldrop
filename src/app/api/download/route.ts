import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const workerUrl = process.env.WORKER_URL || 'http://localhost:8080/api/download';
    const workerSecret = process.env.WORKER_SECRET || 'super_secret_token';

    const response = await fetch(workerUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${workerSecret}`
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({ error: 'Worker error' }));
      return NextResponse.json(err, { status: response.status });
    }

    // If the worker returns JSON with a direct URL (CDN link), proxy it from the edge
    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      if (data.url) {
        const cdnResponse = await fetch(data.url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'Referer': 'https://www.instagram.com/'
          }
        });
        
        if (!cdnResponse.ok) {
          return NextResponse.json({ error: 'Failed to proxy CDN media.' }, { status: 500 });
        }

        const cdnHeaders = new Headers();
        cdnHeaders.set('Content-Disposition', cdnResponse.headers.get('Content-Disposition') || 'attachment; filename="media.mp4"');
        cdnHeaders.set('Content-Type', cdnResponse.headers.get('Content-Type') || 'video/mp4');

        return new NextResponse(cdnResponse.body, {
          status: 200,
          headers: cdnHeaders
        });
      }
      return NextResponse.json(data, { status: 200 });
    }

    // Otherwise, proxy the raw file stream back to the client
    const headers = new Headers();
    headers.set('Content-Disposition', response.headers.get('Content-Disposition') || 'attachment; filename="reel.mp4"');
    headers.set('Content-Type', response.headers.get('Content-Type') || 'video/mp4');

    return new NextResponse(response.body, {
      status: 200,
      headers
    });
  } catch (error) {
    console.error('Frontend API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
