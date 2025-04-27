import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Container from './components/Container'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Container className='bg-Grey-200 flex flex-col  items-center lg:justify-center'>
      <App />
    </Container>

  </StrictMode>,
)
