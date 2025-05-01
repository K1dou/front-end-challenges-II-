import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import StepRouter from './components/StepRouter'
import { FormProvider } from './contexts/FormContext'
import './index.css'
import LayoutMain from './layouts/LayoutMain'

function App() {




  return (
    <>
      <BrowserRouter>
        <FormProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/step/1" />} />
            <Route path="/step/:id" element={
              <LayoutMain>
                <StepRouter />
              </LayoutMain>
            } />
          </Routes>
        </FormProvider>
      </BrowserRouter>

    </>
  )
}

export default App
