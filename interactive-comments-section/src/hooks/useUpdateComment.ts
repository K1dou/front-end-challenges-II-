import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export function useUpdateComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      idComment,
      content,
    }: {
      idComment: number;
      content: string;
    }) =>
      axios.put(
        `https://comments-api-c43806001036.herokuapp.com/api/v1/comments/${idComment}`,
        {
          content,
        }
      ),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    },
  });
}
