import { useState } from 'react'
import CardComment from './components/CardComment'
import Container from './components/Container'
import FieldAddComent from './components/FieldAddComent'
import { useComments } from './hooks/useComments'
import './index.css'

function App() {

  const { data } = useComments();
  const [like, setLike] = useState(data?.likeCount);

  return (
    <>
      <Container>
        {data?.map((item: any) => (

          <CardComment
            key={item.id}
            id={item.id}
            name={item.author.username}
            content={item.content}
            like={item.likeCount}
            src={item.author.avatarUrl}

          />
        ))}



      </Container>
    </>
  )
}

export default App
