import request from 'supertest';
import app from '../src/index';

describe('Worker API Integration Tests', () => {
  it('GET /health should return 200 and status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(res.body.service).toBe('reeldrop-worker');
  });

  it('POST /api/download should reject missing URL with 400', async () => {
    const res = await request(app).post('/api/download').send({});
    expect(res.status).toBe(400);
    expect(res.body.code).toBe('MISSING_URL');
  });

  it('POST /api/download should reject unsupported URLs with 400', async () => {
    const res = await request(app).post('/api/download').send({ url: 'https://youtube.com/watch?v=123' });
    expect(res.status).toBe(400);
    expect(res.body.code).toBe('UNSUPPORTED_URL');
  });
});
