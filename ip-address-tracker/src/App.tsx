import { useState } from 'react';
import Card from './components/Card'
import Input from './components/Input'
import './index.css'
import Map from './components/Map';

function App() {

  const [ipData, setIpData] = useState({
    ip: '',
    location: '',
    timezone: '',
    isp: '',
    lat: 0,
    lng: 0,
  });


  return (
    <>
      <main className=' bg-black w-full flex flex-col items-center'>

        <nav className='relative flex flex-col items-center z-10 bg-[url(/pattern-bg-mobile.png)] w-full h-[300px] '>

          <h1 className='text-center pt-5 font-bold text-[26px] text-white'>IP Address Tracker</h1>

          <Input onDataChange={setIpData} className='mt-5'></Input>

          <Card
            ip={ipData?.ip || '192.212.174.101'}
            location={ipData?.location || 'California, South San Gabriel'}
            timezone={ipData?.timezone || '-07:00'}
            isp={ipData?.isp || 'SpaceX Starlink'}
            className='absolute -bottom-30 z-20 lg:-bottom-15 lg:shadow-2xl' />


        </nav>
        {ipData.lat && ipData.lng ? (
          <Map lat={ipData.lat} lng={ipData.lng} />
        ) : (
          <Map lat={34.04915} lng={-118.09462} />
        )}





      </main>
    </>
  )
}

export default App
