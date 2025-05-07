import { useQuery } from '@tanstack/react-query';

export function useComments() {
  const query = useQuery({
    queryFn: () =>
      fetch(
        'https://comments-api-c43806001036.herokuapp.com/api/v1/comments/comments'
      ).then((res) => res.json()),
    queryKey: ['comments'],
  });
  return query;
}
