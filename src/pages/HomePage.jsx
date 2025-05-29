import { Outlet } from "react-router"
import Navbar from "../components/common/Navbar"
import React from 'react'
import Footer from "../components/common/Footer"

const HomePage = () => {
  return (
    <div className="h-[100vh] flex  flex-col justify-between"> 
    
    <Navbar></Navbar>
    <Outlet/>
    <Footer/>
    
    </div>
  )
}

export default HomePage
