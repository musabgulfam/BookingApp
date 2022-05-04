import { create } from 'apisauce';
import { BASE_URL } from './config'
import apiMonitor from './Monitor';

export const URIS = {
  createUser: 'api/add-user',
  hotels: 'api/hotels',
  resorts: 'api/resorts'
};

const createApiClient = (baseURL = BASE_URL) => {
  const api = create({
    baseURL,
    headers: {
      // Accept: 'application/json',
      // 'Cache-Control': 'no-cache',
      // 'Content-Type': 'application/json',
    },
    timeout: 15000,
  });

  api.addMonitor(apiMonitor);

  const addUser = payload => {
    return api.post(URIS.createUser, payload);
  }

  const getHotels = payload => {
    return api.get(URIS.hotels)
  }

  const getResorts = payload => {
    return api.get(URIS.resorts)
  }

  return {
    addUser,
    getHotels,
    getResorts
  };
};

export default { createApiClient };
