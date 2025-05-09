// src/services/authService.ts
import { api } from './api';

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const res = await api.post('/users/login', { email, password });
  return res.data;
}

export async function getMe() {
  try {
    const res = await api.get('/users/me');
    return res.data;
  } catch (error: any) {
    console.error('Erro ao buscar usuário autenticado:', error);

    if (
      error?.response?.status === 401 ||
      error?.response?.status === 403 ||
      error?.response?.status === 302 ||
      error?.message === 'Network Error'
    ) {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      window.location.href = '/login';
    }

    throw error;
  }
}
