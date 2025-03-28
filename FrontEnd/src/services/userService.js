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

/**
 * Fetches the user’s settings from API.
 * @param {string|number} userId - The ID of the user.
 */
export const getUserSettings = async (userId) => {
  try {
    r
    const response = await client.get(`/users/${userId}/settings`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Updates the user’s settings in API.
 * @param {string|number} userId - The ID of the user.
 * @param {object} settings - The new settings data.
 */
export const updateUserSettings = async (userId, settings) => {
  try {
    
    const response = await client.put(`/users/${userId}/settings`, settings);
    return response.data;
  } catch (error) {
    throw error;
  }
};
