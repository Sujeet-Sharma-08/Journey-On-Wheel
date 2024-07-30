import React from "react";
import yellocar from "../../assets/experience-images/yello-car.png";
import clock from "../../assets/experience-images/clock.svg";
import car from "../../assets/experience-images/car.svg";
import dollar from "../../assets/experience-images/dollar.svg";

const Services = [
  {
    id: 1,
    icon: car,
    heading: "Excellent Services",
    text: "Lorem ipsum dolor sit amet consectetur. Vitae nam sceleri.",
  },

  {
    id: 2,
    icon: dollar,
    heading: "Best Price Guaranteed",
    text: "Lorem ipsum dolor sit amet consectetur. Vitae nam sceleri.",
  },

  {
    id: 3,
    icon: clock,
    heading: "24/7 Support",
    text: "Lorem ipsum dolor sit amet consectetur. Vitae nam sceleri.",
  },
];

const Experience = () => {
  return (
    <div className=" experience w-full mt-5">
        
      <div className="w-11/12 mx-auto flex flex-col md:flex-row">

      {/* first div */}
        <div className="flex justify-center w-full  lg:w-1/2">
          <img src={yellocar} alt="" />
        </div>

        {/* second div */}
        <div className="w-full lg:w-1/2">
          <p className="text-black group font-semibold text-2xl md:text-4xl lg:text-6xl">
            Feel The Best Experience{" "}
            <span className="text-[#5EADF5] hover:scale-105 transition duration-300">With</span> Our Rental Deals
          </p>

          {/* map on Services */}
          <div className="flex flex-col gap-4 md:gap-3 lg:gap-6 mt-5">
            {Services.map((service) => {
              return (
                <div
                  key={service.id}
                  className="flex items-center text-black gap-5"
                >
                  <div className="flex justify-center w-[5.1rem] h-[3rem] md:w-32 md:h-20 lg:w-[5.5rem] lg:h-[5rem] xl:h-[5.5rem] bg-[#b9dee5] border-2 border-[#FF6D1F] rounded-full ">
                    <img className="w-[2rem] md:w-[2.2rem]" src={service.icon} width={36} alt="services-icons" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="font-semibold leading-normal text-black text-[20px] lg:text-[1.5625rem] ">
                      {service.heading}
                    </div>
                    <p className="font-normal leading-5 text-black">
                      {service.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Experience;
