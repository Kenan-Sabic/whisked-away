import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage'
import Browse_banner from './components/Browse_home'
import Registration from './pages/Registration'
import HomePage from './pages/Home'
import { Routes , Route } from 'react-router-dom'
import UserPage from './pages/UserPage'


function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}>
          
        </Route>
        <Route path='/user' element={<UserPage/>}>
        </Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<Registration/>}></Route>
        
      </Routes>

       
      
       
    </div>
  )
}

export default App
