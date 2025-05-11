import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Link} from "react-router-dom";
export default function Courses() {
  return (
        <>
        <div>
        <Navbar/>
        </div>
        <div >
                <div className='text-center  font-bold text-3xl m-4'>
                    <h1>Free Online Course </h1>
                </div>
                <div className='flex justify-center '>

                <div className='grid grid-cols-1 lg:grid-cols-2  gap-[10rem]  place-content-evenly h-auto'>
                        <div className=' m-[0.5rem] flex flex-col justify-center bg-sky-900 p-3 text-white   w-[320px] h-[580px] lg:w-[360px] lg:h-[580px]'>
                            <div>
                                <img src='https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/07/22/Pictures/describe-monuments-thursday-burmaula-rathore-narendra-hindustan_71c35ed2-4ff8-11e6-85e3-522dd231fa74.jpg' alt='img' className='w-full h-[10rem] lg:h-[14rem]' />
                            </div>
                            <div className='flex justify-center font-bold text-[1.5rem] uppercase'>
                               Tour Guide
                            </div>
                            <div className='flex justify-center p-3'>
                                <p>
                                Tour guides share cultural and historical information with people on organized tours about notable locations, landmarks, exhibits and unique objects in places such as museums, cities, historical buildings and educational or religious facilities. They also plan the itineraries for their tours and make reservations or purchase any necessary admittance tickets for attractions                                </p>
                            </div>

                            <div className='text-white text-[1.4rem] flex justify-center mt-[1rem]  '>
                            <Link to='/courses/tour-guide'>
                                <button className='bg-teal-800  p-[0.5rem] rounded-xl ' >Start Learning  </button>
                            </Link>

                        </div>
                    </div>

                    <div className=' m-[0.5rem] flex flex-col justify-center bg-sky-900 p-3 text-white   w-[320px] h-[580px] lg:w-[360px] lg:h-[580px]'>
                            <div>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4VSjUK5407SECdetm9GGiYExvK41Dfa39lg&s' alt='img' className='w-full h-[10rem] lg:h-[14rem]' />
                            </div>
                            <div className='flex justify-center font-bold text-[1.5rem] uppercase'>
                         Fragrance Consultant 
                            </div>
                            <div className='flex justify-center p-3 '>
                                <p>
                                Fragrance consultants help perfume developers find the elements needed to achieve their fragrance goals as well as the right bottle shapes and sizes. They also design attractive and effective packaging and help their clients create successful marketing campaigns.
                                </p>
                            </div>

                            <div className='text-white text-[1.4rem] flex justify-center mt-[1rem]  '>
                            <Link to='/courses/fragrance'>
                                <button className='bg-teal-800  p-[0.5rem] rounded-xl ' >Start Learning  </button>
                            </Link>

                        </div>
                    </div>

                    <div className=' m-[0.5rem] flex flex-col justify-center bg-sky-900 p-3 text-white   w-[320px] h-[580px] lg:w-[360px] lg:h-[580px]'>
                            <div> 
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4VSjUK5407SECdetm9GGiYExvK41Dfa39lg&s' alt='img' className='w-full h-[10rem] lg:h-[14rem]' />
                            </div>
                            <div className='flex justify-center font-bold text-[1.5rem]  uppercase'>
                             Swim Instructor 
                            </div>
                            <div className='flex justify-center p-3'>
                                <p>
                                Swim instructors plan lessons to teach children and adults proper swimming techniques and water safety skills. Their goal is to help their clients develop strong swimming skills and confidence in the water. They may also serve as coaches for swim teams or individual competitive swimmers who want to enhance their performance.
                                </p>
                            </div>

                            <div className='text-white text-[1.4rem] flex justify-center mt-[1rem]  '>
                            <Link to='/courses/swim'>
                                <button className='bg-teal-800  p-[0.5rem] rounded-xl ' >Start Learning  </button>
                            </Link>

                        </div>
                    </div>

                    <div className=' m-[0.5rem] flex flex-col justify-center bg-sky-900 p-3 text-white   w-[320px] h-[580px] lg:w-[360px] lg:h-[580px]'>
                            <div>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmHxd_qTARFPwEQBWm9iBZSukLCvJF6kuNg&s' alt='img' className='w-full h-[10rem] lg:h-[14rem]' />
                            </div>
                            <div className='flex justify-center font-bold text-[1.5rem]  uppercase'>
                              Ads reviewer
                            </div>
                            <div className='flex justify-center p-3'>
                                <p>
                                An ads reviewer reads the online content that appears for specific search inquiries to test and measure the quality of search results. This helps search engines ensure their algorithms are working effectively to provide accurate, relevant and comprehensive results that create a positive and desirable user experience. 
                                </p>
                            </div>

                            <div className='text-white text-[1.4rem] flex justify-center mt-[1rem]  '>
                            <Link to='/courses/ads'>
                                <button className='bg-teal-800  p-[0.5rem] rounded-xl ' >Start Learning  </button>
                            </Link>

                        </div>
                    </div>

                    <div className=' m-[0.5rem] flex flex-col justify-center bg-sky-900 p-3 text-white   w-[320px] h-[580px] lg:w-[360px] lg:h-[580px]'>
                            <div>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTft358EXYd2yU0WAazNDU4WOWdyFfuQdwcmg&s' alt='img' className='w-full h-[10rem] lg:h-[14rem]' />
                            </div>
                            <div className='flex justify-center font-bold text-[1.5rem]  uppercase'>
                             Translator 
                            </div>
                            <div className='flex justify-center  p-3'>
                                <p>
                                A translator converts written text from one language to another. Their goal is to expand the availability of specific texts to different cultural and regional areas while conserving the tone, style and intent of the original content. Some translators may also work with spoken language as interpreters.
                                </p>
                            </div>

                            <div className='text-white text-[1.4rem] flex justify-center mt-[1rem]  '>
                            <Link to='/courses/translator'>
                                <button className='bg-teal-800  p-[0.5rem] rounded-xl ' >Start Learning  </button>
                            </Link>

                        </div>
                    </div>

                    <div className=' m-[0.5rem] flex flex-col justify-center bg-sky-900 p-3 text-white   w-[320px] h-[580px] lg:w-[360px] lg:h-[580px]'>
                            <div>
                                <img src='https://www.thelist.com/img/gallery/how-to-begin-a-career-as-a-nutritionist/l-intro-1665362629.jpg' alt='img' className='w-full h-[10rem] lg:h-[14rem]' />
                            </div>
                            <div className='flex justify-center font-bold text-[1.5rem]  uppercase'>
                               Nutritionist
                            </div>
                            <div className='flex justify-center p-3'>
                                <p>
                                Nutritionists help clients achieve their health goals by assessing their health and nutritional needs and educating them about healthy eating habits and food options. They also create custom meal plans, evaluate the effectiveness of their meal plans and encourage them to live healthy lifestyles.
                                </p>
                            </div>

                            <div className='text-white text-[1.4rem] flex justify-center mt-[1rem]  '>
                            <Link to='/courses/nutritionist'>
                                <button className='bg-teal-800  p-[0.5rem] rounded-xl ' >Start Learning   </button>
                            </Link>

                        </div>
                    </div>

                    <div className=' m-[0.5rem] flex flex-col justify-center bg-sky-900 p-3 text-white   w-[320px] h-[580px] lg:w-[360px] lg:h-[580px]'>
                            <div>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgBmSM-G62Wq9cFoGsUFByUtzo6mPRl198_g&s' alt='img' className='w-full h-[10rem] lg:h-[14rem]' />
                            </div>
                            <div className='flex justify-center font-bold text-[1.5rem]  uppercase'>
                              Transport Planner 
                            </div>
                            <div className='flex justify-center p-3'>
                                <p>
                                A transport planner creates, studies and analyzes plans for various transportation projects based on current and future expectations for population and traffic trends. They also determine the effectiveness of new road proposals and work with transport engineers, developers and environmental planners .
                                </p>
                            </div>

                            <div className='text-white text-[1.4rem] flex justify-center mt-[1rem]  '>
                            <Link to='/courses/transport'>
                                <button className='bg-teal-800  p-[0.5rem] rounded-xl ' >Start Learning </button>
                            </Link>

                        </div>
                    </div>

                    

                  
                    </div>
                </div>
        </div>
       <div>
        <Footer/>
       </div>
        </>
  )
}
