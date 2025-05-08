import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export function useCommentMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ content, userId }: { content: string; userId: number }) =>
      axios.post(
        `https://comments-api-c43806001036.herokuapp.com/api/v1/comments/create`,
        {
          content,
          userId,
        }
      ),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    },
  });
}
