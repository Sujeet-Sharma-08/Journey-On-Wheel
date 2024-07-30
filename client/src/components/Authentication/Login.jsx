import React from "react";
import loginImgage from "../Authentication/authentication-images/login.png";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
    toast.success("logged in successfully!")
  };

  const [showPassword, setShowPassword] = useState(false);
  const passwordHandler = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-full flex justify-center items-center relative">
      <div className="w-11/12 mx-auto flex justify-center items-center py-36 ">
      <div className="absolute w-[18rem] h-[18rem] rounded-full  -mt-[20rem]  -z-10 -ml-[80rem] bg-[#5eadf5]"></div>
        <div className="flex justify-center items-center border border-black shadow-xl rounded-3xl mt-[3rem]  max-w-7xl h-[35rem] -mb-16">

          <div className="h-[35rem] w-[45rem]">
            <img className="w-full bg-cover h-full" src={loginImgage} alt="" />
          </div>

          <div className="flex flex-col justify-center items-center w-[50rem]">
            <h2 className="text-[1.586rem] mb-6 font-bold text-black text-center leading-normal">
              Login
            </h2>
            <p className="text-black text-[1rem] flex justify-center font-medium leading-normal -mt-2 mb-5 tracking-widest">
            Welcome Back,Please login to get Started
            </p>

            <form
              onSubmit={formSubmitHandler}
              className="flex flex-col justify-center items-center"
            >
              <div className="flex flex-col gap-2">
                <label className="font-semibold mt-[2px]" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={changeHandler}
                  className="py-3 px-3 w-[25rem] border border-black rounded-lg"
                  placeholder="E-mail"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold mt-[2px]" htmlFor="password">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={changeHandler}
                  className="py-3 px-3 w-[25rem] border border-black rounded-lg"
                  placeholder="Password"
                />
                 <Link to={'/'} className="flex justify-end text-blue-500">forgot password</Link>
                {showPassword ? (
                  <RxEyeOpen
                    onClick={passwordHandler}
                    className=" absolute mt-12 ml-[22rem] text-xl"
                    
                  />
                 
                ) : (
                  <GoEyeClosed
                    onClick={passwordHandler}
                    className=" absolute mt-12 ml-[22rem] text-xl"
                  />
                )}
              </div>

              <button
                type="submit"
                className="py-2 px-3 w-[25rem] text-[1.2rem] font-bold mt-5 mb-5 border hover:scale-105 transition-all shadow-xl duration-300 border-black rounded-lg bg-[#5eadf5]"
              >
                Login
              </button>
              <p className="-ml-[10rem] -mt-3">
                Don't have an account?{" "}
                <Link className="text-blue-500 font-semibold" to="/sign-up">
                  SignUp
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className="absolute w-14 h-14 bg-[#5eadf5] mt-[46rem] mr-[42rem] rounded-full"></div>
      </div>
    </div>
  );
};

export default Login;
