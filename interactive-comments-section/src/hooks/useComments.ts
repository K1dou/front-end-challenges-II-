import { useQuery } from '@tanstack/react-query';

export function useComments() {
  const query = useQuery({
    queryFn: () =>
      fetch(
        'https://comments-api-c43806001036.herokuapp.com/api/v1/comments/comments?sort=createdAt,desc'
      ).then((res) => res.json()),
    queryKey: ['comment'],
  });
  return query;
}
