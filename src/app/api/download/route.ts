import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const workerUrl = 'https://campaigns-compilation-praise-fame.trycloudflare.com/api/download-file';
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

    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      if (data.url) {
        const videoResponse = await fetch(data.url);
        const headers = new Headers(videoResponse.headers);
        headers.set('Content-Disposition', 'attachment; filename="reeldrop_video.mp4"');
        
        return new NextResponse(videoResponse.body, {
          status: 200,
          headers
        });
      }
      return NextResponse.json(data, { status: 200 });
    }

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
