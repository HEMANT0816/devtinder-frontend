import { useState } from 'react'
import {BrowserRouter} from "react-router-dom"
import {Routes,Route} from "react-router"
import './App.css'
import Navbar from './components/common/Navbar'
import Login from './components/common/Login'
import Feed from './components/common/Feed'
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}>
      <Route path='/login' element={<Login/>} />
      </Route>
    </Routes>
    
    </BrowserRouter>

    </>
     
    
  )
}

export default App
