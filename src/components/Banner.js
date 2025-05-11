import React from 'react';
import { FaHouse, FaTree } from "react-icons/fa6";
import { lgVolunteerActivism } from "react-icons/md";
import { LuGoal } from "react-icons/lu";

export default function Banner() {
  return (
    <>  
    
   
    <div className="bg-gradient-to-r from-purple-800 via-purple-600 to-purple-800 text-white p-8 w-full h-[600px] flex flex-col justify-center items-center lg:flex-row lg:h-[400px]">

      <div className="text-3xl m-8 font-bold flex flex-row">
        <div className='m-1'>
          <FaHouse className="text-yellow-500 text-4xl" />
        </div>
        <div className='m-1'>
          15+ Countries
        </div>
      </div>
      <div className="text-3xl m-8 font-bold flex flex-row">
        <div className='m-1'>
          <lgVolunteerActivism className="text-yellow-500 text-4xl" />
        </div>
        <div className='m-1'>
          3L+ Volunteers
        </div>
      </div>
      <div className="text-3xl  m-8 font-bold flex flex-row">
        <div className='m-1'>
          <LuGoal className="text-yellow-500 text-4xl" />
        </div>
        <div className='m-1'>
          1Cr+ Internship <br/> Goals
        </div>
      
      </div>
      <div className="text-3xl  m-8 font-bold flex flex-row">
        <div className='m-1'>
          <FaTree className="text-yellow-500 text-4xl" />
        </div>
        <div className='m-1'>
          54L+ Trees <br/> Planted
        </div>
      </div>
    </div>
    </>
  );
}
