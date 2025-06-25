import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetSignupData, setSignupData } from '../redux/slices/signupSlice';
import axios from 'axios';
import { signupUrl } from '../backendUrl/user';

const Otp = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const formdata=useSelector((state)=>state.signup);

  const signup=async (formdata)=>{
    const response=await axios.post(signupUrl+"signup",formdata)
    console.log("response->",response)
  }

  useEffect(()=>{
console.log("useEffect run")
if(formdata.otp){
  console.log(formdata)
  signup(formdata)
  dispatch(resetSignupData())
}
  },[formdata])

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleSubmit = async() => {
    const fullOtp = otp.join('');
    if (fullOtp.length < 6) return alert('Please enter complete OTP.');
   
    dispatch(setSignupData({"otp":fullOtp}))


    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body space-y-4 text-center">
          <h2 className="text-2xl font-bold">OTP Verification</h2>
          <p className="text-sm text-gray-500">Enter the 6-digit code sent to your email or phone.</p>

          <div className="flex justify-center gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                className="input input-bordered w-10 text-center text-lg"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>

          <button className="btn btn-primary w-full mt-4" onClick={handleSubmit}>
            Verify OTP
          </button>

          <p className="text-sm">
            Didn't receive the code?{' '}
            <span className="link link-primary cursor-pointer">Resend</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Otp;
