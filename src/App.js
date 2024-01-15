import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import SignUp from './components/Auth/SignUp/SignUp'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='signup' element={<SignUp/>}></Route>
      </Routes>
    </div>
  )
}

export default App
