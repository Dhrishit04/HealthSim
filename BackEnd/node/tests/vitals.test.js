// BackEnd/node/tests/vitals.test.js

const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/app');

describe('GET /api/vitals', () => {
  let server;

  beforeAll(() => {
    // Ensure server uses the same port but doesn't conflict
    const PORT = 5001;
    server = app.listen(PORT, () => {
      console.log(`Test server running on port ${PORT}`);
    });
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await new Promise((resolve) => server.close(resolve)); // Close server
  });

  it('should fetch simulated vital signs', async () => {
    const response = await request(app).get('/api/vitals?num=5');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('vitals');
    expect(Array.isArray(response.body.vitals.heartRate)).toBe(true);
  });
});