//src/api/endpoints.js

import axios from './client';

export const fetchVitalSigns = () => {
  return axios.get('/api/vital-signs');
};
export const fetchRiskData = () => {
  return axios.get('/api/risk-data');
};

export const AUTH_LOGIN = '/api/auth/login';
export const AUTH_REGISTER = '/api/auth/register';

export const endpoints = {
    login: '/auth/login',
    logout: '/auth/logout',
    getSensors: '/sensors',
    getRiskAssessment: '/risk'
  };
  