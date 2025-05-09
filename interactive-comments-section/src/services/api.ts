import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://comments-api-c43806001036.herokuapp.com/',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
