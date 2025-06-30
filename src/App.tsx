import { useEffect, useState } from 'react';
import './App.css'
import recording from './assets/Screen Recording 2025-06-29 at 4.49.39 PM.mov';

function App() {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();


  async function getData() {
    try {
      const request: Request = new Request('https://www.example.org');
      const response: Response = await fetch(request);
      if (response.ok) {
        const result: any = await response.json();
        setData(result);
      } 
      else {
        setError("Response from server not ok");
      }
    } catch(err) {
        setError("Response from server ok, but other error occurred.")
        console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <h1>AI RC Robot</h1>
     {error && <h2 style={{color: 'red'}}>{error}</h2>}
      <video width={700} height={500} src={recording} controls></video>
    </>
  )
}

export default App
