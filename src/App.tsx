import {useState} from 'react'
import { LuSun ,LuMoon} from "react-icons/lu";
import BouncyText from './Word';
const App = () => {
  const [theme,setTheme] = useState('')
  return (
    <section className={`h-screen bg-white dark:bg-zinc-800 ${theme} overflow-hidden`}>
    <div className={`flex items-start justify-end m-4`}>
      <div className='bg-zinc-300 p-2 rounded-xl dark:bg-zinc-700'>
      <button onClick={()=>{setTheme('')}} className='bg-transparent dark:hover:bg-zinc-100/10 p-3 rounded-lg cursor-pointer text-black dark:text-white text-center hover:bg-zinc-400'><LuSun/></button>
      <button onClick={()=>{setTheme('dark')}} className='bg-transparent dark:hover:bg-zinc-100/10 p-3 rounded-lg cursor-pointer text-black dark:text-white text-center  hover:bg-zinc-400'><LuMoon/></button>
      </div>
    </div>
    <div className='flex justify-center items-center h-100'>
      <h1 className='text-3xl font-bold text-center dark:text-white '> <BouncyText text='Under Constructor'/></h1>
    </div>
    </section>
  )
}

export default App