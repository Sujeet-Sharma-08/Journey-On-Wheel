import React from "react";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import {toast} from 'react-hot-toast'

const contactus = () => {
  const [formData, setFormData] = useState({name:"", contact:"", message:""});

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    toast.success("Feedback submitted successfully!")
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="w-full z-10 relative ">
      <div className="w-11/12 mx-auto py-40 flex justify-center items-center">
        <div className="w-full lg:w-[80rem] sm:h-[36rem] lg:h-[40rem] rounded-xl bg-[#ffffff] shadow-xl border-2 border-black">
          <h2 className="flex justify-center mt-6 text-2xl leading-normal font-bold">
            GET IN TOUCH
          </h2>
          <div className="flex flex-col-reverse sm:flex-row justify-center py-10 sm:gap-8 lg:gap-30 xl:gap-36">
            <div className="flex flex-col justify-start ml-10 py-10 gap-8">
              <div className="flex text-black text-sm sm:text-lg lg:text-lg font-medium gap-5">
                <FaMagnifyingGlassLocation size={28} className="mt-1" />
                <p>121, 7 Street NewYork</p>
              </div>

              <div className="flex gap-3">
                <IoCall size={40} className="text-4xl mt-2" />
                <div className="flex flex-col text-black text-sm sm:text-lg lg:text-lg font-medium gap-1">
                  <a href="+tel:+91 8433700215">+91 8433700215</a>
                  <a href="+tel:+91 8433700200">+91 8433700200</a>
                </div>
              </div>

              <div className="flex gap-2 text-black text-sm sm:text-lg lg:text-lg font-medium">
                <IoIosMail size={28} />
                <a href="mailto:contact@journeyonwheels.com">
                  contact@journeyonwheels.com
                </a>
              </div>

              <div className="flex gap-5 text-4xl">
                <a href="">
                  <FaTwitter />
                </a>
                <a href="">
                  <FaWhatsapp />
                </a>
                <a href="">
                  <FaInstagram />
                </a>
                <a href="">
                  <FaFacebook />
                </a>
              </div>

              <div>
                <p>map section goes from here</p>
              </div>
            </div>

            <div className="-mt-10 sm:mt-6">
              <p className="text-black text-xl font-bold mb-2 p-2">
                Leave A Message..
              </p>
              <form onSubmit={handleFormSubmit} action="" className="flex flex-col p-2 gap-4">
                <input
                  className="w-full sm:w-[20rem] lg:w-[30rem] py-3 border-2 border-gray-400 px-2 rounded-lg focus:outline-none hover:border-[#0ba2f5]"
                  type="text"
                  name="name"
                  required
                  onChange={handleFormChange}
                  value={formData.name}
                  placeholder="Name"
                />
                <input
                  className="w-full p-2 sm:w-[20rem] lg:w-[30rem] py-3 border-2 border-gray-400 px-2 rounded-lg focus:outline-none hover:border-[#0ba2f5]"
                  type="text"
                  name="contact"
                  required
                  onChange={handleFormChange}
                  value={formData.contact}
                  placeholder="Contact"
                />
                <textarea
                  className="w-full p-2 sm:w-[20rem] lg:w-[30rem] h-[10rem] border-2 border-gray-400 px-2 rounded-lg focus:outline-none hover:border-[#0ba2f5]"
                  name="message"
                  onChange={handleFormChange}
                  value={formData.message}
                  required
                  placeholder="Message"
                ></textarea>
                <button className="py-3 bg-black text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300">
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black w-full -mt-[33.5rem] h-[30rem]"></div>
    </div>
  );
};

export default contactus;
