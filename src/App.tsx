// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'

import { Icons } from './Icons'
import { Multicolor } from './Multicolor'
import { Logo } from './Logo'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route index element={<Icons />} />
      <Route path="/multicolor" element={<Multicolor />} />
      <Route path="/logo" element={<Logo />} />
    </Routes>
  )
}

export default App
