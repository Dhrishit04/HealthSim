const request = require('supertest');
const app = require('../src/app');

let token;

beforeAll(async () => {
  // Create a test user and get an auth token
  await request(app)
    .post('/api/auth/register')
    .send({
      name: 'Risk Test',
      email: 'risktest@example.com',
      password: 'password123'
    });
  const res = await request(app)
    .post('/api/auth/login')
    .send({
      email: 'risktest@example.com',
      password: 'password123'
    });
  token = res.body.token;
});

describe('Risk Endpoints', () => {
  it('should assess risk with given parameters', async () => {
    const res = await request(app)
      .get('/api/risk/assess')
      .set('Authorization', `Bearer ${token}`)
      .query({ heartRate: 85 });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('risk');
  });

  it('should return vital signs data', async () => {
    const res = await request(app)
      .get('/api/risk/vitals')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('vitals');
  });
});
