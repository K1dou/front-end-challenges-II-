import { useMutation } from '@tanstack/react-query';
import { login } from '../services/authService';

export function useLogin() {
  return useMutation({
    mutationFn: login,
    onSuccess: (token) => {
      localStorage.setItem('token', token);
    },
  });
}
