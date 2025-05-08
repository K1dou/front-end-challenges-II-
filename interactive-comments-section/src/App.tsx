import { useEffect, useState } from 'react';
import CommentThread from './components/CommentThread';
import Container from './components/Container';
import FieldAddComent from './components/FieldAddComent';
import { useLoginContext } from './contexts/UserContext';
import { useComments } from './hooks/useComments';
import { useLogin } from './hooks/useLogin';
import { useUser } from './hooks/useUser';
import './index.css';

function App() {

  const { data } = useComments();

  const loginMutation = useLogin();
  const { user, setUser } = useLoginContext();
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  useEffect(() => {
    if (!token) {
      loginMutation.mutate({
        email: 'julio@gmail.com',
        password: '123456',
      });
    }
  }, []);

  const { data: userData } = useUser(token);
  if (userData) {
    console.log(userData);
  }

  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, [userData, setUser]);



  return (
    <>
      <Container className='min-h-dvh bg-Grey-50 pb-8'>
        {data?.content?.map((comment: any) => (
          <CommentThread key={comment.id} comment={comment} />
        ))}

        <FieldAddComent type='send' className='mt-4 ' />
      </Container>
    </>
  )
}

export default App
