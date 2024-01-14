import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Auth from './components/Auth/Auth'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Auth/>}/>
      </Routes>
    </div>
  )
}

export default App
