import { useState } from 'react'
import CardStep1 from './components/CardStep1'
import CardStep2 from './components/CardStep2'
import Container from './components/Container'
import FooterMain from './components/FooterMain'
import NavMain from './components/NavMain'
import './index.css'
import LayoutMain from './layouts/LayoutMain'
import { FormProvider } from './contexts/FormContext'

function App() {




  return (
    <>
      <FormProvider>
        <LayoutMain>


          <CardStep2 />

        </LayoutMain>
      </FormProvider>
    </>
  )
}

export default App
