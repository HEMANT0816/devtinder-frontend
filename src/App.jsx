
import {BrowserRouter} from "react-router-dom"
import {Routes,Route} from "react-router"
import './App.css'
import Login from './components/common/Login'
import Feed from './components/common/Feed'
import HomePage from './pages/HomePage'
import { useSelector } from 'react-redux'
import Profile from "./components/common/Profile"
import Signup from "./pages/Signup"
import Otp from "./pages/Otp"
import TakeABreak from "./pages/TakeAbreak"
import PendingRequest from "./pages/PendingRequest"
function App() {
  const isLoggedIn=useSelector((state)=>state.user.isLoggedIn)

  

  return (
    
     
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}>
            <Route path='/login' element={<Login/>} />
            <Route path='/feed' element={<Feed/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path="/pending-Request" element={<PendingRequest />} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/otp' element={<Otp/>} />
            <Route path='/takeABreak' element={<TakeABreak/>} />
            <Route path='*' element={<div className='text-3xl text-center'>404 Not Found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
   
  )
}

export default App
