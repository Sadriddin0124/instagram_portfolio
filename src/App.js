import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import SignUp from './components/Auth/SignUp/SignUp'
import Profile from './components/Profile/Profile'
import SideBar from './components/SideBar/SideBar'
import './components/SideBar/SideBar.scss'
const App = () => {
  const [sidebarNone, setSidebarNone] = useState(false)
  useEffect(()=> {
    let sidebar__none = localStorage.getItem("sidenone")
    let boolean = JSON.parse(sidebar__none)
    setSidebarNone(boolean)
    console.log(boolean);
  })
  return (
    <div className='main'>
      <div className={sidebarNone === false ? "sidebaNone" : ""}>
        <SideBar/>
      </div>
      <div>
      <Routes>
        <Route path='/' element={<Auth setSidebarNone={setSidebarNone} sidebarNone={sidebarNone}/>}/>
        <Route path='signup' element={<SignUp/>}></Route>
        <Route path='profile' element={<Profile/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
