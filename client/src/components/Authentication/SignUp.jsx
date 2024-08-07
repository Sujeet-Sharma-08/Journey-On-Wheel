import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignupImage from '../Authentication/authentication-images/sign up.png';
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import toast from "react-hot-toast";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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
    toast.success("form submitted successfully!")
  };

  const [showPassword, setShowPassword] = useState(false);
  const passwordHandler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full flex justify-center items-center relative">
      <div className="w-11/12 mx-auto flex justify-center mb-10">
      <div className="absolute w-[18rem] h-[18rem] rounded-full mt-[7rem] -z-10 -ml-[80rem] bg-[#5eadf5]"></div>
        <div className="flex justify-center items-center border border-black bg-[#ffffff] shadow-xl rounded-3xl h-[35rem] mt-[12rem] mb-10">
          <div className="w-full sm:w-[60rem] md:w-[40rem] flex flex-col justify-center items-center">
            <h2 className="text-[1.586rem] mb-2 font-bold text-black text-center leading-normal">
              SIGN UP
            </h2>
            <p className="text-black text-[1rem] flex justify-center text-center font-medium leading-normal -mt-2 mb-3 tracking-widest">
              Welcome, please sign up to start your journey
            </p>

            <form
              onSubmit={formSubmitHandler}
              className="flex flex-col justify-center items-center"
            >
              <div className="flex flex-col gap-2">
                <label className="font-semibold mt-[2px]" htmlFor="name">
                  User Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={changeHandler}
                  className="py-3 px-3 w-[16rem] mx-auto sm:w-[24rem] xl:w-[32rem] border border-black rounded-lg"
                  placeholder="Name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold mt-[2px]" htmlFor="phone">
                  Contact
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={changeHandler}
                  className="py-3 px-3 w-[16rem] mx-auto sm:w-[24rem] xl:w-[32rem] border border-black rounded-lg"
                  placeholder="Contact"
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <label className="font-semibold mt-[2px]" htmlFor="email">
                    Email
                  </label>
                  <Link to={'/'} className="flex justify-end text-blue-500 font-semibold">verify OTP</Link>
                </div>

                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={changeHandler}
                  className="py-3 px-3 w-[16rem] mx-auto sm:w-[24rem] xl:w-[32rem] border border-black rounded-lg"
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
                  className="py-3 px-3 w-[16rem] mx-auto sm:w-[24rem] xl:w-[32rem] border border-black rounded-lg"
                  placeholder="Password"
                />
                {showPassword ? (
                  <RxEyeOpen
                    onClick={passwordHandler}
                    className=" absolute mt-12 ml-[14rem] sm:ml-[22rem] text-xl"
                  />
                ) : (
                  <GoEyeClosed
                    onClick={passwordHandler}
                    className=" absolute mt-12 ml-[14rem] sm:ml-[22rem] text-xl"
                  />
                )}
              </div>

              <button
                type="submit"
                className="py-3 px-3 w-[16rem] mx-auto sm:w-[24rem] xl:w-[32rem] border  text-[1.2rem] font-bold mt-5 mb-5  hover:scale-105 transition-all shadow-xl duration-300 border-black rounded-lg bg-[#5eadf5]"
              >
                Sign Up
              </button>
              <p className="-mt-3 sm:mr-40">
                Already have an account?{" "}
                <Link className="text-blue-500 font-semibold" to="/login">
                  Login
                </Link>
              </p>
            </form>
          </div>

          <div className="hidden sm:block h-[35rem] justify-center items-center border border-black shadow-xl rounded-3xl  md:max-w-[45rem] lg:max-w-4xl xl:max-w-7xl  ">
            <img
              className="w-full h-full bg-cover"
              src={SignupImage}
              alt="Sign Up"
            />
          </div>
        </div>
        <div className="absolute w-14 h-14 bg-[#5eadf5] mt-[47.3rem] mr-[42rem] rounded-full "></div>
       
      </div>
    </div>
  );
};

export default SignUp;
