import { useState } from 'react';
import led from './assets/led.png';
import './App.css'

function App() {
  const [error, setError] = useState<string>('');

  async function handleKeyDown(e: React.KeyboardEvent) {
    const pressedKey: string = e.code;
    const url: string = 'http://localhost:8000/api/rotate-camera/';
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    // send post request w/ given key press
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ command: pressedKey }),
    });
    console.log(response);
  }

  function handleClick(e: React.MouseEvent) {
    alert("Led button pressed!");
  }

  return (
    <div className='main'>
      <h1>AI RC Robot</h1>
      {error && <h2 style={{color: 'red'}}>{error}</h2>}
      {/* <img className='live-feed' width={500} height={300} src='http://localhost:8000/api/test/' alt='Failed to get video feed!'/> */}
      <div>
        <button className='control-btn' onKeyDown={handleKeyDown}>Operate</button>
        <img onClick={handleClick} className='led-img' width={25} height={25} src={led}></img>
      </div>
    </div>
  )
}

export default App
