import React from 'react'
import people from "../images/people.png";
import {Link} from "react-router-dom";


export default function Partner() {
  return (
    <div className='flex flex-col justify-center items-center mt-[5rem] w-full  '>
            <div className='text-center'>
                <img src={people} alt='iamge' className='w-[25rem] lg:w-[45rem]' />
                <div className='relative  bottom-[18rem] lg:bottom-[35rem]  '>
                    <h2 className='lg:text-2xl uppercase font-bold'>
                    Partner  With <br/> Suvidha Foundation
                    </h2>
                    <p className='lg:mt-[6rem] lg:text-xl lg:mb-[5.5rem] mb-[1rem]'>
                        Unlock endless possibilites  <br/> of growth by partnering  <br/> with us with one of the most trusted  <br/> NGOs in the world
                    </p>
                    <div className='relative  lg:bottom-[2.5rem]'>
                        <Link to='/partner'>
                    <button className="relative p-2 bg-sky-600 text-white px-4 py-2 rounded-lg ml-4 hover:bg-sky-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 overflow-hidden">
                <span className="absolute p-5 top-0 left-0 w-full h-full border-gradient rounded-lg animate-border"></span>
                Partner With Us
              </button>
              </Link>
                    </div>
         
                     
                </div>
            </div>
       
    </div>
  )
}
