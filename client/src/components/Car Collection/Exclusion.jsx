import React from 'react'
import { MdOutlinePayment } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";

const Exclusion = () => {
  return (
    <div className='flex gap-5'>
        <div className='flex gap-2'>
            <MdOutlinePayment className='mt-1'/>
            <p>Pay ₹13.5/km after 145 km</p>
        </div>

        <div className='flex gap-2'>
            <FaCarSide className='mt-1'/>
            <p>Multiple pickups/drops</p>
        </div>
    </div>
  )
}

export default Exclusion