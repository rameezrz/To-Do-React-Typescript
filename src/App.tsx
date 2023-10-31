
import './App.css'
import ImageHeader from './components/ImageHeader'
import svg from './assets/delete.svg'
import { useState } from 'react'

function App() {
  
  const [items,setItems] = useState<string[]>([])
  const [inputValue, setInputValue] = useState<string>("")

  return (
    <div className='h-[100vh] flex flex-col items-center justify-center'>
      <ImageHeader/>
      <div className='w-[350px]'>
        <form className='mb-'>
          <input type="text" className='w-full p-2 mb-2 rounded-sm'/>
          <button className='bg-gray-700 w-full py-2'>Add</button>
        </form>
        <div className='h-52 overflow-y-auto'>
          <div className='flex justify-between items-center border border-slate-600 pl-2 mb-2 mr-1 py-2'>
            <p>Javascript</p>
            <button><img src={svg} className='w-5 h-5' alt="" /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
