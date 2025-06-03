import React, { useEffect } from 'react'
import axios from 'axios'
import { REQUEST_URL } from '../../backendUrl/user'
import { useDispatch, useSelector } from 'react-redux'
import { incrementUserNumber, setFeed } from '../../redux/slices/feedSlice'


const Feed = () => {

  const  pageNumber=useSelector((state)=>state.feed.pageNumber)
  const  userFeed=useSelector((state)=>state.feed.userFeed)
  const  userNumber=useSelector((state)=>state.feed.userNumber)
  const dispatch =useDispatch();
 
  var user={};

  if(userFeed){
    user=userFeed[userNumber]
  }
  



  const fetchUserFeed=async ()=>{
    const response=await axios.get(REQUEST_URL+"feed?page="+pageNumber,{withCredentials:true})
    console.log("feed->",response)
    dispatch(setFeed({feed:response?.data?.userIds}))

  }

  const Interested= async ()=>{
    dispatch(incrementUserNumber())
  }

  const Ignore=async()=>{
    dispatch(incrementUserNumber())
  }

  useEffect(()=>{
    
    fetchUserFeed()
  },[])
  return (
    <div className='flex justify-center'>
      <div className="card bg-base-300 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{user?.firstName+" "+user?.lastName}</h2>
    <p>{user?.about}</p>
    <div className="card-actions justify-between">
      <button className="btn btn-primary" onClick={Ignore}>Ignore</button>
      <button className="btn btn-primary" onClick={Interested}>Interested</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Feed
