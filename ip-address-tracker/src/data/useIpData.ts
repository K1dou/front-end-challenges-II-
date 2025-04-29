import { useQuery } from '@tanstack/react-query';

const API_KEY = import.meta.env.API_KEY;

export function useIpData(ip: string, enabled = true) {
  return useQuery({
    queryKey: ['ipData', ip],
    queryFn: async () => {
      const res = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`
      );
      if (!res.ok) throw new Error('Erro ao buscar IP');
      return res.json();
    },
    enabled: enabled && !!ip,
  });
}
