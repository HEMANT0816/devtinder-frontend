import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../redux/slices/userSlice";
import axios from "axios";
import { PROFILE_URL } from "../../backendUrl/user";


const Profile = () => {


  // const user={}

  const referenceFormData=useRef({});
  const user = useSelector((state) => state.user.userInfo);
  const dispatch=useDispatch();
  const userCopy={...user};

  const ChangeHandler=(e)=>{
    const {name,value,files}=e.target;
    if(name=="photo"){
      const file = files[0];
      referenceFormData.current[name]=file;
    }
    else{
      userCopy[name]=value;
      referenceFormData.current[name]=value;
  
      
    }
   
    dispatch(editUser({userInfo:userCopy}))
 
  }

  const SubmitData=async ()=>{
   
    console.log(referenceFormData.current);
    const formData=new FormData();
    for (let key in referenceFormData.current){
      
        formData.set(key,referenceFormData.current[key]);
      

     
    }
     console.log("testing upload file",formData.get("photo"))
    try {
      const response= await axios.patch(PROFILE_URL+"edit",formData,{headers:{"Content-Type":'multipart/form-data',},withCredentials:true},);
      console.log("data after edit",response.data.data)
      dispatch(editUser({ userInfo: response?.data?.data }))
      
    } catch (error) {
      
    }

  }
  return (
    <div className="sm:flex-col justify-center items-center gap-5 flex">
      {/* edit form code */}
      <div>
        <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title">Edit Profile</h2>
          <label htmlFor="firstName">First Name:</label>
          <input
            className="bg-white h-7 text-black rounded-md"
            id="firstName"
            name="firstName"
            onChange={ChangeHandler}
            value={user?.firstName}
          ></input>
          <label htmlFor="lastName">Last Name:</label>
          <input
            className="bg-white h-7 text-black rounded-md"
            id="lastName"
            name="lastName"
            onChange={ChangeHandler}
            value={user?.lastName}
          ></input>
          <label htmlFor="age">Age:</label>
          <input
            className="bg-white h-7 text-black rounded-md"
            id="age"
            name="age"
            onChange={ChangeHandler}
            value={user?.age}
          ></input>
           <label htmlFor="photo">Profile Picture:</label>
          <input
            className="bg-white h-7 text-black rounded-md"
            id="photo"
            name="photo"
            type="file"
            onChange={ChangeHandler}
          ></input>
          <label htmlFor="gender">Gender:</label>
          <select
            className="bg-white h-7 text-black rounded-md"
            id="gender"
            name="gender"
            onChange={ChangeHandler}
           
          >
            <option value="">-select-</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
          
          
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={SubmitData}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* profile visual card code */}
      <div>
  <div className="card bg-base-300 w-96 h-[450px] shadow-sm"> {/* Set a fixed height */}
    <figure className="h-[60%]"> {/* Set figure to 60% of card height */}
      <img
        src={user?.photoUrl || "https://res.cloudinary.com/dmrzlkwx4/image/upload/v1741950034/userImage_inryw3.jpg"}
        alt="Profile Picture"
        className="w-full h-full object-cover" // Ensures image covers 60% height properly
      />
    </figure>
    <div className="card-body h-[40%] overflow-auto"> {/* Remaining 40% */}
      <h2 className="card-title">
        {user?.firstName + " " + user?.lastName}
      </h2>
      <p>
        <span>{user?.age}</span> <span>{user?.gender}</span>
      </p>
      <p>{user?.about}</p>
      <div className="card-actions justify-between">
        <button className="btn btn-primary">Ignore</button>
        <button className="btn btn-primary">Interested</button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Profile;
