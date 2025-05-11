import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Workshop.css";
export default function Workshop() {
    return (
        <>


            <div>
                <Navbar />
            </div>
            <div className='mt-3 flex flex-col '>
                <Link to='/what-we-do'>
                    <div className='flex flex-row lg:ml-[370px] align-center pb-4'>
                        <span className='text-[2rem] pt-1'>
                            <IoIosArrowRoundBack />
                        </span>
                        <span className='text-bold text-[1.5rem] underline'>Back to What we Do</span>
                    </div>
                </Link>
                <div className='flex flex-row font-bold text-lg  lg:text-2xl lg:ml-[370px]'>
                    <span className='uppercase ml-2 mr-3'>what we do </span>
                    <span className='mt-[5px] lg:mt-[3px]'>  <IoIosArrowDropright /> </span>
                    <span className='uppercase ml-3'>Workshops </span>
                </div>
                <div >
                    <h1 className='font-bold text-3xl lg:text-4xl ml-2 lg:ml-[380px]'>Workshops </h1>
                </div>
                <div className=' flex  items-center justify-center' >
                    <img src='https://www.mercycorps.org/sites/default/files/styles/hero_large_2x/public/2021-03/uzbekistan-200602-jlee-0002-2048px.webp?h=93e25e76&itok=c5p7uB3d' className='mt-2 w-[400px] lg:w-[700px] ' />

                </div>
                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Overview  </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                    Suvidha Foundation, a non-profit organization dedicated to social welfare and community development, conducts free workshops as part of its commitment to empowering individuals with knowledge, skills, and resources. These workshops cover a diverse range of topics, including health and hygiene, education, vocational training, and personal development. Through these interactive and informative sessions, Suvidha Foundation aims to equip participants with the tools and information they need to lead healthier, more productive lives and contribute positively to their communities.
                </div>


                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Objectives  </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                    The primary objective of Suvidha Foundation's free workshops is to provide accessible and valuable learning opportunities to individuals from all walks of life. By offering workshops on a wide range of topics, the foundation seeks to address the diverse needs and interests of community members, empowering them to enhance their well-being and quality of life. Additionally, these workshops serve as platforms for fostering community engagement, promoting social cohesion, and strengthening grassroots initiatives for positive change.
                </div>



                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Types of Workshops: </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
               <ul className='circle-bullets'>
              <li className='font-bold'> Health and Hygiene Workshops:</li>  
                    Suvidha Foundation conducts workshops on various aspects of health and hygiene, including nutrition, hygiene practices, disease prevention, and maternal and child health. These workshops provide participants with essential information and practical tips for maintaining good health and preventing illnesses, thereby improving overall well-being and quality of life.

                 <li className='font-bold'> Education and Skill Development Workshops:</li>  
                    Education and skill development workshops aim to enhance participants' knowledge and skills in areas such as literacy, numeracy, computer literacy, and vocational training. These workshops provide valuable learning opportunities for individuals seeking to improve their employability, advance their careers, or pursue further education.

                  <li className='font-bold'> Personal Development and Empowerment Workshops:</li>  
                    Personal development workshops focus on empowering participants with the mindset, skills, and confidence to achieve their goals and fulfill their potential. Topics may include leadership development, communication skills, time management, goal setting, and resilience building. These workshops aim to instill a sense of empowerment and self-efficacy among participants, enabling them to overcome challenges and thrive in their personal and professional lives.

                    </ul>
                </div>
                <div className='flex justify-center mt-5 mb-4'>
                    <iframe
                        className='w-[22rem] h-[15rem] lg:w-[70rem] lg:h-[30rem] object-cover '
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/X4QYV5GTz7c"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>



                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Community Engagement  </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                Community engagement is an integral aspect of Suvidha Foundation's workshop initiatives. The foundation actively involves community members in the planning, design, and implementation of workshops, ensuring that the content is relevant, culturally sensitive, and responsive to local needs. By soliciting feedback and input from participants, the foundation fosters a sense of ownership and collaboration, empowering community members to take an active role in their own learning and development
                </div>



                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Impact And Benefits </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                The impact of Suvidha Foundation's free workshops is far-reaching, touching the lives of individuals and communities in meaningful ways. Participants gain valuable knowledge, skills, and resources that enable them to make informed decisions, improve their livelihoods, and enhance their well-being. Moreover, workshops provide opportunities for social interaction, networking, and peer support, fostering a sense of belonging and community cohesion. By investing in education, skill development, and personal empowerment, Suvidha Foundation contributes to building stronger, more resilient communities capable of addressing local challenges and seizing opportunities for growth and development.
                </div>


              


            </div>
            <div>
                <Footer />
            </div>

        </>
    )
}
