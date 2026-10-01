import { useState } from 'react'
import './App.css'
import Login from './Login'

function App() {
  const [showLogin,setShowLogin] = useState(false)
  if (showLogin) {
    return <Login />
  }
    return (
    
  )
}

export default App