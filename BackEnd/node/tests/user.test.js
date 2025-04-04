const request = require('supertest');
const app = require('../src/app');

let token;

beforeAll(async () => {
  // Ensuring test user is registered and logged in.
  await request(app)
    .post('/api/auth/register')
    .send({
      name: 'User Test',
      email: 'usertest@example.com',
      password: 'password123'
    });
  const res = await request(app)
    .post('/api/auth/login')
    .send({
      email: 'usertest@example.com',
      password: 'password123'
    });
  token = res.body.token;
});

describe('User Endpoints', () => {
  it('should get the user profile', async () => {
    const res = await request(app)
      .get('/api/users/profile')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('user');
  });

  it('should update the user profile', async () => {
    const res = await request(app)
      .put('/api/users/profile')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Updated User' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.user.name).toEqual('Updated User');
  });
});
