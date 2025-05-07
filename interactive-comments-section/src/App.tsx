import { useContext, useEffect, useState } from 'react';
import CardComment from './components/CardComment'
import CommentThread from './components/CommentThread';
import Container from './components/Container'
import { useComments } from './hooks/useComments'
import { useLogin } from './hooks/useLogin';
import './index.css'
import { useLoginContext } from './contexts/UserContext';
import { useUser } from './hooks/useUser';

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
      <Container className='min-h-dvh bg-Grey-50'>
        {data?.content?.map((comment: any) => (
          <CommentThread key={comment.id} comment={comment} />
        ))}
      </Container>
    </>
  )
}

export default App
