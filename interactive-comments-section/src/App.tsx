import { useEffect, useState } from 'react';
import CommentThread from './components/CommentThread';
import Container from './components/Container';
import FieldAddComent from './components/FieldAddComent';
import { useLoginContext } from './contexts/UserContext';
import { useLogin } from './hooks/useLogin';
import { useUser } from './hooks/useUser';
import './index.css';
import { useInfiniteComments } from './hooks/useInfiniteComments';
import { useInView } from 'react-intersection-observer';

function App() {
  const loginMutation = useLogin();
  const { user, setUser } = useLoginContext();
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  // useEffect(() => {
  //   if (!token) {
  //     loginMutation.mutate({
  //       email: 'julio@gmail.com',
  //       password: '123456',
  //     });
  //   }
  // }, []);

  const { data: userData } = useUser();
  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, [userData, setUser]);

  const {
    data: paginatedCommentsData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteComments();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const comments = paginatedCommentsData?.pages.flatMap((page) => page.content) ?? [];

  return (
    <Container className='min-h-dvh bg-Grey-50 pb-8'>
      {comments.map((comment: any) => (
        <CommentThread key={comment.id} comment={comment} />
      ))}

      <div ref={ref} style={{ height: 1 }} />
      {isFetchingNextPage && <p className="text-center mt-4">Carregando mais...</p>}

      <FieldAddComent className='mt-4' />
    </Container>
  );
}

export default App;
