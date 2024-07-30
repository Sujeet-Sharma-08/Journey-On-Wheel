import React from "react";
import frame1 from "../../assets/car_bg.jpg";
import { FaLocationArrow } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Frame1 = () => {
  return (
    <div className="realtive ">
      <img className="w-full h-full lg:h-[658px]" src={frame1} alt="" />
      <div className="">
        <h1 className="text-xl ml-8 sm:ml-16 lg:ml-28 -mt-40 sm:-mt-[28rem] leading-9 md:text-4xl lg:text-[4rem] xl:text-[4.5rem] text-white font-bold ">
          The Car Is Waiting <br /> <br /> For You..
        </h1>
        <div className="ml-8 sm:ml-16 lg:ml-28 sm:mt-2 lg:mt-5 xl:mt-7">
          <Link to={'/contactus'} className="flex gap-1 lg:mt-2 lg:ml-3 text-white ">
            <p className="xl:text-[1.2rem] font-semibold">Contact us </p>
            <p className=" text-[#FF6D1F] mt-[5px]">
              <FaLocationArrow />{" "}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
