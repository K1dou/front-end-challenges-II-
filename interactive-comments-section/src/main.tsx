import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { UserProvider } from './contexts/UserContext.tsx'
import Login from './components/Login.tsx';
import OAuth2Callback from './components/Oauth2Callback.tsx';
import ProtectedRoute from './router/ProtectedRoute.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <UserProvider>
      <BrowserRouter>
        <QueryClientProvider client={new QueryClient()}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/oauth2/callback" element={<OAuth2Callback />} />


            <Route path="/" element={<ProtectedRoute>  <App />  </ProtectedRoute>} />


          </Routes>

        </QueryClientProvider>
      </BrowserRouter>
    </UserProvider>
  </StrictMode>,
)
