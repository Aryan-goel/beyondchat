import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChatList from './ChatList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/explore' element={<ChatList />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
