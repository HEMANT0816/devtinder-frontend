import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../../backendUrl/user'
import { logout } from '../../redux/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'

const Navbar = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((state)=>state.user.userInfo)

  async function logoutUser(){

    const response =await axios.post(BASE_URL+"logout",{},{  withCredentials: true });
    dispatch(logout());
    navigate("/login") 

  }

  const ViewProfile=()=>{
    navigate("/profile")
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
            src={user?.photoUrl||"https://res.cloudinary.com/dmrzlkwx4/image/upload/v1748946528/x467zc4l25d1fqvrf1b6.jpg"} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>

          <button onClick={ViewProfile}>Profile</button>
          {/* <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a> */}
        </li>
        <li><Link to="/pending-request">Pending-Request</Link></li>
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
