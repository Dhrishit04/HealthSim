//src/api/endpoints.js
import axios from './client';

// Vital‑Signs & Risk‑Score
export const fetchVitalSigns = () => {
  return axios.get('/vital-signs');
};
export const fetchRiskData = () => {
  return axios.get('/risk-data');
};

// Authentication
export const AUTH_LOGIN = '/api/auth/login';
export const AUTH_REGISTER = '/api/auth/register';

export const endpoints = {
    login: '/auth/login',
    logout: '/auth/logout',
    getSensors: '/sensors',
    getRiskAssessment: '/risk'
  };
  