import React, { useEffect, useState } from "react";
import { preview } from "vite";

export async function useGetPressedKeys() {
  const [pressedKeys, setPressedKeys] = useState({ w: false, a: false, s: false, d: false });
  console.log('useGetPressedKeys file ran');
  // create listeners, onKey -> fetch(post) key -> err || update state
  useEffect(() => {
    console.log('useGetPressedKeys useEffect ran');

    // send pressed key to backend to process as servo movement command
    async function handleKeyDown(e: KeyboardEvent) {

      // setPressedKeys((prev) => ({ ...prev, w: true }));
      console.log('key down');
      // const pressedKey = e.code;
      // const url = 'http://192.168.1.55:8000/api/rotate-camera/';
      // try {
      //   const response = await fetch(url, {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify({ command: pressedKey }),
      //   });
      //   if (!response.ok) {
      //     setError('Could not send movement command!');
      //   }
      // }
      // catch (e) { console.log(e); }
    }

    async function handleKeyUp(e: KeyboardEvent) {
      console.log('Key Up');
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    }
  }, []);
}