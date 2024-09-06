import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChatList from './ChatList'
import SwitchOrganization from './Organizations'
import LeadsList from './Leads'
import TeamManagement from './Team'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/explore' element={<ChatList />} />
          <Route path='/org' element={<SwitchOrganization />} />
          <Route path='/leads' element={<LeadsList />} />
          <Route path='/team' element={<TeamManagement />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
