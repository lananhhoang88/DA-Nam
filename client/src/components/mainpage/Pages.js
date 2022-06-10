import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './auth/Login'
import Home from './home-nckh/Home-nckh'


function Pages() {
  return (
    <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/nckh/dashboard" element={<Home/>}></Route>
    </Routes>
  )
}

export default Pages
