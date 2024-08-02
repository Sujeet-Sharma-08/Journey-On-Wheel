import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import MarutiSwift from "./car-collection-images/maruti swift.png";
import MarutiCelerio from "./car-collection-images/maruti celerio.png";
import TataAltroz from "./car-collection-images/altroz.png";
import RenaultKiger from "./car-collection-images/renault kiger.png";
import { FaCar } from "react-icons/fa";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { BsHandbagFill } from "react-icons/bs";
import { GrSettingsOption } from "react-icons/gr";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";

const SelectCar = () => {
  const CarCollections = [
    {
      id: 1,
      Brand: "Maruti Swift",
      img: MarutiSwift,
      fare: 2489,
      text: "Extra Km will be charged at 10/km",
      class: "Economy",
    },
    {
      id: 2,
      Brand: "Maruti Celerio",
      img: MarutiCelerio,
      fare: 2489,
      text: "Extra Km will be charged at 10/km",
      class: "Super Economy",
    },
    {
      id: 3,
      Brand: "Tata Altroz",
      img: TataAltroz,
      fare: 2489,
      text: "Extra Km will be charged at 10/km",
      class: "Compact",
    },
    {
      id: 4,
      Brand: "Renault Kiger",
      img: RenaultKiger,
      fare: 2489,
      text: "Extra Km will be charged at 10/km",
      class: "Standard",
    },
  ];

  const [activeDiv, setActiveDiv] = useState(null);

  const handleDivClick = (index) => {
    setActiveDiv(index);
  };

  const [viewMoreId, setViewMoreId] = useState(null);
  const viewMoreHandler = (id) => {
    setViewMoreId(viewMoreId === id ? null : id);
  };

  return (
    <div className="w-full relative ">
      <div className="flex gap-8 p-10 py-32 bg-[#ececec]">
        <div className="w-full ">
          <p className="text-[1rem] leading-normal font-semibold">
            {" "}
            HOME - Select Car
          </p>
          <p>Bangaluru - Mumbai (1 more City)- Madhya Pradesh (Round Trip)</p>
        </div>
        <div className="flex gap-5">
          <div>
            <p>Pick Up</p>
            <div>07/05/2024</div>
          </div>
          <div className="mt-1 text-xl">
            <FaCalendarAlt />
          </div>
          <div className="w-[1px] bg-black"></div>
        </div>

        <div className="flex gap-5">
          <div>
            <p>Return</p>
            <div>07/05/2024</div>
          </div>
          <div className="mt-1 text-xl">
            <FaCalendarAlt />
          </div>
          <div className=" w-[1px] bg-black"></div>
        </div>

        <div className="flex gap-5">
          <div>
            <p>Time</p>
            <div>10:30PM</div>
          </div>
          <button className="h-10 w-28 text-center bg-[#0ba2f5] rounded-lg hover:scale-105 duration-300 transition-all">
            Modify
          </button>
        </div>
      </div>

      <div className="w-11/12 mx-auto mb-10">
        <div className="flex flex-col justify-center">
          {CarCollections.map((car) => {
            return (
              <div
                key={car.id}
                className="bg-[#ececec] gap-10 py-9 mt-14 border border-black rounded-xl"
              >
                <p className="text-xl font-bold ml-10">{car.Brand}</p>
                <div className="w-full h-[1px] mt-4 bg-black"></div>
                <div className="flex gap-10 border-t-slate-500">
                  <div className="w-[20rem] h-[12rem] flex justify-center items-center mt-16 ml-10 border border-black bg-white rounded-md hover:scale-105 transition-all duration-300 ">
                    <img src={car.img} alt="This is a car collection " />
                  </div>

                  <div className="py-16 flex flex-col gap-5">
                    <div className="flex gap-5">
                      <p className="text-xl text-black font-semibold">
                        {car.class}
                      </p>
                      <div className="w-[1px] bg-black"></div>

                      <div className="flex gap-16">
                        <div className="flex gap-5">
                          <FaCar className="mt-1 text-lg" />
                          <p className="text-lg text-black font-semibold">
                            5 Seater
                          </p>
                        </div>

                        <div className="flex gap-3">
                          <BsFillFuelPumpDieselFill className="mt-1 text-lg" />
                          <p className="text-lg text-black font-semibold">
                            Diesel
                          </p>
                        </div>

                        <div className="flex gap-3">
                          <BsHandbagFill className="mt-1 text-lg" />
                          <p className="text-lg text-black font-semibold">
                            2 Baggage
                          </p>
                        </div>

                        <div className="flex gap-3">
                          <GrSettingsOption className="mt-1 text-lg" />
                          <p className="text-lg text-black font-semibold">
                            Manual
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-10 mt-5">
                      <button className="flex flex-col px-4 justify-center bg-[#0ba2f5] py-4 w-[8rem] rounded-md hover:scale-110 transition-all">
                        <div className="flex justify-center gap-1">
                          <FaRupeeSign className="" />
                          <p className="-mt-2 font-bold text-xl">7409</p>
                        </div>
                        <p className="font-semibold">up to 140 km</p>
                      </button>
                      <button className="bg-[#0ba2f5] w-[33rem] py-1 text-xl font-bold text-center rounded-md hover:scale-110 transition-all">
                        BOOK NOW{" "}
                        <FaLongArrowAltRight className="-mt-8 ml-[20.5rem] w-[2.5rem] h-[2.5rem]" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="text-[1.125rem] ml-10 font-semibold leading-normal">
                    {car.text}
                  </p>
                  <div className="flex gap-2 mr-10">
                    <p className="text-lg font-semibold">View Details</p>
                    {viewMoreId === car.id ? (
                      <IoIosArrowUp
                        className="mt-1"
                        onClick={() => viewMoreHandler(car.id)}
                      />
                    ) : (
                      <IoIosArrowDown
                        className="mt-1"
                        onClick={() => viewMoreHandler(car.id)}
                      />
                    )}
                  </div>
                </div>

                {viewMoreId === car.id && (
                  <div className="container mt-5 flex gap-2 mx-auto">
                    {[" INCLUSION", "EXCLUSION", "T&C"].map(
                      (divContent, index) => (
                        <div key={index} className="mb-4">
                          <div
                            className={`py-2 w-[28.67rem] mt-5 border text-center font-semibold border-black ${
                              activeDiv === index
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200"
                            }`}
                            onClick={() => handleDivClick(index)}
                          >
                            {divContent}
                          </div>
                          {activeDiv === index && (
                            <div className="flex gap-5 justify-center mt-5">
                              <div className="flex gap-5">
                                <MdOutlinePayment className="mt-1" />
                                <p className="text-black font-semibold text-[1rem] leading-normal">
                                  Pay ₹13.5/km after 145 km
                                </p>
                              </div>
                              <div className="flex gap-5">
                                <FaCarSide className="mt-1" />
                                <p className="text-black font-semibold text-[1rem] leading-normal">
                                  Multiple pickups/drops
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectCar;
