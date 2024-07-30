import React from "react";
import Roundtrips from "../../assets/services-image/roundtrip.png";
import Local from "../../assets/services-image/local.png";
import Airport from "../../assets/services-image/airport.png";

import Expert from "../../assets/services-image/expert.png";
import Safety from "../../assets/services-image/safety.png";
import multiplestops from "../../assets/services-image/multiple-stops.png";
import flexiblepackages from'../../assets/services-image/flexible-package.png'
import cabdisposal from'../../assets/services-image/cabs-disposal.png'
import lowestfare from '../../assets/services-image/lowest-price.png'
import reliability from'../../assets/services-image/reliabiity.png'

const Service1 = [
  {
    id: 1,
    icon: Expert,
    text: "Expert Chauffeurs",
  },

  {
    id: 2,
    icon: Safety,
    text: "Safety Certified",
  },

  {
    id: 3,
    icon: multiplestops,
    text: "Multiple Stops",
  },
];

const Services2 = [
    {
      id: 1,
      icon:flexiblepackages ,
      text: "Flexible Packages",
     
    },
  
    {
      id: 2,
      icon: cabdisposal,
      text: "Cabs At Your Disposal",
     
    },
  
    {
      id: 3,
      icon: multiplestops,
      text: "Multiple Stops",
    
    },
  ];

  
  const Services3 = [
    {
      id: 1,
      icon:reliability ,
      text: "Reliability Guranteed",
     
    },
  
    {
      id: 2,
      icon: lowestfare,
      text: "Lowest Fares",
     
    },
  
    {
      id: 3,
      icon: Expert,
      text: "Courteous Chauffers",
    
    },
  ];
  

const Services = () => {
  return (
    <div className="w-full relative mt-5">
      <div className="h-[2px] bg-black mt-5 mb-5">
        <hr />
      </div>
      <div className="w-11/12 mx-auto mb-10">
        <div className="text-4xl md:text-4xl lg:text-6xl mt-10 font-semibold leading-9 text-center text-black mb-10">
          Our Services
        </div>

        {/* cards */}

        <div className="grid md:flex grid-cols-1 md:grid-cols-3  justify-center gap-2 lg:gap-10">

          {/* first card */}
          <div className="w-full  lg:w-[23rem] lg:h-[34rem] bg-[#f4f5f0] rounded-2xl border hover:border-2 hover:rounded-3xl transition duration-300 hover:border-blue-500 ">
            <img src={Roundtrips} alt="" />
            <p className="text-xl text-center font-semibold mt-5 text-[#5eadf5]">
              ROUNDTRIPS CABS
            </p>
            <p className="p-5 font-normal">
              Lorem ipsum dolor sit amet consectetur. Ut diam placerat diam
              venenatis ultrices in dui dictumst orci. Risus lorem ut bibendum
              tortor in sagittis. Justo hendrerit tortor cras lectus. Viverra
              cras vel aliquet arcu euismod eget nibh nibh. Mattis tincidunt
              neque volutpat{" "}
            </p>

            {/* map */}
            <div className="flex justify-center items-center text-center p-5 -mt-6">
              {Service1.map((serv2) => {
                return (
                  <div key={serv2.id} className="flex flex-col justify-center ">
                    <div className="flex justify-center ">
                      <img className="hover:scale-125 transition duration-300" src={serv2.icon} width={35} alt="" />
                    </div>

                    <p className="text-sm sm:text-md xl:text-lg font-semibold ">{serv2.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

         {/* second div */}
          <div className="w-full  lg:w-[23rem] lg:h-[34rem] bg-[#f4f5f0] rounded-2xl border hover:border-2 hover:rounded-3xl transition duration-300 hover:border-blue-500">
            <img src={Local} alt="" />
            <p className="text-xl text-center font-semibold mt-5 text-[#5eadf5]">
              LOCAL RENTALS
            </p>
            <p className="p-5 font-normal">
              Lorem ipsum dolor sit amet consectetur. Ut diam placerat diam
              venenatis ultrices in dui dictumst orci. Risus lorem ut bibendum
              tortor in sagittis. Justo hendrerit tortor cras lectus. Viverra
              cras vel aliquet arcu euismod eget nibh nibh. Mattis tincidunt
              neque volutpat{" "}
            </p>
            {/* map */}
            <div className="flex justify-center items-center text-center p-5 -mt-6">
              {Services2.map((serv2) => {
                return (
                  <div key={serv2.id} className="flex flex-col justify-center ">
                    <div className="flex justify-center  ">
                      <img className="hover:scale-125 transition duration-300" src={serv2.icon} width={35} alt="" />
                    </div>
                    <p className=" text-sm sm:text-md xl:text-lg font-semibold">{serv2.text}</p>
                  </div>
                );
              })}
            </div>
          </div>


         {/* third div */}
          <div className="w-full  lg:w-[23rem] lg:h-[34rem] bg-[#f4f5f0] rounded-2xl border hover:border-2 hover:rounded-3xl transition duration-300 hover:border-blue-500">
            <img src={Airport} alt="" />
            <p className="text-xl text-center font-semibold mt-5 text-[#5eadf5]">
              AIRPORT TRANSFERS
            </p>
            <p className="p-5 font-normal">
              Lorem ipsum dolor sit amet consectetur. Ut diam placerat diam
              venenatis ultrices in dui dictumst orci. Risus lorem ut bibendum
              tortor in sagittis. Justo hendrerit tortor cras lectus. Viverra
              cras vel aliquet arcu euismod eget nibh nibh. Mattis tincidunt
              neque volutpat{" "}
            </p>
            {/* map */}
            <div className="flex justify-center items-center text-center p-5 -mt-6">
              {Services3.map((serv2) => {
                return (
                  <div key={serv2.id} className="flex flex-col justify-center ">
                    <div className="flex justify-center">
                      <img className="hover:scale-125 transition duration-300" src={serv2.icon} width={35} alt="" />
                    </div>
                    <p className="text-sm sm:text-md xl:text-lg font-semibold">{serv2.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
