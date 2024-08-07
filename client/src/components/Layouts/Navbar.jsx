import React, { useState } from "react";
import vector from "../../assets/home/Vector.png";
import { IoIosCall } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { GoTriangleRight, GoTriangleUp } from "react-icons/go";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [suvNav, setSubNav] = useState(false);

  const subNavHandler = () => {
    setSubNav(!suvNav);
  };

  const navHandler = () => {
    setNav(!nav);
  };

  const navLinks = [
    {
      id: 1,
      text: "ROUNDTRIPS CABS",
      link: "/services/roundtripscabs",
    },

    {
      id: 2,
      text: "LOCAL RENTALS",
      link: "services/localrentals",
    },

    {
      id: 3,
      text: "AIRPORT CABS",
      link: "services/airportcabs",
    },
  ];

  const navigate = useNavigate();
  const loginHandler = () => {
    navigate("/login");
  };

  const signUpHandler = () => {
    navigate("/sign-up");
  };

  return (
    <div className="w-full z-50 fixed">
      <div className="py-3 sm:py-5 w-full bg-[#5eadf5] rounded-b-xl">
        <div className="w-full p-1 sm:w-11/12 mx-auto">
          <div className="flex items-center sm:text-[1rem] justify-evenly sm:justify-between">
            <div className="flex mt-1 bg-[#000000] px-2 py-1 sm:py-2 rounded-md gap-1">
              <div className="flex mx-auto">
                <div className="flex bg-white rounded-md mx-auto">
                  <p className="mt-1 text-[0.55rem] sm:text-lg lg:text-xl sm:mt-[6px]">
                    <IoIosCall />
                  </p>
                  <p className="text-[#FF6D1F] px-1 mt-[2px] text-[0.55rem] sm:text-md lg:text-[1.1rem]">24x7</p>
                </div>
              </div>
              <p className="text-[#FFFFFF] mt-[2px] text-[0.55rem] sm:text-md lg:text-[1.1rem]">+91 8433700000</p>
            </div>
            <div
              className="font-normal text-[0.65rem] sm:text-xl lg:text-xl xl:text-3xl sm:text-[24px] sm:leading-[35.55px] sm:tracking-wider"
              style={{ fontFamily: "Rubik Moonrocks" }}
            >
              JOURNEYONWHEEL
            </div>
            <div className="flex  gap-3 ">
              <div className="flex gap-5 mr-10">
                {/* <button
                  onClick={signUpHandler}
                  className="hidden py-3 px-10 rounded-full text-lg font-bold hover:scale-105 transition-all border border-black duration-300 bg-gray-200"
                >
                  Sign up
                </button> */}
                {/* <button
                  onClick={loginHandler}
                  className="hidden md:block py-3 px-10 rounded-full text-lg font-bold hover:scale-105 transition-all duration-300 border border-black bg-gray-200"
                >
                  Login{" "}
                </button> */}
              </div>
              <div
                onClick={navHandler}
                className="w-[20px] h-[20px] lg:w-[35.88px] lg:h-[35.88px] "
              >
                <img src={vector} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-full">
        {nav && (
          <div className="relative flex w-full h-[100vh] bg-[#000000]">
            <div className="flex h-[30rem] w-[30rem] -ml-24 rounded-full bg-[#261240] blur-sm  border-[#1d0d31] shadow-2xl"></div>

            <div className="nav absolute flex flex-col gap-5 sm:gap-8 mt-[5rem] ml-[5rem]">
              <NavLink
                className="text-white font-bold mt-10 ml-10 text-lg  sm:text-xl lg:text-3xl"
                to={"/"}
              >
                HOME
              </NavLink>

              <div className="flex">
                <NavLink
                  onClick={subNavHandler}
                  className="text-white flex font-bold  ml-10 text-lg sm:text-xl lg:text-3xl"
                  to={"/services"}
                >
                  <p>SERVICES</p>
                  <div className=" -mt-[6px]">
                    {suvNav ? (
                      <GoTriangleUp size={50} />
                    ) : (
                      <GoTriangleRight size={50} />
                    )}
                  </div>
                </NavLink>
              </div>
              <NavLink
                className="text-white font-bold  ml-10 text-lg sm:text-xl lg:text-3xl"
                to={"/contactus"}
              >
                CONTACT US
              </NavLink>

              <NavLink
                className="text-white font-bold  ml-10 text-lg sm:text-xl lg:text-3xl"
                to={"/aboutus"}
              >
                ABOUT US
              </NavLink>
            </div>

            <div className="mt-[10rem] sm:mt-44 flex flex-col gap-3">
              {suvNav &&
                navLinks.map((navlink) => {
                  return (
                    <p className="px-2 text-white text-lg sm:text-xl lg:text-3xl font-bold">
                      <NavLink to={navlink.link} key={navlink.id}>
                        {navlink.text}
                      </NavLink>
                    </p>
                  );
                })}
            </div>

            <div className="flex overflow-hidden absolute right-0 mt-5 gap-5 justify-end items-center">
              <div className="mix-blend-plus-lighter h-[5rem] w-[5rem] mt-5 rounded-full bg-[#261240] blur-sm  border-[#1d0d31] shadow-2xl"></div>
              <div className="mt-[13rem] mr-5">
                <p className=" text-white text-lg">
                  701-Lane no.12near <br /> Air india ,Marine Line <br />
                  ,Mumbai,Maharashtra <br /> ,400010
                </p>
              </div>

              <div className="flex flex-col gap-2 mr-20 mt-[25rem]">
                <a className="text-white text-lg " href="tel:+91 8433700215">
                  +91 8433700215
                </a>
                <a className="text-white text-lg" href="mailto:tanul@unarrow.com">
                  tanul@unarrow.com
                </a>
                <div className="hidden sm:flex gap-5 text-3xl mt-2 text-black">
                  <a className="text-white " href="#">
                    <FaWhatsapp />
                  </a>
                  <a className="text-white" href="#">
                    <FaInstagram />
                  </a>
                  <a className="text-white" href="#">
                    <FaYoutube />
                  </a>
                  <a className="text-white" href="#">
                    <FaTwitter />
                  </a>
                </div>

                <div className="-mr-40 -mt-32 mix-blend-plus-lighter flex h-[20rem] w-[20rem] rounded-full bg-[#261240] blur-sm  border-[#1d0d31] shadow-2xl"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
