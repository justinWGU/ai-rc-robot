import { useState } from 'react';
import led from './assets/led.png';
import './App.css'

function App() {
  const [error, setError] = useState<string>('');

  // send pressed key to backend to process as servo movement command
  async function handleKeyDown(e: React.KeyboardEvent) {
    const pressedKey = e.code;
    const url = 'http://192.168.1.55:8000/api/rotate-camera/';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command: pressedKey }),
      });
      if (!response.ok) {
        setError('Could not send movement command!');
      }
    }
    catch (e) { console.log(e); }
  }

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
    <div className='main'>
      <h1>AI RC Robot</h1>
      {error && <h2 style={{ color: 'red' }}>{error}</h2>}
      {/* <img className='live-feed' width={500} height={300} src='http://192.168.1.55:8000/api/test/' alt='Failed to get video feed!'/> */}
      <div>
        <button className='control-btn' onKeyDown={handleKeyDown}>Operate</button>
        <img onClick={handleLED} className='led-img' width={25} height={25} src={led}></img>
      </div>
    </div>
  )
}

export default App
