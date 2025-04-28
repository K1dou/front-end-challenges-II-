import { useState } from 'react';
import Card from './components/Card'
import Input from './components/Input'
import './index.css'

function App() {

  const [ipData, setIpData] = useState({
    ip: '',
    location: '',
    timezone: '',
    isp: '',
  });

  function handleIpDataChange(data: typeof ipData) {
    setIpData(data);
  }

  return (
    <>
      <main className=' bg-black w-full flex flex-col items-center'>

        <nav className='relative flex flex-col items-center z-0 bg-[url(/pattern-bg-mobile.png)] w-full h-[300px] '>

          <h1 className='text-center pt-5 font-bold text-[26px] text-white'>IP Address Tracker</h1>

          <Input onDataChange={setIpData} className='mt-5'></Input>

          <Card
            ip={ipData?.ip || '192.212.174.101'}
            location={ipData?.location || 'Brooklyn, NY 10001'}
            timezone={ipData?.timezone || 'UTC -05:00'}
            isp={ipData?.isp || 'SpaceX Starlink'}
            className='absolute -bottom-30 z-10' />

        </nav>






      </main>
    </>
  )
}

export default App
