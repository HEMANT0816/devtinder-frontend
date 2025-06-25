import React, { useEffect, useState } from "react";
import axios from "axios";
import { REQUEST_URL, sendConnectionRequestURL } from "../../backendUrl/user";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementUserNumber,
  resetUserNumber,
  setFeed,
  setPageNumber,
} from "../../redux/slices/feedSlice";
import { useNavigate } from "react-router";
import { getPendingRequestURL } from "../../backendUrl/user";
import {fetchPendingRequestsSuccess,setUserNumber,incrementPageNumber} from "../../redux/slices/pendingRequestSlice"

const Card = () => {
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.pendingRequests.pageNumber);
  const userFeed = useSelector((state) => state.pendingRequests.pendingRequests);
  const userNumber = useSelector((state) => state.pendingRequests.userNumber);
  const [animationClass, setAnimationClass] = useState("");
  const [disabled, setDisabled] = useState(false);
  const navigate=useNavigate();
  const user = userFeed ? userFeed[userNumber] : {};
  console.log("userNumber->",userNumber)
  console.log("page->",pageNumber)

  const fetchUserFeed = async () => {
    try {
      const response = await axios.get(getPendingRequestURL, {
        withCredentials: true,
      });
     
      console.log("seeing the fetch Pendingdata",response?.data?.pendingRequests )
      if(response?.data?.pendingRequests.length==0){
       console.log("navigate by the useefect hook")
        navigate('/takeABreak')
      }

      const userData=response?.data?.pendingRequests.map((element)=>element.senderId);
      console.log("aray data",userFeed)
      dispatch(fetchPendingRequestsSuccess(userData));
    } catch (err) {
      console.error("Feed fetch failed:", err);
    }
  };

  const nextProfile = async (status) => {
    console.log("entered in nextProfirle")
    
   try {
    console.log("usernumber->",userNumber)

    //  const result=await axios.post(sendConnectionRequestURL+"/"+status+"/"+user?._id,{},{withCredentials:true})

    
     
    if(userNumber>=userFeed.length-1&&userNumber!=9){
      console.log("hi from this navigate page is redirected")
     navigate("/takeABreak")

    }

    if (userNumber >=9) {
      
      dispatch(incrementPageNumberPageNumber());
      dispatch(resetUserNumber());
    } else {
      dispatch(setUserNumber());
    }
   
    
    
    setAnimationClass("");
    setDisabled(false);
    
   } catch (error) {
    console.log(error.message)
   }
  };

  const handleAction = (direction,status) => {
    if (disabled) return;
    setDisabled(true);
    const exitAnimation = direction === "left" ? "swipe-left" : "swipe-right";
    setAnimationClass(exitAnimation);
    setTimeout(()=>{nextProfile(status)},400); // Match animation duration
  };

  useEffect(() => {
    fetchUserFeed();
  }, []);

  return (
    <div>
      {user?(<div className="flex justify-center items-center h-screen bg-gray-100">
      <div
        className={`card bg-base-300 w-96 h-[35rem] shadow-xl transition-transform duration-400 ease-in-out transform ${animationClass}`}
      >
        <figure className="h-[60%] w-full">
          <img
            src={
              user?.photoUrl ||
              "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            }
            alt="Profile"
            className="w-full h-full object-cover rounded-t-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {user?.firstName + " " + user?.lastName}
          </h2>
          <p className="text-sm text-gray-600">
            <span>{user?.age}, </span>
            <span>{user?.gender}</span>
          </p>
          <p className="text-sm text-gray-500">{user?.about}</p>
          <div className="card-actions justify-between mt-4">
            <button
              className="btn btn-error btn-outline w-[45%]"
              onClick={() => handleAction("left","ignore")}
              disabled={disabled}
            >
              Rejected
            </button>
            <button
              className="btn btn-success btn-outline w-[45%]"
              onClick={() => handleAction("right","interested")}
              disabled={disabled}
            >
              Accepted
            </button>
          </div>
        </div>
      </div>
    </div>):(null)}
    </div>
  );
};

export default Card;
