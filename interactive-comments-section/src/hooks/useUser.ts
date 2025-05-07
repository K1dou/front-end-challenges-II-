import { useQuery } from '@tanstack/react-query';
import { getMe } from '../services/authService';

export function useUser(token: string | null) {
  return useQuery({
    queryKey: ['me'],
    queryFn: () => getMe(token!),
    enabled: !!token,
    retry: false,
  });
}
