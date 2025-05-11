import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import team from "../images/team.jpeg";
import {Link} from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";
import img1 from "../images/whatwedo_1.jpeg";
import img2 from "../images/whatwedo_2.jpeg";
import img3 from "../images/whatwedo_3.jpg";
import img4 from "../images/whatwedo_4.jpeg";
import img5 from "../images/whatwedo_5.jpeg";
import img6 from "../images/whatwedo_6.jpeg";
import img7 from "../images/whatwedo_7.jpg";

export default function Whatwedo() {
  return (
    <>
        <div>
            <Navbar/>
        </div>

          <div className='m-3'>
              <div className=' grid grid-cols-1 lg:grid-cols-2  place-items-center  items-center gap-16 text-black text-center'>
                <Link to='/what-we-do/tree-plantation'>
       
                    <div className='bg-slate-200 w-[350px] h-[550px] lg:w-[500px] lg:h-[700px] shadow-2xl hover:scale-[105%] transition ease-in-out duration-700 '>
                        <img src={img1} alt='img' className='w-full h-[250px] lg:h-[350px] object-cover' />
                        <div className='font-bold text-3xl mt-[30px] p-5 m-3'>
                          <h1>Tree Plantation</h1>
                        </div>
                        <div className='flex flex-base mt-[10px]  '>
                          <div className=''>
                          <span style={{ fontSize: '34px' }}>  <IoIosArrowDropright /> </span>
                          </div>
                            <div className='text-xl  lg:m-2'>
                              <p>Join us in nurturing the Earth's embrace, one tree at a time. Together, let's create a greener tomorrow and breathe life into our planet.</p>
                            </div>
                        </div>
              
                        
                    </div>
                    </Link>

                  <Link to='/what-we-do/fundraising'>

               
                    <div className='bg-slate-200  w-[350px] h-[550px] lg:w-[500px] lg:h-[700px] shadow-2xl  hover:scale-[105%] transition ease-in-out duration-700'>
                        <img src={img2} alt='img' className='w-full h-[250px] lg:h-[350px] object-cover' />
                        <div className='font-bold text-3xl  mt-[20px] lg:mt-[30px]  p-5 m-3'>
                          <h1>Fundraising Events</h1>
                        </div>
                        <div className='flex flex-base mt-[10px]  '>
                          <div className=''>
                          <span style={{ fontSize: '34px' }}>  <IoIosArrowDropright /> </span>
                          </div>
                            <div className='text-xl  lg:m-2'>
                              <p>Unlock the power of generosity at our Fundraising Event. Your support will ignite positive change and uplift lives in our community.</p>
                            </div>
                        </div>
              
                        
                    </div>
                    </Link>
                    <Link to='/what-we-do/clothes'>

                    <div className='bg-slate-200  w-[350px] h-[550px] lg:w-[500px] lg:h-[700px] shadow-2xl hover:scale-[105%] transition ease-in-out duration-700 '>
                        <img src={img3} alt='img' className='w-full h-[250px] lg:h-[350px] object-cover' />
                        <div className='font-bold text-3xl  mt-[20px] lg:mt-[30px]  p-5 m-3'>
                          <h1>Clothes Distribution</h1>
                        </div>
                        <div className='flex flex-base mt-[10px] '>
                          <div className=''>
                          <span style={{ fontSize: '34px' }}>  <IoIosArrowDropright /> </span>
                          </div>
                            <div className='text-xl  lg:m-2'>
                              <p>Providing warmth and dignity through clothing. Join us in our mission to bring smiles and comfort to those in need through our cloth distribution event.</p>
                            </div>
                        </div>
              
                        
                    </div>
                    </Link>
                    <Link to='/what-we-do/food'>

                  
                    <div className='bg-slate-200  w-[350px] h-[550px] lg:w-[500px] lg:h-[700px] shadow-2xl  hover:scale-[105%] transition ease-in-out duration-700'>
                        <img src={img4} alt='img' className='w-full h-[250px] lg:h-[350px] object-cover' />
                        <div className='font-bold text-3xl  mt-[20px] lg:mt-[30px]  p-5 m-3'>
                          <h1>Food Distribution Initiatives by Our NGO</h1>
                        </div>
                        <div className='flex flex-base mt-[10px]  '>
                          <div className=''>
                          <span style={{ fontSize: '34px' }}>  <IoIosArrowDropright /> </span>
                          </div>
                            <div className='text-xl  lg:m-2'>
                              <p>Your generous contributions can fill empty plates and bring smiles to those in need. Together, we can create a world where everyone has access to nutritious meals.</p>
                            </div>
                        </div>
              
                        
                    </div>
                    </Link>

                    <Link to='/what-we-do/animal'>
                    <div className='bg-slate-200  w-[350px] h-[550px] lg:w-[500px] lg:h-[700px] shadow-2xl hover:scale-[105%] transition ease-in-out duration-700 '>
                        <img src={img5} alt='img' className='w-full h-[250px] lg:h-[350px] object-cover' />
                        <div className='font-bold text-3xl  mt-[20px] lg:mt-[30px]  p-5 m-3'>
                          <h1>Ensuring Happy and Healthy Animals through Feeding Programs</h1>
                        </div>
                        <div className='flex flex-base mt-[10px]  '>
                          <div className=''>
                          <span style={{ fontSize: '34px' }}>  <IoIosArrowDropright /> </span>
                          </div>
                            <div className='text-xl  lg:m-2'>
                              <p>Join us in providing sustenance and compassion to our furry companions. Together, let's make a positive impact on their lives through our Animal Feeding event.</p>
                            </div>
                        </div>
              
                        
                    </div>
                    </Link>

                    <Link to='/what-we-do/sanitary'>

                    <div className='bg-slate-200  w-[350px] h-[550px] lg:w-[500px] lg:h-[700px] shadow-2xl  hover:scale-[105%] transition ease-in-out duration-700'>
                        <img src={img6} alt='img' className='w-full h-[250px] lg:h-[350px] object-cover' />
                        <div className='font-bold text-3xl mt-[20px] lg:mt-[30px] p-5 m-3'>
                          <h1>Sanitary Pads Distribution</h1>
                        </div>
                        <div className='flex flex-base mt-[10px]  '>
                          <div className=''>
                          <span style={{ fontSize: '34px' }}>  <IoIosArrowDropright /> </span>
                          </div>
                            <div className='text-xl  lg:m-2'>
                              <p>Breaking barriers and promoting menstrual health with our Sanitary Pad Initiative. Together, let's empower women and ensure access to safe and dignified hygiene.</p>
                            </div>
                        </div>
              
                        
                    </div>
                    
                    </Link>
                    <Link to='/what-we-do/workshop'>

        

                    <div className='bg-slate-200  w-[350px] h-[550px] lg:w-[500px] lg:h-[700px] shadow-2xl hover:scale-[105%] transition ease-in-out duration-700 '>
                        <img src={img7} alt='img' className='w-full h-[250px] lg:h-[350px] object-cover' />
                        <div className='font-bold text-3xl mt-[20px] lg:mt-[30px] p-5 m-3'>
                          <h1>Free Workshops</h1>
                        </div>
                        <div className='flex flex-base  mt-[10px] '>
                          <div className=''>
                          <span style={{ fontSize: '34px' }}>  <IoIosArrowDropright /> </span>
                          </div>
                            <div className='text-xl  lg:m-2' >
                              <p>Discover new skills, ignite your passions, and embrace lifelong learning with our engaging and enriching free workshops.</p>
                            </div>
                        </div>
              
                        
                    </div>
                    </Link>

              </div>

          </div>

        <div>
            <Footer/>
        </div>
    </>
  )
}
