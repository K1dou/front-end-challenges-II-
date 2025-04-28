import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Container from './components/Container.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Container>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Container>

  </StrictMode>,
)
