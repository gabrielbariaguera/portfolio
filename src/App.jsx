import './App.css';
import { HiOutlineArrowLongDown } from "react-icons/hi2";
import EnterAnimation from './components/EnterAnimation';


function App() {

  return (
      <div className='flex min-h-screen flex-col md:flex-row'>
        <div className='relative min-h-[70vh] w-full bg-[#5B0E14] text-[#F1E194] md:h-screen md:w-[75vw]'>
          <EnterAnimation className='flex flex-col px-6 py-16 sm:px-10 md:mt-[35vh] md:ml-[15vw] md:p-0'>
            <p className='text-4xl sm:text-5xl md:text-[60px]'>Hello, I’m Gabriel!</p>
            <p className='text-3xl sm:text-4xl md:text-[45px]'>Software developer.</p>
            <p className='text-xl sm:text-2xl md:text-[30px]'>Have a problem? I solve it!</p>
            <hr className='mt-8 w-full max-w-150 -ml-0.5'/>
          </EnterAnimation>
          <HiOutlineArrowLongDown className='absolute bottom-6 left-1/2 hidden size-8 -translate-x-1/2 animate-bounce sm:block md:size-10 md:translate-x-0 md:left-[50vw] md:bottom-[5vh]'/>
        </div>
        <div className='min-h-[30vh] w-full bg-[#F1E194] md:h-screen md:w-[25vw]'></div>
      </div>
  )
}

export default App
