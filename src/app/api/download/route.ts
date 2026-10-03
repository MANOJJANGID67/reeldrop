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

    // Proxy the file stream back to the client
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
