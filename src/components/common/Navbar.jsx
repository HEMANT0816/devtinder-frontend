import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../../backendUrl/user'
import { logout } from '../../redux/slices/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

const Navbar = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  async function logoutUser(){

    const response =await axios.post(BASE_URL+"logout",{},{  withCredentials: true });
    dispatch(logout());
    navigate("/login") 

  }

  return (
    <div className='w-[100%]'>
      <div >
         <div className="navbar bg-base-300 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Dev Tinder</a>
  </div>
  <div className="flex gap-2">
    {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
    <div className="dropdown dropdown-end mx-6">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><button onClick={logoutUser}>Logout</button></li>
      </ul>
    </div>
  </div>
</div>
      
    </div>
    </div>
  )
}

export default Navbar
