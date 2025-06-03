
import {BrowserRouter} from "react-router-dom"
import {Routes,Route} from "react-router"
import './App.css'
import Login from './components/common/Login'
import Feed from './components/common/Feed'
import HomePage from './pages/HomePage'
import { useSelector } from 'react-redux'
function App() {
  const isLoggedIn=useSelector((state)=>state.user.isLoggedIn)

  

  return (
    
     
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}>
            <Route path='/login' element={<Login/>} />
            <Route path='/feed' element={<Feed/>} />
            <Route path='*' element={<div className='text-3xl text-center'>404 Not Found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
   
  )
}

export default App
