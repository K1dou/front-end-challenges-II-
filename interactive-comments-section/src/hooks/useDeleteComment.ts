import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export function useDeleteComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ idComment }: { idComment: number }) =>
      axios.delete(
        `https://comments-api-c43806001036.herokuapp.com/api/v1/comments/${idComment}`
      ),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    },
  });
}
