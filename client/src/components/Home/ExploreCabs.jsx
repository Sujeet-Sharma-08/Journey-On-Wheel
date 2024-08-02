import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ExploreCabs = () => {
  const [activeDiv, setActiveDiv] = useState(null);

  const handleDivClick = (index) => {
    setActiveDiv(index);
  };

  return (
    <div className="flex flex-col ml-2 mr-2 mt-10 sm:mt-[9.8rem]">
      <div className="w-10/12 mx-auto flex flex-col justify-center bg-[#F4F5F0] items-center border-2  mb-5 rounded-3xl shadow-2xl border-black p-5">
        <div className="flex justify-center items-center gap-2 border-2 rounded-md  border-black shadow-2xl ">
          <div className="container w-[27rem]  flex mx-auto">
            {["AROUND TRIP", "LOCAL", "AIRPORT"].map((divContent, index) => (
              <div key={index} className="">
                <div
                  className={`py-2 w-[9rem] hover:cursor-pointer border-r-2 text-center font-semibold border-black ${
                    activeDiv === index
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => handleDivClick(index)}
                >
                  {divContent}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:grid sm:grid-cols-4 gap-5 mt-10 mb-10 w-full">
          <div className="flex sm:flex-col gap-5">
            <p className="text-[14px] font-semibold mt-3 text-black leading-3 not-italic">
              FROM
            </p>
            <input
              className="outline-none bg-[#f4f5f0] w-full border-b-2 border-black py-1"
              placeholder="e.g. Bangalore"
              type="text"
            />
          </div>

          <div className="flex sm:flex-col gap-5">
            <p className="text-[14px] sm:text-[1.25rem] font-semibold mt-3 text-black leading-3 not-italic">
              TO
            </p>
            <input
              className="outline-none w-full bg-[#f4f5f0]  border-b-2 border-black py-1"
              placeholder="e.g. Jaipur"
              type="text"
            />
          </div>

          <div className="flex sm:flex-col gap-5">
            <p className="text-[14px] sm:text-[1.25rem] font-semibold mt-3 text-black leading-3 not-italic">
              PICK UP
            </p>
            <input
              className="outline-none w-full bg-[#f4f5f0] border-b-2 border-black py-1"
              placeholder="07/05/2024"
              type="date"
            />
          </div>

          <div className="flex sm:flex-col gap-5">
            <p className="text-[14px] sm:text-[1.25rem] font-semibold text-black mt-3 leading-3 not-italic">
              PICK UP AT
            </p>
            <input
              className="outline-none w-full bg-[#f4f5f0] border-b-2 border-black py-1"
              placeholder="e.g. Bangalore"
              type="time"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center -mt-12 mb-10  ">
        <Link
          to={"/exploremore"}
          className="bg-[#5eadf5] rounded-lg text-center py-3 border-2 border-black bg- h-14 w-[14rem] hover:scale-105 transition duration-300 text-xl font-bold"
        >
          EXPLORE CABS
        </Link>
      </div>
    </div>
  );
};

export default ExploreCabs;
