import { useInfiniteQuery } from '@tanstack/react-query';

export function useInfiniteComments() {
  return useInfiniteQuery({
    queryKey: ['comments'],
    queryFn: async ({ pageParam = 0 }) => {
      const res = await fetch(
        `https://comments-api-c43806001036.herokuapp.com/api/v1/comments/comments?page=${pageParam}&size=10&sort=createdAt,desc`
      );
      if (!res.ok) throw new Error('Erro ao buscar comentários');
      return res.json();
    },
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || !allPages) return undefined;
      return lastPage.last ? undefined : allPages.length;
    },
    initialPageParam: 0,
  });
}
