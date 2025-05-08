import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export function useReplyMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      content,
      userId,
      parentId,
    }: {
      content: string;
      userId: number;
      parentId: number;
    }) =>
      axios.post(
        `https://comments-api-c43806001036.herokuapp.com/api/v1/comments/reply`,
        {
          content,
          userId,
          parentId,
        }
      ),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    },
  });
}
