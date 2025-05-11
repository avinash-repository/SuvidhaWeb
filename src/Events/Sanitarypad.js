import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Sanitarypad() {
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
            <span className='uppercase ml-3'>Sanitary Pad Distribution </span>
        </div>
        <div >
            <h1 className='font-bold text-3xl lg:text-4xl ml-2 lg:ml-[380px]'>Sanitary Pad Distribution </h1>
        </div>
        <div className=' flex  items-center justify-center' >
            <img src='https://www.mercycorps.org/sites/default/files/styles/hero_large_2x/public/2021-03/uzbekistan-200602-jlee-0002-2048px.webp?h=93e25e76&itok=c5p7uB3d' className='mt-2 w-[400px] lg:w-[700px] ' />

        </div>
        <div>
            <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Overview  </h1>
        </div>
        <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
        Suvidha Foundation, a non-profit organization committed to social welfare and women's empowerment, has initiated a sanitary pad distribution program to address menstrual hygiene challenges faced by women and girls in underserved communities. Recognizing the importance of access to menstrual hygiene products for women's health and dignity, Suvidha Foundation endeavors to provide free sanitary pads to those in need, thereby promoting menstrual health, preventing infections, and breaking the stigma surrounding menstruation.
        </div>


        <div>
            <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Background  </h1>
        </div>
        <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
        Menstrual hygiene remains a significant issue in many parts of the world, particularly in low-income and marginalized communities where access to sanitary products is limited or unaffordable. Lack of access to menstrual hygiene products can lead to adverse health outcomes, school absenteeism, and social stigma. Suvidha Foundation acknowledges the multifaceted challenges associated with menstrual hygiene and seeks to address them through its sanitary pad distribution program..
        </div>



        <div>
            <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Implementation  </h1>
        </div>
        <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
        Suvidha Foundation implements its sanitary pad distribution program through a coordinated effort involving partnerships with local authorities, healthcare providers, and community organizations. The foundation sources sanitary pads from reputable manufacturers and distributors, ensuring that the products meet quality standards and safety requirements. Distribution channels include health clinics, schools, community centers, and outreach events where women and girls can access free sanitary pads along with information on menstrual hygiene management.
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
        Community engagement is integral to the success of Suvidha Foundation's sanitary pad distribution program. The foundation conducts awareness campaigns and educational workshops to promote menstrual health literacy and empower women and girls to make informed choices about menstrual hygiene. By engaging community leaders, educators, and healthcare professionals, the program fosters a supportive environment where open discussions about menstruation are encouraged, and stigma is challenged.
        </div>



        <div>
            <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Monitoring And Evaluation </h1>
        </div>
        <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
        Suvidha Foundation monitors and evaluates the impact of its sanitary pad distribution program through various metrics, including the number of pads distributed, reach of distribution channels, and feedback from beneficiaries. Regular assessments help identify areas for improvement and ensure that the program remains responsive to the needs of the community. Additionally, the foundation conducts surveys and qualitative interviews to gather insights into the program's effectiveness in promoting menstrual health and empowering women and girls.
        </div>


        <div>
            <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Challenges And Future Motive </h1>
        </div>
        <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
        While Suvidha Foundation's sanitary pad distribution program has made significant strides in promoting menstrual health and hygiene, several challenges persist, including funding constraints, logistical barriers, and cultural taboos. Moving forward, the foundation aims to address these challenges through sustained advocacy, partnerships with stakeholders, and innovative solutions. By expanding the reach of its distribution channels and integrating menstrual hygiene education into existing health and education programs, Suvidha Foundation strives to create a future where every woman and girl can manage her periods safely, hygienically, and with dignity.
        </div>


    </div>
    <div>
        <Footer />
    </div>

</>
  )
}
