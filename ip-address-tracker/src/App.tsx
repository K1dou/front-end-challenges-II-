import Card from './components/Card'
import Input from './components/Input'
import './index.css'

function App() {

  return (
    <>
      <main className=' bg-black w-full flex flex-col items-center'>

        <nav className='relative flex flex-col items-center z-0 bg-[url(/pattern-bg-mobile.png)] w-full h-[300px] '>

          <h1 className='text-center pt-5 font-bold text-[26px] text-white'>IP Address Tracker</h1>

          <Input className='mt-5'></Input>

          <Card className='absolute -bottom-30 z-10' />

        </nav>






      </main>
    </>
  )
}

export default App
