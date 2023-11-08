import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Register from './register/Register'
import Login from './login/Login'

const GastosApp = () => {
    const [userData, setUserData] = useState();
  return (
    <div>
      <Routes>
        <>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login setUserData={setUserData}/>}/>
          <Route path='/register' element={<Register setUserData={setUserData}/>}/>
        </>
      </Routes>
    </div>
  )
}

export default GastosApp