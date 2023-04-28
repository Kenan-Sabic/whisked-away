import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage'
import Browse_banner from './components/Browse_home'
import Registration from './pages/Registration'

function App() {


  return (
    <div>
        <Navbar/>
        <Browse_banner/>
        
        <LoginPage/>
        <Registration/>
        <Footer/>
    </div>
  )
}

export default App
