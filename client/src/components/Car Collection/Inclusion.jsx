import React from "react";
import { FaGasPump } from "react-icons/fa";

const Inclusion = () => {
  return (
    <div className="grid grid-cols-2 justify-center px-5 w-full gap-2 ">
      <div className="flex gap-3">
        <FaGasPump className="mt-1" />
        <p>Base Fare for 145 km</p>
      </div>

      <div className="flex gap-3">
        <FaGasPump className="mt-1" />
        <p>Driver Allowance</p>
      </div>
      <div className="flex gap-3">
        <FaGasPump className="mt-1"  />
        <p>State Tax & Toll</p>
      </div>
      <div className="flex gap-3">
        <FaGasPump className="mt-1"  />
        <p>GST (5%)</p>
      </div>
    </div>
  );
};

export default Inclusion;
