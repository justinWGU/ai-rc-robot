import { useEffect, useState } from 'react';
import ModeSelector from '../../components/ModeSelector/ModeSelector';
import VideoFeed from '../../components/VideoFeed/VideoFeed';
import Controls from '../../components/Controls/Controls';

function RobotInterface() {
  const [error, setError] = useState('');
  const [mode, setMode] = useState(''); // manual - auto
  const [loading, setLoading] = useState(true);

  // send request to blink led once clicked
  async function handleLED() {
    const url = 'http://192.168.1.55:8000/api/blink-led/';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setError('Could not toggle LED!');
      }
    }
    catch (e) { console.log(e); }
  }

  return (
    <div className='border-red-400'>
      <h1 className='text-3xl text-center'>AI RC Robot</h1>
      {error && <h2 style={{ color: 'red' }}>{error}</h2>}

      <div className='flex justify-center border border-red-400'>
        <ModeSelector handleLED={handleLED} />
        <VideoFeed />
      </div>
      <div className='flex justify-center'>
        <Controls />
      </div>
    </div>
  )
} export default RobotInterface;