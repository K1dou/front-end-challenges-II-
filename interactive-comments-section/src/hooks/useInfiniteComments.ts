import { useInfiniteQuery } from '@tanstack/react-query';

export function useInfiniteComments() {
  const token = localStorage.getItem('token');
  const enabled = !!token;

  return useInfiniteQuery({
    queryKey: ['comments'],
    enabled,
    queryFn: async ({ pageParam = 0 }) => {
      const res = await fetch(
        `https://comments-api-c43806001036.herokuapp.com/api/v1/comments/comments?page=${pageParam}&size=5&sort=createdAt,desc`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // envia o token corretamente
          },
        }
      );

      if (!res.ok) {
        const error = await res.text();
        console.error('Erro ao buscar comentários:', res.status, error);
        throw new Error('Erro ao buscar comentários');
      }

      const data = await res.json();
      return data;
    },
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || !allPages) return undefined;
      return lastPage.last ? undefined : allPages.length;
    },
    initialPageParam: 0,
  });
}
