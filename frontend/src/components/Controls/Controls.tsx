// interface ControlsProps {
// }

import { useGetPressedKeys } from "../../hooks/useGetPressedKeys";

function Controls() {

  // const pressedKeys = useGetPressedKeys();
  useGetPressedKeys();
  const pressedKeys = { w: false, a: false, s: true, d: false }

  return (
    <div className='border border-red-400'>
      <button className={pressedKeys.w ? 'border border-blue-400 p-5 ml-7 mb-2 bg-blue-400' : 'border border-blue-400 p-5 ml-7 mb-2'}>W</button> {/*why doesn't dynamic rednering tyles work*/}
      <div className='flex gap-3'> {/* How to make all these buttons the same exact size */}
        <button className='border border-blue-400 p-5 row-start-2'>A</button>
        <button className='border border-blue-400 p-5 row-start-2'>S</button>
        <button className='border border-blue-400 p-5 row-start-2'>D</button>
      </div>
    </div >
  );
} export default Controls;