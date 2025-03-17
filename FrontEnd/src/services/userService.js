import client from '../api/client';
import { endpoints } from '../api/endpoints';

export const loginUser = async (credentials) => {
  try {
    const response = await client.post(endpoints.login, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    const response = await client.post(endpoints.logout);
    return response.data;
  } catch (error) {
    throw error;
  }
};
