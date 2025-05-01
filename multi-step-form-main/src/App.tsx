import { useState } from 'react'
import CardStep1 from './components/CardStep1'
import CardStep2 from './components/CardStep2'
import Container from './components/Container'
import FooterMain from './components/FooterMain'
import NavMain from './components/NavMain'
import './index.css'
import LayoutMain from './layouts/LayoutMain'
import { FormProvider } from './contexts/FormContext'
import CardStep3 from './components/CardStep3'
import CardStep4 from './components/CardStep4'

function App() {




  return (
    <>
      <FormProvider>
        <LayoutMain>
          <CardStep4 />
        </LayoutMain>
      </FormProvider>
    </>
  )
}

export default App
