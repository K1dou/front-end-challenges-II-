import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export function useLikeMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (commentId: number) =>
      axios.post(
        `https://comments-api-c43806001036.herokuapp.com/api/v1/comments/${commentId}/like`
      ),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    },
  });
}
