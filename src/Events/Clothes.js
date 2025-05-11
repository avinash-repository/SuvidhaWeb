import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Clothes() {
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
                    <span className='uppercase ml-3'>Clothes Distribution. </span>
                </div>
                <div >
                    <h1 className='font-bold text-3xl lg:text-4xl ml-2 lg:ml-[380px]'>Clothes Distribution </h1>
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
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Objectives  </h1>
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
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Collection And Sorting  </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                The success of Suvidha Foundation's clothes distribution program hinges on the generous donations of clothing from individuals, families, and corporate partners. The foundation organizes clothing drives and collection campaigns to gather gently used or new clothing items, which are then sorted, cleaned, and organized at designated distribution centers. Dedicated volunteers play a crucial role in sorting through donated clothing, ensuring that items are in good condition and suitable for distribution to recipients.
                </div>



                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Distribution Process </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                Once the donated clothing items have been sorted and prepared, Suvidha Foundation coordinates distribution events in collaboration with local community partners, NGOs, and government agencies. Distribution events may take place at community centers, schools, shelters, or other accessible locations where individuals and families in need can easily access assistance. Recipients are provided with the opportunity to select clothing items based on their size, preferences, and specific needs, ensuring that they receive items that fit comfortably and suit their individual preferences.
                </div>


                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Impact  </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                The impact of Suvidha Foundation's clothes distribution program is measured not only in the number of clothing items distributed but also in the positive outcomes experienced by recipients. For individuals and families struggling to make ends meet, access to quality clothing can make a significant difference in their daily lives. Whether it's a warm coat to withstand winter temperatures or a clean shirt for a job interview, the clothing provided by Suvidha Foundation offers practical support and instills a sense of dignity and self-worth. Success stories from program beneficiaries highlight the transformative impact of receiving clothing assistance, empowering individuals to overcome adversity and pursue opportunities for a better future.
                </div>


            </div>
            <div>
                <Footer />
            </div>

        </>
  )
}
