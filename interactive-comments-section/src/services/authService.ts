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
      Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb21tZW50cy1hcGkiLCJpYXQiOjE3NDY3MTc3NTIsImV4cCI6MTc0NjczMjE1Miwic3ViIjoiaGlxdWUxMjc2QGdtYWlsLmNvbSJ9.dRb8NlTvWdY7Q91Dbh_v0DE0OEYpNpHAvxds-va83Jw'}`,
    },
  });

  return res.data;
}
