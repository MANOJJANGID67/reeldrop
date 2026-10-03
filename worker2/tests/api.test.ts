import request from 'supertest';
import app from '../src/index';

describe('Worker API Flow', () => {
  const secret = process.env.WORKER_SECRET || 'super_secret_token';

  it('should reject unauthenticated requests', async () => {
    const res = await request(app)
      .post('/api/download')
      .send({ url: 'https://www.instagram.com/reel/123456789/' });
    
    expect(res.statusCode).toEqual(401);
  });

  it('should reject invalid URLs even when authenticated', async () => {
    const res = await request(app)
      .post('/api/download')
      .set('Authorization', `Bearer ${secret}`)
      .send({ url: 'https://www.youtube.com/watch?v=123' });
    
    expect(res.statusCode).toEqual(400);
  });

  it('should process mock requests successfully', async () => {
    // Make sure Mock provider is active for tests
    process.env.MOCK_MEDIA_PROVIDER = 'true';
    
    const res = await request(app)
      .post('/api/download')
      .set('Authorization', `Bearer ${secret}`)
      .send({ url: 'https://www.instagram.com/reel/123456789/' });
    
    expect(res.statusCode).toEqual(200);
    // Since we mock it, we just check headers or the response content
    expect(res.header['content-type']).toMatch(/video\/mp4|application\/octet-stream/);
  }, 10000); // increase timeout for mock delay
});
