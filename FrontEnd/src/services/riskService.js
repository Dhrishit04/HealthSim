import client from '../api/client';
import { endpoints } from '../api/endpoints';

export const getRiskAssessment = async () => {
  try {
    const response = await client.get(endpoints.getRiskAssessment);
    return response.data;
  } catch (error) {
    throw error;
  }
};
