import React from 'react';
import {Link} from "react-router-dom";

import Image from "../images/computer.jpg";


export default function Internship() {
  return (
  <>
    <div className=''>
        <img src={Image} alt='img' className='h-[18rem]  lg:h-auto lg:w-full'/>
        <div className='relative text-[1rem] p-[4rem] bottom-[15rem] lg:text-[2.5rem]  lg:bottom-[25rem]  text-center'>
            <h2 className=' font-medium  '>
                Unlock Your Potential With <span className='font-bold'>  Suvidha Foundation .
                    </span>
            </h2>
            <h2 className=' font-light mb-[2rem] '>
                Join Our Internship Journey 
            </h2>
            <Link to='/internship'>

 
            <button className="relative p-2 text-[1rem] lg:text-[2rem] bg-yellow-500 text-black px-4 py-2 rounded-lg ml-4 hover:bg-yellow-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 overflow-hidden">
                <span className="absolute p-5 top-0 left-0 w-full h-full border-gradient rounded-lg animate-border"></span>
       Get Started 
              </button>
              </Link>
        </div>
    </div>
  </>
  )
}
