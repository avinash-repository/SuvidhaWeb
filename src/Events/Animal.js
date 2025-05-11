import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Animal() {
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
            <span className='uppercase ml-3'>Animal Feeding Programs </span>
        </div>
        <div >
            <h1 className='font-bold text-3xl lg:text-4xl ml-2 lg:ml-[380px]'>Animal Feeding Programs  </h1>
        </div>
        <div className=' flex  items-center justify-center' >
            <img src='https://www.mercycorps.org/sites/default/files/styles/hero_large_2x/public/2021-03/uzbekistan-200602-jlee-0002-2048px.webp?h=93e25e76&itok=c5p7uB3d' className='mt-2 w-[400px] lg:w-[700px] ' />

        </div>
        <div>
            <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Overview  </h1>
        </div>
        <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
        Suvidha Foundation, a compassionate NGO dedicated to animal welfare and well-being, has initiated extensive animal feeding programs aimed at addressing the challenges of hunger and malnutrition among stray animals. With a deep sense of empathy and responsibility towards the welfare of animals, Suvidha Foundation has undertaken various feeding initiatives to ensure that vulnerable animals receive the nourishment they need to thrive. Through strategic partnerships, community engagement, and volunteer-driven efforts, the foundation has been able to make a significant impact in alleviating the suffering of stray animals and promoting compassion towards all living beings.
        </div>


        <div>
            <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Background  </h1>
        </div>
        <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
        The plight of stray animals, including dogs, cats, and cattle, facing starvation and neglect in urban and rural areas, prompted Suvidha Foundation to launch its animal feeding programs. Recognizing the fundamental right of animals to food and shelter, the foundation embarked on a mission to provide regular meals and essential care to these vulnerable beings. With the support of dedicated volunteers and animal lovers, Suvidha Foundation has been able to extend its reach and impact, reaching out to communities and areas where animal welfare needs are the greatest.
        </div>



        <div>
            <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Objectives  </h1>
        </div>
        <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
        The primary objective of Suvidha Foundation's animal feeding programs is to alleviate hunger and suffering among stray animals by providing them with nutritious food and clean water on a regular basis. By addressing the basic needs of these animals, the foundation aims to improve their health and well-being, reduce instances of malnutrition and disease, and promote a culture of compassion and empathy towards animals in society. Additionally, the programs seek to raise awareness about the importance of responsible pet ownership, sterilization, and vaccination to control the stray animal population and prevent cruelty and neglect.
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
        Community engagement is integral to the success of Suvidha Foundation's animal feeding programs. The foundation actively involves local residents, businesses, and organizations in its efforts to support stray animals and promote animal welfare. Through awareness campaigns, educational workshops, and volunteer opportunities, the foundation fosters a sense of empathy and responsibility towards animals among community members, encouraging them to become advocates for humane treatment and care. By mobilizing collective action and solidarity, the foundation seeks to create a more compassionate and inclusive society where animals are valued and respected.
        </div>



    

        <div>
            <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Future Motive </h1>
        </div>
        <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
        Looking ahead, Suvidha Foundation remains committed to expanding and strengthening its animal feeding programs to reach more stray animals in need and make a greater impact on their welfare. The foundation aims to scale up its operations by establishing additional feeding stations, recruiting more volunteers, and forging partnerships with local authorities and animal welfare organizations. Additionally, the foundation plans to diversify its services to include comprehensive veterinary care, adoption programs, and community-based initiatives to address the root causes of animal homelessness and suffering. With a steadfast dedication to compassion and empathy, Suvidha Foundation continues to champion the rights and well-being of animals, striving to create a more humane and caring world for all living beings.
        </div>


    </div>
    <div>
        <Footer />
    </div>

</>
  )
}
