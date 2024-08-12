import React from "react";
import aboutImage from "../../assets/about-image/aboutcar.png";
import yellocar from "../../assets/experience-images/yello-car.png";
import clock from "../../assets/experience-images/clock.svg";
import car from "../../assets/experience-images/car.svg";
import dollar from "../../assets/experience-images/dollar.svg";

const services = [
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

const AboutUs = () => {
  return (
    <div className="w-full relative">
      <div className="w-11/12 mx-auto flex flex-col justify-center items-center">
        {/* About Us Section */}
        <div className="w-full flex flex-col xl:ml-[12rem] sm:flex-row justify-center items-center  py-8 sm:py-14 mb-14">
          {/* Text Section */}
          <div className="w-full max-w-2xl sm:w-1/2 xl:w-1/2 flex flex-col mx-auto mt-[3rem] sm:mt-[5rem]">
            <h2 className="font-semibold sm:text-2xl leading-snug">
              About Us
            </h2>
            <p className="font-bold mb-5 text-xl md:text-3xl lg:text-4xl mt-2">
              Feel The Best Experience With Our Rental Deals
            </p>
            <p className="text-md font-medium text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. A arcu odio risus sed
              libero arcu. Adipiscing pharetra posuere pulvinar amet ornare
              ipsum vivamus condimentum nisi. At fames vulputate in metus
              pulvinar faucibus amet. Blandit dui leo arcu imperdiet velit quis
              facilisis. Libero sem volutpat cursus vulputate gravida posuere
              porttitor. Mauris mi nunc faucibus maecenas vel purus.
            </p>
            <button className="py-3 w-48 mt-5 text-lg font-bold text-white bg-[#0ba2f5] rounded-lg hover:scale-105 duration-300 transition-transform">
              Start Booking
            </button>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center items-center mt-24 sm:mt-[10rem] sm:w-1/2">
            <div className="absolute inset-0 flex justify-center items-center">
              <svg
                className="w-[16rem] sm:w-[20rem] lg:w-[24rem] h-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 482 431"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M231.727 0.0261823C330.373 -1.04673 435.889 30.7017 469.216 123.554C505.221 223.867 461.781 336.088 374.092 396.668C292.231 453.221 185.107 434.156 104.96 375.198C26.4629 317.453 -21.5723 220.874 9.62208 128.552C39.8941 38.9608 137.165 1.05467 231.727 0.0261823Z"
                  fill="#5EADF5"
                  fillOpacity="0.5"
                />
              </svg>
            </div>
            <img
              className="relative w-[12rem] sm:w-[16rem] lg:w-[20rem] -mt-10 sm:-mt-20"
              src={aboutImage}
              alt="About us"
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="flex flex-col md:flex-row gap-10 sm:gap-20 mb-10">
          <div className="flex justify-center sm:-mt-10 w-full sm:w-1/2 lg:w-1/3 hover:scale-105 transition-transform duration-300">
            <img src={yellocar} alt="Yellow car" />
          </div>
          <div className="w-full sm:w-1/2 lg:w-2/3">
            <div className="flex flex-col gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex items-center text-black gap-5"
                >
                  <div className="flex justify-center items-center hover:scale-105 transition-transform duration-300 w-16 h-16 sm:w-20 sm:h-20 bg-[#b9dee5] border-2 border-[#FF6D1F] rounded-full">
                    <img
                      className="w-8 sm:w-10"
                      src={service.icon}
                      alt={`${service.heading} icon`}
                    />
                  </div>

                  <div className="flex flex-col">
                    <div className="font-semibold leading-normal text-black text-lg sm:text-xl">
                      {service.heading}
                    </div>
                    <p className="font-medium text-gray-700">
                      {service.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
