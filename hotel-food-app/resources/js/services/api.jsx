import axios from 'axios';

// Create an axios instance for API requests
const api = axios.create({
  baseURL: '/api', // Base URL for your API endpoints
  headers: {
    'Content-Type': 'application/json',
  },
});

// Hotels API
export const getHotels = (search = '') => {
  return api.get(`/hotels?search=${search}`);
};

export const getHotel = (id) => {
  return api.get(`/hotels/${id}`);
};

export const createHotel = (data) => {
  return api.post('/hotels', data);
};

export const updateHotel = (id, data) => {
  return api.put(`/hotels/${id}`, data);
};

export const deleteHotel = (id) => {
  return api.delete(`/hotels/${id}`);
};

// Foods API
export const getFoods = (search = '') => {
  return api.get(`/foods?search=${search}`);
};

export const getFood = (id) => {
  return api.get(`/foods/${id}`);
};

export const createFood = (data) => {
  return api.post('/foods', data);
};

export const updateFood = (id, data) => {
  return api.put(`/foods/${id}`, data);
};

export const deleteFood = (id) => {
  return api.delete(`/foods/${id}`);
};

// Dashboard API
export const getDashboardData = () => {
  return api.get('/dashboard');
};

export default api;