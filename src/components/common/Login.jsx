import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate=useNavigate();

  const formdata=useRef({email:"",password:""});

  const [test,setTest]=useState(0);
  const dispatch=useDispatch();


 const SubmitData=async ()=>{
  const {email,password}=formdata.current
  try {
    const response=await axios.post("http://localhost:4002/auth/login",{
      email:email,
      password:password

    },{
      withCredentials:true
    })

    dispatch({
      type:"setUser",
      payload:response.data
    })

    navigate("/feed");

    
  } catch (error) {
    console.log("error in login is ->",error)
    
  }
 }

  const ChangeHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;

        const newUpdatedFormData={...formdata.current};
        newUpdatedFormData[name]=value;

        formdata.current=newUpdatedFormData;
        
      

        
  }
 
  return (
    <div className='w-[100%] flex justify-center' >
      <div className="card card-border bg-base-300 w-96">
  <div className="card-body">
    <h2 className="card-title">LOGIN</h2>
    <label for="email" >EMAIL:</label>
    <input className='bg-white h-7 text-black rounded-md' id='email' name='email' onChange={ChangeHandler}></input>
    <label for="password">Password:</label>
    <input className='bg-white h-7 text-black rounded-md' id='password' name='password' onChange={ChangeHandler}></input>
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={SubmitData}>Login</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login
