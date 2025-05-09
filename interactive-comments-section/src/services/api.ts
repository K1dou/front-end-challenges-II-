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

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      localStorage.getItem('refreshToken')
    ) {
      originalRequest._retry = true;

      try {
        const res = await axios.post(
          'https://comments-api-c43806001036.herokuapp.com/users/refresh',
          {
            refreshToken: localStorage.getItem('refreshToken'),
          }
        );

        const { accessToken } = res.data;
        localStorage.setItem('token', accessToken);
        api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

        return api(originalRequest); // refaz a requisição original
      } catch (err) {
        console.error('Erro ao renovar token:', err);
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login'; // força login
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);
