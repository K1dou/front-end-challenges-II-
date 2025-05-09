import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export function useLikeMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      commentId,
      userId,
    }: {
      commentId: number;
      userId: number;
    }) =>
      axios.post(
        `https://comments-api-c43806001036.herokuapp.com/api/v1/comments/${commentId}/${userId}/like`
      ),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    },
  });
}
