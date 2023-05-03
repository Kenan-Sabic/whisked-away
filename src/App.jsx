import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import Browse from './pages/Browse'
import Registration from './pages/Registration'
import HomePage from './pages/Home'
import { Routes , Route } from 'react-router-dom'


function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/browse' element={<Browse/>}></Route>
      </Routes> 
    </div>
  )
}

export default App
