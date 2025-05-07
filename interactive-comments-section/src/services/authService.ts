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

export async function getMe(token: string) {
  const res = await api.get('/users/me', {
    headers: {
      Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb21tZW50cy1hcGkiLCJpYXQiOjE3NDY2NTE2MDUsImV4cCI6MTc0NjY2NjAwNSwic3ViIjoianVsaW9AZ21haWwuY29tIn0.tbMBIfPrZJ3U9tS3VWNOI64arEBgrBQ7SDsCdvBkTUE'}`,
    },
  });

  return res.data;
}
