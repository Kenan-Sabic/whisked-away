import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage'
import Browse_banner from './components/Browse_home'
import Registration from './pages/Registration'
import HomePage from './pages/Home'
import { Routes , Route } from 'react-router-dom'


function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/browse' element={<Browse_banner/>}></Route>
      </Routes>

       
      
       
    </div>
  )
}

export default App
