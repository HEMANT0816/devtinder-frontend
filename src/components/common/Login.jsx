import axios from "axios";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { setUser } from "../../redux/slices/userSlice";
import { BASE_URL } from "../../backendUrl/user";

const Login = () => {
  const navigate = useNavigate();

  const formdata = useRef({ email: "", password: "" });

  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const SubmitData = async () => {
    const { email, password } = formdata.current;
    try {
      const response = await axios.post(
        BASE_URL + "login",
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );

      dispatch(setUser({ userInfo: response?.data?.data }));

      navigate("/feed?page=1");
    } catch (error) {
      console.log("error in login is ->", error?.response?.data?.message);

      setError(error?.response?.data?.message);
    }
  };

  const ChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const newUpdatedFormData = { ...formdata.current };
    newUpdatedFormData[name] = value;

    formdata.current = newUpdatedFormData;
  };

  return (
    <div className="w-[100%] flex justify-center">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title">LOGIN</h2>
          <label htmlFor="email">EMAIL:</label>
          <input
            className="bg-white h-7 text-black rounded-md"
            id="email"
            name="email"
            onChange={ChangeHandler}
          ></input>
          <label htmlFor="password">Password:</label>
          <input
            className="bg-white h-7 text-black rounded-md"
            id="password"
            name="password"
            onChange={ChangeHandler}
          ></input>
          <div>{error ? error : null}</div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary w-full" onClick={SubmitData}>
              Login
            </button>
            <p>Are you new here? {" "}<Link to="/signup" className="link link-primary">Registere Here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
