import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Food() {
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
            <span className='uppercase ml-3'>Food Distribution </span>
        </div>
        <div >
            <h1 className='font-bold text-3xl lg:text-4xl ml-2 lg:ml-[380px]'>Food Distribution </h1>
        </div>
        <div className=' flex  items-center justify-center' >
            <img src='https://www.mercycorps.org/sites/default/files/styles/hero_large_2x/public/2021-03/uzbekistan-200602-jlee-0002-2048px.webp?h=93e25e76&itok=c5p7uB3d' className='mt-2 w-[400px] lg:w-[700px] ' />

        </div>
        <div>
            <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Overview  </h1>
        </div>
        <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
        Suvidha Foundation, a non-profit organization dedicated to humanitarian causes, conducts clothes distribution programs as part of its efforts to address the basic needs of underprivileged communities. Through these initiatives, the foundation aims to provide clothing assistance to individuals and families facing economic hardships, homelessness, or natural disasters. By distributing gently used or new clothing items, Suvidha Foundation not only meets the immediate needs of vulnerable populations but also promotes dignity, warmth, and self-esteem among recipients.
        </div>


        <div>
            <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Background  </h1>
        </div>
        <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
        The clothes distribution program is born out of Suvidha Foundation's commitment to alleviating poverty and enhancing the quality of life for marginalized communities. Recognizing the importance of clothing as a basic necessity and a means of protection against the elements, the foundation endeavors to bridge the gap between those who have access to adequate clothing and those who do not. Whether in urban slums, rural villages, or disaster-affected areas, Suvidha Foundation strives to ensure that no individual or family goes without proper clothing.
        </div>



        <div>
            <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Objectives </h1>
        </div>
        <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
        The primary objective of Suvidha Foundation's clothes distribution program is to provide clothing assistance to individuals and families in need, thereby addressing their immediate needs for warmth, protection, and hygiene. By distributing quality clothing items, including shirts, pants, dresses, jackets, and shoes, the foundation aims to promote dignity and self-confidence among recipients while offering practical support to improve their overall well-being. Additionally, the program seeks to raise awareness about clothing poverty and encourage donations of gently used or new clothing from individuals, businesses, and organizations.
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
            <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Distribution Process  </h1>
        </div>
        <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
        Once the donated clothing items have been sorted and prepared, Suvidha Foundation coordinates distribution events in collaboration with local community partners, NGOs, and government agencies. Distribution events may take place at community centers, schools, shelters, or other accessible locations where individuals and families in need can easily access assistance. Recipients are provided with the opportunity to select clothing items based on their size, preferences, and specific needs, ensuring that they receive items that fit comfortably and suit their individual preferences.
        </div>



        <div>
            <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Awareness </h1>
        </div>
        <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
        In addition to providing direct assistance to individuals and families in need, Suvidha Foundation's clothes distribution program serves as a platform for raising awareness about clothing poverty and advocating for greater support for vulnerable populations. Through outreach campaigns, media partnerships, and social media engagement, the foundation highlights the importance of access to adequate clothing for promoting dignity, health, and well-being. By sharing stories and testimonials from recipients, Suvidha Foundation seeks to mobilize public support and inspire action to address clothing poverty at the local, national, and global levels.
        </div>


        <div>
            <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Future Motive </h1>
        </div>
        <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
        As Suvidha Foundation continues its mission of serving vulnerable communities, the organization remains committed to expanding and enhancing its clothes distribution program. Moving forward, the foundation plans to explore innovative approaches to clothing collection, sorting, and distribution, including the use of technology and partnerships with local businesses and retailers. Additionally, Suvidha Foundation aims to advocate for policies and initiatives that address the root causes of clothing poverty and promote equitable access to clothing for all individuals and families in need. By building partnerships, raising awareness, and mobilizing resources, Suvidha Foundation strives to make a meaningful and lasting impact in the lives of those it serves through its clothes distribution program.
        </div>


    </div>
    <div>
        <Footer />
    </div>

</>
  )
}
