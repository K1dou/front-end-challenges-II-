import { useEffect } from 'react';
import CommentThread from './components/CommentThread';
import Container from './components/Container';
import FieldAddComent from './components/FieldAddComent';
import Navbar from './components/NavBar';
import { useLoginContext } from './contexts/UserContext';
import { useInfiniteComments } from './hooks/useInfiniteComments';
import { useUser } from './hooks/useUser';
import './index.css';

function App() {
  const { setUser } = useLoginContext();



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





  const comments = paginatedCommentsData?.pages.flatMap((page) => page.content) ?? [];

  return (
    <Container className=' min-h-dvh bg-Grey-50 pb-8 md:w-[850px]'>

      <Navbar />
      <div className='pb-16'></div>

      {comments.map((comment: any) => (
        <CommentThread key={comment.id} comment={comment} />
      ))}

      {hasNextPage && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            {isFetchingNextPage ? 'Carregando...' : 'Carregar mais comentários'}
          </button>
        </div>
      )}

      <FieldAddComent className='mt-4 ' />
    </Container>
  );
}

export default App;
