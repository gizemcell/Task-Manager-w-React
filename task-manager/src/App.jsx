import { useState } from 'react'
import './css/App.css'
import { TaskProvider } from './contexts/Context'
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"

function App() {
  

  return (
    <div>
      <TaskProvider>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      </TaskProvider>
    </div>
  )
}

export default App
