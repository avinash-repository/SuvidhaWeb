import React from 'react';
import "./Readmore.css";
import logo from "../images/empowerment.jpg";
import map from "../images/country.jpeg";
import team from "../images/team.jpeg";
import help from "../images/help.webp";

import {Link} from "react-router-dom";


export default function ReadMore() {
    return (
        <div className='flex flex-col justify-center  lg:flex-col'>
            <div className='shadow text-white  h-auto lg:w-[90%]  lg:h-[500px] m-4 lg:m-[40px]'>
                <div className='flex flex-col lg:skew-y-[-3deg] lg:flex-row items-center p-4 lg:p-[5rem] h-full'>
                    <div className='lg:mt-[20px]'>
                        <img src={help} alt='Img' className='h-[300px]  lg:h-[800px] w-[1500px] object-contain' />
                    </div>
                    <div className='flex flex-col justify-between lg:ml-[100px] mt-4 lg:mt-0 '>
                        <div className='font-bold text-xl lg:text-5xl mb-4'>
                            What We Do
                        </div>
                        <div className='text-sm lg:text-base'>
                            NGOs are entities independent of government influence, typically driven by a mission to serve the public good. They operate on local, national, and international levels, engaging in diverse activities such as humanitarian aid, community development, advocacy, and education. One of the primary functions of NGOs is to fill gaps where government resources or services are inadequate or unavailable. They often work in collaboration with governments, businesses, and other organizations to tackle pressing issues such as poverty alleviation, healthcare access, environmental conservation, human rights protection, and disaster relief.
                        </div>
                        <Link to="/what-we-do">

                      
                        <button className=" mt-7 relative p-2 bg-green-500 text-black font-bold px-4 py-2 rounded-lg hover:bg-green-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 overflow-hidden lg:w-[20rem]">
                            <span className="absolute p-5 top-0 left-0 w-full h-full border-gradient rounded-lg animate-border "></span>
                            Read More
                        </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='shadow text-white  h-auto lg:w-[90%]  lg:h-[500px] m-4 lg:m-[40px] lg:self-end'>
                <div className='flex flex-col lg:flex-row lg:skew-y-[3deg]  items-center p-4 lg:p-[5rem] h-full'>
                    <div className='lg:mt-[20px]'>
                        <img src={map} alt='Img' className='h-[300px]  lg:h-[800px] w-[1500px] object-contain' />
                    </div>
                    <div className='flex flex-col justify-between lg:ml-[100px] mt-4 lg:mt-0 '>
                        <div className='font-bold text-xl lg:text-5xl mb-4'>
                            Where We Work
                        </div>
                        <div className='text-sm lg:text-base'>
                            NGOs are entities independent of government influence, typically driven by a mission to serve the public good. They operate on local, national, and international levels, engaging in diverse activities such as humanitarian aid, community development, advocacy, and education. One of the primary functions of NGOs is to fill gaps where government resources or services are inadequate or unavailable. They often work in collaboration with governments, businesses, and other organizations to tackle pressing issues such as poverty alleviation, healthcare access, environmental conservation, human rights protection, and disaster relief.
                        </div>
                        <Link to="/where-we-work">
                        <button className=" mt-7 relative p-2 bg-green-500 text-black font-bold px-4 py-2 rounded-lg hover:bg-green-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 overflow-hidden lg:w-[20rem]">
                            <span className="absolute p-5 top-0 left-0 w-full h-full border-gradient rounded-lg animate-border "></span>
                            Read More
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='shadow text-white h-auto  lg:w-[90%]  lg:h-[500px] m-4 lg:m-[40px]'>
                <div className='flex flex-col lg:skew-y-[-3deg] lg:flex-row items-center p-4 lg:p-[5rem] h-full'>
                    <div className='lg:mt-[20px]'>
                        <img src={team} alt='Img' className='h-[300px]  lg:h-[800px] w-[1500px] object-contain' />
                    </div>
                    <div className='flex flex-col justify-between lg:ml-[100px] mt-4 lg:mt-0 '>
                        <div className='font-bold text-xl lg:text-5xl mb-4'>
                            Our Team  Members
                        </div>
                        <div className='text-sm lg:text-base'>
                            NGOs are entities independent of government influence, typically driven by a mission to serve the public good. They operate on local, national, and international levels, engaging in diverse activities such as humanitarian aid, community development, advocacy, and education. One of the primary functions of NGOs is to fill gaps where government resources or services are inadequate or unavailable. They often work in collaboration with governments, businesses, and other organizations to tackle pressing issues such as poverty alleviation, healthcare access, environmental conservation, human rights protection, and disaster relief.
                        </div>
                 

                        <Link to="/members">
                         
                        <button className=" mt-7 relative p-2 bg-green-500 text-black font-bold px-4 py-2 rounded-lg hover:bg-green-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 overflow-hidden lg:w-[20rem]">
                            <span className="absolute p-5 top-0 left-0 w-full h-full border-gradient rounded-lg animate-border ">
                            </span>
                            Read More
                        </button>
                        </Link>   
                      
                    </div>
                </div>
            </div>
        </div>
    );
}
