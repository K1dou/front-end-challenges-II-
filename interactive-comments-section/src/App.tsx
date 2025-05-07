import CardComment from './components/CardComment'
import CommentThread from './components/CommentThread';
import Container from './components/Container'
import { useComments } from './hooks/useComments'
import './index.css'

function App() {

  const { data } = useComments();


  return (
    <>
      <Container className='min-h-dvh bg-Grey-50'>
        {data?.map((comment: any) => (
          <CommentThread key={comment.id} comment={comment} />
        ))}
      </Container>
    </>
  )
}

export default App
