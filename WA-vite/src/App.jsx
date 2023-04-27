import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage'
function App() {


  return (
    <div>
        <Navbar/>
        <LoginPage/>
        <Footer/>
    </div>
  )
}

export default App
