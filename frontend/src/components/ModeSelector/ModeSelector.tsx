import led from '../../assets/led.png';

interface ModeSelectorProps {
  handleLED: () => Promise<void>;
}

function ModeSelector({ handleLED }: ModeSelectorProps) {

  return (
    <div className='border border-red-400 p-5 m-5 '>
      <h3>Mode: $CurrentMode</h3>
      <hr />
      <button className='m-3 p-2 border border-gray-600 rounded-lg'>Toggle Mode</button>
      <img onClick={handleLED} className='led-img' width={25} height={25} src={led}></img>
    </div>
  );
} export default ModeSelector;