import React, { useState } from "react";
import vector from "../../assets/home/Vector.png";
import { IoIosCall } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { GoTriangleRight, GoTriangleUp } from "react-icons/go";
// import { RxCross1 } from "react-icons/rx";
import { ImCross } from "react-icons/im";
// import { RxCross2 } from "react-icons/rx";

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
      <div className="py-3 sm:py-5 justify-center items-center w-full bg-[#5eadf5] rounded-b-xl">
        <div className="w-full p-1 sm:w-11/12 mx-auto">
          <div className="flex items-center sm:text-[1rem] justify-between">
            <div className="flex ml-2 bg-[#000000] px-2 py-1 sm:py-2 rounded-md gap-1">
              <div className="flex mx-auto">
                <div className="flex bg-white rounded-md mx-auto">
                  <p className="mt-1 text-[0.55rem] sm:text-lg lg:text-xl sm:mt-[6px]">
                    <IoIosCall />
                  </p>
                  <p className="text-[#FF6D1F] px-1 mt-[2px] text-[0.55rem] sm:text-md lg:text-[1.1rem]">
                    24x7
                  </p>
                </div>
              </div>
              <p className="text-[#FFFFFF] mt-[2px] text-[0.55rem] sm:text-md lg:text-[1.1rem]">
                +91 8433700000
              </p>
            </div>
            <div
              className="font-normal text-[0.65rem] sm:text-xl lg:text-xl xl:text-3xl sm:text-[24px] sm:leading-[35.55px] sm:tracking-wider"
              style={{ fontFamily: "Rubik Moonrocks" }}
            >
              JOURNEYONWHEEL
            </div>
            <div className="flex  gap-3 ">
              {/* <div className=""> */}
              <button
                onClick={loginHandler}
                className="hidden md:block mr-8 py-2 px-10 rounded-full text-lg font-bold hover:scale-105 transition-all duration-300 border border-black bg-gray-200"
              >
                Login{" "}
              </button>
              {/* </div> */}
              <div
                onClick={navHandler}
                className=" "
              >
                {nav ? (
                  <ImCross className="lg:text-[1.65rem] sm:text-2xl sm:mt-[10px] " />
                ) : (
                  <img className="sm:mt-3 w-[20px] h-[20px]  sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[25px]" src={vector} alt="" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-full">
        {nav && (
          <div className="relative flex w-full h-[100vh] bg-[#000000]">
            <div className="flex -ml-[4rem] w-[14rem] h-[14rem] sm:h-[20rem] sm:w-[20rem] lg:w-[25rem] lg:h-[25rem] xl:h-[30rem] xl:w-[30rem] sm:-ml-32 rounded-full bg-[#261240] blur-sm border-[#1d0d31] shadow-2xl"></div>

            <div className="nav absolute flex flex-col gap-3 sm:gap-5 sm:mt-8  xl:gap-8 lg:mt-[5rem] lg:ml-[5rem]">
              <NavLink
                className="text-white font-bold mt-10 ml-10 text-sm sm:text-lg xl:text-2xl"
                to={"/"}
              >
                HOME
              </NavLink>

              <div className="flex">
                <NavLink
                  onClick={subNavHandler}
                  className="text-white flex font-bold  ml-10 text-sm sm:text-lg xl:text-2xl "
                  to={"/services"}
                >
                  <p>SERVICES</p>
                  <div className="text-[1.8rem] lg:text-[2.6rem] -mt-[3px] lg:-mt-1">
                    {suvNav ? (
                      <GoTriangleUp  />
                    ) : (
                      <GoTriangleRight />
                    )}
                  </div>
                </NavLink>
              </div>
              <NavLink
                className="text-white font-bold  ml-10 text-sm sm:text-lg xl:text-2xl"
                to={"/contactus"}
              >
                CONTACT US
              </NavLink>

              <NavLink
                className="text-white font-bold  ml-10 text-sm sm:text-lg xl:text-2xl"
                to={"/aboutus"}
              >
                ABOUT US
              </NavLink>

              <button
                onClick={loginHandler}
                className="ml-[12rem] -mt-[10rem] sm:hidden mr-8 py-[5px] px-6 rounded-full text-lg font-bold hover:scale-105 transition-all duration-300 border border-black bg-gray-200"
              >
                Login{" "}
              </button>
            </div>

            <div className="mt-[6.5rem] lg:mt-44 flex flex-col gap-3">
              {suvNav &&
                navLinks.map((navlink) => {
                  return (
                    <p className="px-2 text-white text-sm sm:text-lg xl:text-2xl font-bold">
                      <NavLink to={navlink.link} key={navlink.id}>
                        {navlink.text}
                      </NavLink>
                    </p>
                  );
                })}
            </div>

            <div className="flex overflow-hidden absolute right-0 mt-5 gap-20 justify-end items-center">
              <div className="mix-blend-plus-lighter -mr-[8rem] w-[3rem] h-[3rem] mt-20 sm:h-[5rem] sm:w-[5rem] sm:mt-5 rounded-full bg-[#261240] blur-sm  border-[#1d0d31] shadow-2xl"></div>
              <div className="mt-[14rem] sm:mt-[10rem] lg:mt-[13rem] -mr-[3rem]">
                <p className=" text-white text-xs sm:text-lg">
                  701-Lane no.12near <br /> Air india ,Marine Line <br />
                  ,Mumbai,Maharashtra <br /> ,400010
                </p>
              </div>

              <div className="flex flex-col gap-2 mr-5 mt-[24rem] sm:mt-[20rem] lg:mt-[25rem]">
                <a className="text-white text-xs sm:text-lg " href="tel:+91 8433700215">
                  +91 8433700215
                </a>
                <a
                  className="text-white text-xs sm:text-lg"
                  href="mailto:tanul@unarrow.com"
                >
                  tanul@unarrow.com
                </a>
                <div className="flex sm:flex gap-5 md:text-3xl text-black">
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

                <div className="-mr-40 lg:-mt-32 mix-blend-plus-lighter flex w-[10rem] h-[10rem] ml-[3rem] sm:w-[16rem] sm:h-[16rem] lg:h-[20rem] lg:w-[20rem] rounded-full bg-[#261240] blur-sm  border-[#1d0d31] shadow-2xl"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
