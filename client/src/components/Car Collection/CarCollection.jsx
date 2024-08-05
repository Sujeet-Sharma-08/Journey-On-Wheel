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

  const Details = [
    {
      id: 1,
      heading: 'INCLUSION',
      text:'Base Fare for 145 km / Driver Allowance'
    },
    {
      id: 2,
      heading: 'EXCLUSION',
      text: 'Tolls, Parking Fees, Interstate Taxes'
    },
    {
      id: 3,
      heading: 'T&C',
      text:'hello dude'
      
    },
  ];

  const [detailId, setDetailId] = useState(null);
  const [viewMoreId, setViewMoreId] = useState(null);

  const handleDetailClick = (id) => {
    setDetailId(detailId === id ? null : id);
  };

  const viewMoreHandler = (id) => {
    setViewMoreId(viewMoreId === id ? null : id);
  };

  return (
    <div className="w-full relative">
      <div className="flex flex-col justify-center sm:flex-row gap-3 lg:gap-8 p-5 sm:p-10 h-[23rem] sm:h-[20rem] py-[6rem] sm:py-[9rem]  bg-[#ececec]">
        <div className="w-full">
          <p className="text-sm md:text-md sm:text-[1rem] leading-normal font-semibold">
            HOME - Select Car
          </p>
          <p className="md:text-lg">Bangalore - Mumbai (1 more City) - Madhya Pradesh (Round Trip)</p>
        </div>

        <div className="w-full flex justify-end  gap-2 sm:gap-5">
          <div className="flex gap-2 sm:gap-5">
            <div className="md:text-lg">
              <p>Pick Up</p>
              <div>07/05/2024</div>
            </div>
            <div className="mt-1 text-xl">
              <FaCalendarAlt />
            </div>
            <div className="hidden md:block w-[1px] bg-black"></div>
          </div>

          <div className="flex gap-2 sm:gap-5">
            <div className="md:text-lg">
              <p>Return</p>
              <div>07/05/2024</div>
            </div>
            <div className="mt-1 text-xl">
              <FaCalendarAlt />
            </div>
            <div className="hidden md:block w-[1px] bg-black"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5">
            <div className="md:text-lg">
              <p>Time</p>
              <div>10:30 PM</div>
            </div>
            <button className="h-10 w-20 -ml-5  sm:ml-0 sm:w-28 text-center bg-[#0ba2f5] rounded-lg hover:scale-105 duration-300 transition-all font-semibold">
              Modify
            </button>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto mb-10">
        <div className="flex flex-col justify-center">
          {CarCollections.map((car) => (
            <div
              key={car.id}
              className="bg-[#ececec] gap-10 py-9 mt-14 border border-black rounded-xl"
            >
              <p className="text-xl font-bold -mt-5 ml-20">{car.Brand}</p>
              <div className="w-full h-[1px] mt-4 bg-black"></div>
              <div className="flex flex-col sm:flex-row gap-10 border-t-slate-500">
                <div className="sm:w-[20rem] sm:ml-3 sm:h-[12rem] lg:w-1/3 lg:h-54 xl:h-64 flex justify-center items-center mt-4 sm:mt-10 lg:mt-16 ml-3 mr-3 border border-black bg-white rounded-md hover:scale-100 transition-all duration-300">
                  <img className="" src={car.img} alt="Car" />
                </div>

                <div className="py-10 lg:py-16 flex flex-col gap-5">
                  <div className="flex flex-row gap-3">
                    <p className="text-xl -mt-16 ml-5 sm:ml-0 sm:mt-0  text-black font-semibold">
                      {car.class}
                    </p>
                    <div className="w-[1px] -mt-14 sm:mt-0 bg-black"></div>

                    <div className="flex ml-3 -mt-14 sm:mt-0 flex-wrap gap-3 lg:gap-10">
                      <div className="flex gap-2 lg:gap-5">
                        <FaCar className="mt-1 text-lg" />
                        <p className="sm:text-lg text-black font-semibold">
                          5 Seater
                        </p>
                      </div>

                      <div className="flex gap-2 lg:gap-3">
                        <BsFillFuelPumpDieselFill className="mt-1 text-lg" />
                        <p className="sm:text-lg text-black font-semibold">
                          Diesel
                        </p>
                      </div>

                      <div className="flex gap-2 lg:gap-3">
                        <BsHandbagFill className="mt-1 text-lg" />
                        <p className="sm:text-lg text-black font-semibold">
                          2 Baggage
                        </p>
                      </div>

                      <div className="flex gap-2 lg:gap-3">
                        <GrSettingsOption className="mt-1 text-lg" />
                        <p className="sm:text-lg text-black font-semibold">
                          Manual
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex p-1 md:mr-14 gap-2 sm:gap-5 lg:gap-10 sm:mt-5">
                    <button className="flex flex-col justify-center px-2 sm:px-5 py-2 bg-[#0ba2f5] w-[12rem] lg:w-[9rem] rounded-md hover:scale-110 transition-all">
                      <div className="flex justify-center px-4 gap-1 h-5">
                        <FaRupeeSign className="mt-1 md:mt-[0.4rem]" />
                        <p className="font-bold  text-md sm:text-xl">7409</p>
                      </div>
                      <p className="font-semibold  text-md mt-1">up to 140 km</p>
                    </button>
                    <button className="lg:block bg-[#0ba2f5] w-full h-16 lg:w-[31.4rem] lg:h-20 sm:text-xl font-bold shadow-2xl text-center rounded-md lg:hover:scale-110 transition-all">
                      BOOK NOW{" "}
                      <FaLongArrowAltRight className="inline ml-0 sm:ml-2 w-6 h-6 -mt-1" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-between p-4 lg:mt-2 -mt-10 gap-2 sm:gap-5">
                <p className="text-md sm:text-[1.125rem]  font-semibold leading-normal">
                  {car.text}
                </p>
                <div className="flex sm:gap-2 sm:mr-10">
                  <p className="text-md sm:text-lg font-semibold">View Details</p>
                  {viewMoreId === car.id ? (
                    <IoIosArrowUp
                      className="mt-1 cursor-pointer"
                      onClick={() => viewMoreHandler(car.id)}
                    />
                  ) : (
                    <IoIosArrowDown
                      className="mt-1  cursor-pointer"
                      onClick={() => viewMoreHandler(car.id)}
                    />
                  )}
                </div>
              </div>

              {viewMoreId === car.id && (
                <div className="container mt-5 flex flex-col md:flex-row gap-2 mx-auto">
                  {Details.map((detail) => (
                    <div key={detail.id} className="mb-4 w-full">
                      <div
                        className={`py-2 text-center ml-2 mr-2 font-semibold border border-black ${
                          detailId === detail.id
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200"
                        }`}
                        onClick={() => handleDetailClick(detail.id)}
                      >
                        {detail.heading}
                      </div>
                      {detailId === detail.id && (
                        <div className="flex flex-col lg:flex-row gap-5 justify-center mt-5">
                          <div className="flex gap-5">
                            <MdOutlinePayment className="mt-1" />
                            <p className="text-black font-semibold text-[1rem] leading-normal">
                              {detail.text}
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
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectCar;
