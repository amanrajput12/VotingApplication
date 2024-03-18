import { useState } from 'react'

import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='bg-gray-950 text-pink-300'>Hello</h2>
      <Outlet/>
    </>
  )
}

export default App
