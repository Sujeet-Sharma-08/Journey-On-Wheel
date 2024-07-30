
import React, { useState, useEffect } from "react";
import car from "../../assets/sets/car.png";
import man from "../../assets/sets/man.png";
import money from "../../assets/sets/money.png";
import map from "../../assets/sets/map.png";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const sets = [
  {
    id: 1,
    icon: car,
    text: "Clean and Hygienic Car",
  },
  {
    id: 2,
    icon: money,
    text: "Transparent Billing",
  },
  {
    id: 3,
    icon: man,
    text: "Expert Drivers",
  },
  {
    id: 4,
    icon: map,
    text: "2000+ cities",
  },
];

const Funfact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full mt-5">
      <div className="w-11/12 mx-auto">
        <div className="text-center font-semibold mt-12 mb-8 text-4xl lg:text-6xl">
          What Sets Us Apart?
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center w-full lg:w-[90%] xl:gap-16 mb-10 py-5 lg:py-6 rounded-lg bg-[#5eadf5]">
            {sets.map((set) => (
              <div key={set.id} className="flex flex-col ml-1 sm:flex-row justify-center items-center gap-1 lg:gap-3">
                <div>
                  <img
                    className="w-[3rem] lg:w-[5rem]"
                    src={set.icon}
                    width={60}
                    alt={set.text}
                  />
                </div>
                <div className="font-bold text-md md:text-lg">{set.text}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row bg-[#000000] w-[98%] py-10 mb-10 rounded-xl">
            <div className="flex flex-col text-center w-full lg:w-1/2">
              <div className="text-center text-[#5eadf5] text-4xl xl:text-6xl">
                Our Funfact
              </div>
              <p className="text-white p-2 sm:p-5 sm:px-10">
                Lorem ipsum dolor sit amet consectetur. A donec a venenatis id. Erat id scelerisque leo sit neque id arcu ridiculus. Pharetra suscipit tellus nisi gravida.
              </p>
            </div>
            <div className="flex flex-col md:flex-row mt-5 justify-center gap-2 md:ml-20 lg:ml-0  xl:gap-32 items-center md:w-9/12">
              <div>
                <div className="w-full">
                  <VisibilitySensor partialVisibility>
                    {({ isVisible }) => (
                      <div className="flex h-full bg-opacity-75 rounded-lg overflow-hidden text-center relative">
                        <h1 className="flex title-font text-lg md:text-2xl font-medium text-[#5eadf5] mb-3">
                          <CountUp
                          className="md:text-[24px] lg:text-[30px]"
                            start={0}
                            end={1000}
                            duration={4}
                            redraw={true}
                            delay={0}
                            useEasing={true}
                            useGrouping={true}
                            separator=","
                            startOnMount={isVisible}
                          />
                          +
                          <div className="text-lg sm:text-[1.25rem] font-semibold leading-normal text-white">
                            Happy Clients
                          </div>
                        </h1>
                      </div>
                    )}
                  </VisibilitySensor>
                </div>
                <div className="w-full">
                  <VisibilitySensor partialVisibility>
                    {({ isVisible }) => (
                      <div className="h-full bg-opacity-75 rounded-lg overflow-hidden text-center relative">
                        <h1 className="flex title-font text-lg md:text-2xl font-medium text-[#5eadf5] mb-3">
                          <CountUp
                          className="md:text-[24px] lg:text-[30px]"
                            start={0}
                            end={250}
                            duration={4}
                            redraw={true}
                            delay={0}
                            useEasing={true}
                            useGrouping={true}
                            separator=","
                            startOnMount={isVisible}
                          />
                          +
                          <div className="text-lg sm:text-[1.25rem] font-semibold leading-normal text-white">
                            Experienced Drivers
                          </div>
                        </h1>
                      </div>
                    )}
                  </VisibilitySensor>
                </div>
              </div>
              <div>
                <div className="w-full">
                  <VisibilitySensor partialVisibility>
                    {({ isVisible }) => (
                      <div className="h-full bg-opacity-75 rounded-lg overflow-hidden text-center relative">
                        <h1 className="flex title-font text-lg md:text-2xl font-medium text-[#5eadf5] mb-3">
                          <CountUp
                          className="md:text-[24px] lg:text-[30px]"
                            start={0}
                            end={700}
                            duration={4}
                            redraw={true}
                            delay={0}
                            useEasing={true}
                            useGrouping={true}
                            separator=","
                            startOnMount={isVisible}
                          />
                          +
                          <div className="text-lg sm:text-[1.25rem] font-semibold leading-normal text-white">
                            Cities Tour Completed
                          </div>
                        </h1>
                      </div>
                    )}
                  </VisibilitySensor>
                </div>
                <div className="w-full">
                  <VisibilitySensor partialVisibility>
                    {({ isVisible }) => (
                      <div className="h-full bg-opacity-75 rounded-lg overflow-hidden text-center relative">
                        <h1 className="flex title-font text-lg md:text-2xl font-medium text-[#5eadf5] mb-3">
                          <CountUp
                          className="md:text-[24px] lg:text-[30px]"
                            start={0}
                            end={200}
                            duration={4}
                            redraw={true}
                            delay={0}
                            useEasing={true}
                            useGrouping={true}
                            separator=","
                            startOnMount={isVisible}
                          />
                          +
                          <div className="text-lg sm:text-[1.25rem] font-semibold leading-normal text-white">
                            Clean & Hygienic Cars
                          </div>
                        </h1>
                      </div>
                    )}
                  </VisibilitySensor>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funfact;

