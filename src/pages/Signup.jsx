import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { updateSignupField } from '../redux/slices/signupSlice';
import { OTP_URL } from '../backendUrl/user';
import axios from 'axios';


const Signup = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const formData = useSelector(state => state.signup);

  const ChangeHandler = (e) => {
    dispatch(updateSignupField({ field: e.target.name, value: e.target.value }));
    console.log(formData);
  };

  const [error, setError] = useState('');

  const sendOtp=async(email)=>{
    try {
      const otp=await axios.post(OTP_URL+"/otp",{email})
      console.log(otp.data)
      
    } catch (error) {
      console.log(error.message)
    }
  }

 
  const SubmitData = () => {
    sendOtp(formData.email);
    navigate("/otp")
    // Call backend API here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
  <div className="card w-full max-w-md bg-base-100 shadow-xl">
    <div className="card-body space-y-3">
      <h2 className="text-2xl font-bold text-center">Create Account</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="label-text">First Name</label>
          <input
            type="text"
            name="firstName"
            className="input input-bordered w-full"
            onChange={ChangeHandler}
          />
        </div>

        <div>
          <label className="label-text">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="input input-bordered w-full"
            onChange={ChangeHandler}
          />
        </div>
      </div>

      <div>
        <label className="label-text">Email</label>
        <input
          type="email"
          name="email"
          className="input input-bordered w-full"
          onChange={ChangeHandler}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="label-text">Password</label>
          <input
            type="password"
            name="password"
            className="input input-bordered w-full"
            onChange={ChangeHandler}
          />
        </div>

        <div>
          <label className="label-text">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="input input-bordered w-full"
            onChange={ChangeHandler}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="label-text">Age</label>
          <input
            type="number"
            name="age"
            className="input input-bordered w-full"
            onChange={ChangeHandler}
          />
        </div>

        <div>
          <label className="label-text">Gender</label>
          <select
            name="gender"
            className="select select-bordered w-full"
            onChange={ChangeHandler}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <div className="card-actions flex-col mt-2">
        <button className="btn btn-primary w-full" onClick={SubmitData}>
          Sign Up
        </button>
        <p className="text-center text-sm">
          Already have an account?{' '}
          <Link to="/login" className="link link-primary">
            Login here
          </Link>
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default Signup;
