import { useQuery } from '@tanstack/react-query';
import { getMe } from '../services/authService';

export function useUser() {
  return useQuery({
    queryKey: ['me'],
    queryFn: () => getMe(),
    retry: false,
  });
}
