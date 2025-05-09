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
  const res = await api.get('/users/me', {});

  return res.data;
}
