import { useEffect, useState } from 'react';
import './App.css'

function App() {
  // const [data, setData] = useState<any>();
  // const [error, setError] = useState<any>();


  // async function getData() {
  //   try {
  //     const url = 'http://localhost:8000/api/test/'
  //     const response: Response = await fetch(url);
  //     console.log("Response: ", response);
  //     if (response.ok) {
  //       const result: any = await response.json();
  //       setData(result);
  //     } 
  //     else {
  //       setError("Response from server not ok");
  //     }
  //   } catch(err) {
  //       setError("Response from server ok, but other error occurred.")
  //       console.log(err);
  //   }
  // }

  // useEffect(() => {
  //   setTimeout(getData, 2000);
  // });


  return (
    <>
      <h1>AI RC Robot</h1>
      {/* {error && <h2 style={{color: 'red'}}>{error}</h2>} */}
      <img width={250} height={200} src='http://localhost:8000/api/test/'></img>
    </>
  )
}

export default App
