// src/api/endpoints.js
import client from './client';


//GET /api/risk/vitals
export function fetchVitalSigns() {
  return client.get('/risk/vitals');
}
//GET /api/risk/assess
export function fetchRiskData() {
  return client.get('/risk/assess');
}

// alias in case any code still calls fetchRiskAssessment()
export { fetchRiskData as fetchRiskAssessment };
//POST /api/auth/login
export function login(credentials) {
  return client.post('/auth/login', credentials);
}
//POST /api/auth/register
export function register(userInfo) {
  return client.post('/auth/register', userInfo);
}
// Raw endpoint paths if you need them elsewhere
export const endpoints = {
  getSensors:        '/sensors',
  getVitalSigns:     '/risk/vitals',
  getRiskAssessment: '/risk/assess',
};

