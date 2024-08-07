import React from "react";
import { FaWhatsapp, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (

    <div className="overflow-y-hidden relative w-full -mb-[3.5rem]">
    <div className="bg-[#5eadf5] rounded-t-[3.75rem] ">
      <div className="w-11/12 mx-auto ">
        {/* first div */}
    
        <div className="flex gap-4 ">
          <p className="flex justify-center items-center mt-5 w-[30rem] h-[3rem] md:w-[20rem] md:h-[5rem] lg:h-[6.5rem] xl:w-[14rem] xl:h-[7rem] text-3xl md:text-5xl lg:text-6xl text-[#5eadf5] rounded-full bg-white">J</p>
          <div className="flex flex-col mt-7">
            <h2
              className="font-normal text-2xl ml-1 lg:text-[1.875rem] leading-normal"
              style={{ fontFamily: "Rubik Moonrocks" }}>JOURNEYONWHEEL
            </h2>

            <div className="flex">
              <p className=" mt-2 sm:text-start text-lg md:text-[1.125rem] font-normal leading-normal">
                Lorem ipsum dolor sit amet consectetur. Condimentum dictum arcu
                et congue eget sapien nunc lorem. In sit feugiat pellentesque
                sed vitae platea gravida. Nisl ullamcorper viverra nec porta
                auctor consectetur nunc amet egestas. Pellentesque arcu
                fermentum quam tempor massa volutpat. Massa sit in odio quis
                elementum.
              </p>
              {/* socail icons */}

              <div className="hidden sm:flex gap-5 text-3xl mt-2 text-black">
                <a className="hover:text-[#25d366] duration-300 transition-all" href="#">
                  <FaWhatsapp />
                </a>
                <a className="hover:text-[#f25454] duration-300 transition-all" href="#">
                  <FaInstagram />
                </a>
                <a className="hover:text-red-600 duration-300 transition-all" href="#">
                  <FaYoutube />
                </a>
                <a className="hover:text-white duration-300 transition-all" href="#">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* horizontal line */}
        <div className="mt-5 mb-5">
          <hr />
        </div>

        {/* second div */}
        <div className="grid grid-cols-2 sm:grid-cols-4 flex-col md:flex-row justify-center gap-2 sm:gap-3  ">
          <div>
            <h2 className=" text-xl lg:text-[1.875rem] mb-2 font-bold leading-normal text-black">
              COMPANY
            </h2>
            <div className="flex sm:items-start flex-col  gap-2  ">
              <Link
                className="text-black text-md md:text-[1.125rem] font-semibold hover:cursor-pointer"
                to="#"
              >
                About Us
              </Link>
              <Link
                className="text-black text-md md:text-[1.125rem] font-semibold hover:cursor-pointer"
                to="#"
              >
                Privacy & Policy
              </Link>
              <Link
                className="text-black text-md md:text-[1.125rem] font-semibold hover:cursor-pointer"
                to="#"
              >
                Terms & Conditions
              </Link>
              <Link
                className="text-black text-md md:text-[1.125rem] font-semibold hover:cursor-pointer"
                to="#"
              >
                Refunds
              </Link>
            </div>
          </div>

          <div className="-mt-5">
            <h2 className=" sm:text-start text-xl lg:text-[1.875rem] mt-5 mb-2 font-bold leading-normal twxt-black">
              SERVICES
            </h2>
            <div className=" flex flex-col gap-2 sm:items-start ">
              <Link
                className="text-black text-md md:text-[1.125rem] font-semibold hover:cursor-pointer"
                to="#"
              >
                Round Trips Cabs
              </Link>
              <Link
                className="text-black text-md md:text-[1.125rem] font-semibold hover:cursor-pointer"
                to="#"
              >
                Locals Rentals
              </Link>
              <Link
                className="text-black text-md md:text-[1.125rem] font-semibold hover:cursor-pointer"
                to="#"
              >
                Airports Transports
              </Link>
            </div>
          </div>

          <div className="-mt-5">
            <h2 className="sm:text-start text-xl lg:text-[1.875rem] mt-5 mb-2 font-bold leading-normal text-black">
              CONTACT
            </h2>
            <div className="flex flex-col gap-2 sm:items-start ">
              <a
                className="text-black text-md md:text-[1.125rem] font-semibold hover:cursor-pointer"
                href="tel:+918433700215"
              >
                +91 8433700215
              </a>
              <a
                className="text-black text-md md:text-[1.125rem] font-semibold hover:cursor-pointer"
                href="mailto:tanul@unarrow.com"
              >
                tanul@unarrow.com
              </a>
              <p className="text-black text-md md:text-[1.125rem] font-semibold hover:cursor-pointer">
                7 Streets New York
              </p>
            </div>

            <div className="flex md:hidden gap-3 text-[24px] mt-5">
                <a className="text-[#25d366]" href="#">
                  <FaWhatsapp />
                </a>
                <a className="text-[#f25454]" href="#">
                  <FaInstagram />
                </a>
                <a className="text-red-600" href="#">
                  <FaYoutube />
                </a>
                <a className="text-white" href="#">
                  <FaTwitter />
                </a>
              </div>
          </div>

          <div className="flex flex-col -mt-5 sm:items-start">
            <h2 className="sm:text-start text-xl lg:text-[1.875rem] mt-5 mb-2 font-bold leading-normal text-black">
              RAJASTHAN TRIP
            </h2>
            <p className="font-semibold text-md md:text-[1.125rem] ">
              Explore Rajasthan with <br /> our valuable pakages that <br />{" "}
              will definitely make your <br /> trip unforgattable ..
            </p>
            <a className="text-red-500" href="#">Explore More</a>
          </div>
        </div>

        <div className="mt-5 py-3">
          <hr />
          <p className="text-center font-semibold text-black mt-3 sm:text-lg">
            2024@ JOURNEYONWHEEL
          </p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Footer;
