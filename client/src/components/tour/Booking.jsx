import React, { useState } from "react";
import toast from "react-hot-toast";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: false,
    pickup: "",
    drop: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    toast.success("Your Booking is created!");
  };

  return (
    <div className="w-full relative">
      <div className="w-11/12 mx-auto flex flex-col justify-center items-center">
        <div className="bg-[#ececec] flex flex-col justify-center items-center gap-10 shadow-xl  border border-black w-[74rem] h-[30rem] rounded-xl mt-40 mb-14">
          <h2 className="text-black text-[1.75rem] -mt-10 font-semibold leading-normal">
            Contact & Pickup Details
          </h2>
          <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
            <div className="flex gap-20">
              <div className="flex">
                <label htmlFor="name" className="text-lg font-semibold">
                  NAME
                </label>
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="focus:outline-none bg-[#ececec] px-5"
                  />
                  <div className="h-[0.125rem] ml-5 bg-gray-400 w-[25rem]"></div>
                </div>
              </div>

              <div className="flex">
                <label htmlFor="email" className="text-lg font-semibold">
                  EMAIL
                </label>
                <div className="">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="focus:outline-none bg-transparent px-5"
                  />
                  <div className="h-[0.125rem] ml-5 bg-gray-400 w-[25rem]"></div>
                </div>
              </div>
            </div>

            <div className="flex gap-10">
              <div className="flex">
                <label htmlFor="phone" className="text-lg font-semibold">
                  PHONE
                </label>
                <div className="">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="focus:outline-none bg-transparent px-5"
                    placeholder="+91"
                  />
                  <div className="h-[0.125rem] ml-5 bg-gray-400 w-[25rem]"></div>
                </div>
              </div>

              <div className="flex ml-10">
                <label htmlFor="whatsapp" className="text-lg font-semibold">
                  <input
                    type="checkbox"
                    id="whatsapp"
                    name="whatsapp"
                    checked={formData.whatsapp}
                    onChange={handleChange}
                    c
                    className=" bg-transparent px-5 text-2xl"
                  />{" "}
                  Send Trip Details to Whatsapp
                </label>
              </div>
            </div>

            <div className="flex">
              <label htmlFor="pickup" className="text-lg font-semibold">
                PICKUP
              </label>
              <div className="flex flex-col">
                <input
                  type="text"
                  id="pickup"
                  name="pickup"
                  required
                  value={formData.pickup}
                  onChange={handleChange}
                  className="focus:outline-none bg-transparent px-5"
                />
                <div className="h-[0.125rem] ml-5 bg-gray-400 w-[94%]"></div>
              </div>
            </div>

            <div className="flex">
              <label htmlFor="drop" className="text-lg font-semibold">
                DROP
              </label>
              <div className="flex flex-col ">
                <input
                  type="text"
                  id="drop"
                  name="drop"
                  required
                  value={formData.drop}
                  onChange={handleChange}
                  className="focus:outline-none bg-transparent px-5"
                />
                <div className="h-[0.125rem] ml-5 bg-gray-400 w-[94%]"></div>
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#5eadf5] py-2 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              PROCEED
            </button>
          </form>
        </div>

        {/* second div for booking status show  */}
        <div className="bg-[#ececec] w-[74rem] h-[24.3rem] border shadow-lg border-black rounded-xl mb-10">
          <h2 className="text-2xl text-center font-bold mt-5">
            Your Booking Details
          </h2>
          <div className="flex flex-col gap-5 mt-10 ml-10 ">
            <div className="flex gap-10">
              <p className="font-semibold text-black text-lg">Iternary :</p>
              <p className="font-semibold text-black text-lg">
                Mumbai to Rajasthan
              </p>
            </div>

            <div className="flex gap-14">
              <p className="font-semibold text-black text-lg">Pickup Date :</p>
              <p className="font-semibold text-black text-lg">
                25th July 2024 at 9:00 AM
              </p>
            </div>

            <div className="flex gap-14">
              <p className="font-semibold text-black text-lg">Car Type :</p>
              <p className="font-semibold text-black text-lg">
                Ertiga or Equivalant
              </p>
            </div>

            <div className="flex gap-14">
              <p className="font-semibold text-black text-lg">KMs Included :</p>
              <p className="font-semibold text-black text-lg">140 KM</p>
            </div>

            <div className="flex gap-14">
              <p className="font-semibold text-black text-lg">Total Fare :</p>
              <p className="font-semibold text-black text-lg">2489</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
