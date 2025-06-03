import { Outlet, useNavigate } from "react-router"
import Navbar from "../components/common/Navbar"
import { setUser } from "../redux/slices/userSlice"
import React, { useEffect } from 'react'
import Footer from "../components/common/Footer"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { BASE_URL ,PROFILE_URL} from "../backendUrl/user"

const HomePage = () => {

  const isLoggedIn=useSelector((state)=>state.user.isLoggedIn)
  const dispatch=useDispatch();

  const navigate=useNavigate();
  const fetchUserData=async()=> {
  try {
    const response = await axios.get(PROFILE_URL + "view",{withCredentials:true});

   
    
    dispatch(setUser({userInfo:response?.data?.data}));  // update Redux
     
   

  } catch (error) {
    console.log(error);
  }
}




  useEffect(()=>{

   
    
    fetchUserData();

    if(!isLoggedIn){
      navigate("/login")
    }
    else{
      navigate("/feed")
    }
   
   

    // (!isLoggedIn)&&navigate("/login")



  },[isLoggedIn])
  return (
    <div className="h-[100vh] flex  flex-col justify-between"> 
    
    <Navbar></Navbar>
    <Outlet/>
    <Footer/>
    
    </div>
  )
}

export default HomePage
