import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import SignUp from './components/Auth/SignUp/SignUp'
import Profile from './components/Profile/Profile'
import SideBar from './components/SideBar/SideBar'
const App = () => {
  return (
    <div>
      <div>
        <SideBar/>
      </div>
      <div>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='signup' element={<SignUp/>}></Route>
        <Route path='profile' element={<Profile/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
