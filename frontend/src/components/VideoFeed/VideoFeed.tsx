import { useState } from "react";

function VideoFeed() {
  const [isOnline, setIsOnline] = useState(true);
  if (isOnline) {
    return (
      <img className='w-[700px] h-[300px] border border-red-400' src='http://192.168.1.55:8000/api/test/' onError={() => setIsOnline(false)} />
    );
  }
  else {
    return (
      <div className='p-5 m-5 w-[700px] h-[300px] border border-red-400 text-red-400'>Error occurred getting video feed!</div>
    );
  }
} export default VideoFeed;