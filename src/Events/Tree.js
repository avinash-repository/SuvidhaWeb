import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Tree() {
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
                    <span className='uppercase ml-3'>Tree Plantation </span>
                </div>
                <div >
                    <h1 className='font-bold text-3xl lg:text-4xl ml-2 lg:ml-[380px]'>Tree Plantation </h1>
                </div>
                <div className=' flex  items-center justify-center' >
                    <img src='https://www.mercycorps.org/sites/default/files/styles/hero_large_2x/public/2021-03/uzbekistan-200602-jlee-0002-2048px.webp?h=93e25e76&itok=c5p7uB3d' className='mt-2 w-[400px] lg:w-[700px] ' />

                </div>
                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Overview  </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                    Suvidha Foundation, a prominent NGO dedicated to environmental conservation and sustainable development, embarked on a significant tree plantation initiative aimed at combating deforestation and mitigating the adverse effects of climate change. With a strong commitment to fostering a greener and healthier planet, Suvidha Foundation strategically planned and executed tree plantation drives in various regions, mobilizing communities, volunteers, and stakeholders to actively participate in this noble cause
                </div>


                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Background  </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                    The alarming rate of deforestation and environmental degradation has posed significant challenges to the planet's ecological balance. Recognizing the urgency of the situation, Suvidha Foundation initiated its tree plantation campaign as a proactive measure to address these pressing environmental concerns. Backed by scientific research and expertise, the foundation identified key areas for tree plantation, considering factors such as soil type, climate conditions, and biodiversity.
                </div>



                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Implementation  </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                    Suvidha Foundation adopted a multi-faceted approach to implement its tree plantation project, involving meticulous planning, stakeholder engagement, and community participation. The foundation collaborated with local authorities, government agencies, educational institutions, and corporate partners to leverage resources and mobilize support for tree planting activities. Through awareness campaigns, workshops, and outreach programs, the foundation educated communities about the significance of trees in ecological restoration and encouraged active involvement in plantation drives.
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
                    Community engagement was integral to the success of Suvidha Foundation's tree plantation initiative. The foundation organized community meetings, workshops, and training sessions to empower local residents with knowledge and skills related to tree planting and environmental conservation. By actively involving communities in the decision-making process and implementation of plantation activities, the initiative fostered a sense of ownership and responsibility towards preserving natural resources.
                </div>



                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Impact Achivements </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                    Suvidha Foundation's tree plantation initiative has yielded significant impact and achievements in its mission to promote environmental sustainability and combat climate change. Through concerted efforts and collective action, the foundation has successfully planted thousands of trees across diverse landscapes, rejuvenating degraded ecosystems and restoring vital habitats for flora and fauna. The initiative has not only enhanced biodiversity and ecosystem services but also provided socio-economic benefits to communities, including improved livelihoods, watershed protection, and ecotourism opportunities.
                </div>


                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Future Motive </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                    Looking ahead, Suvidha Foundation remains committed to advancing its tree plantation agenda and scaling up its conservation efforts to address emerging environmental challenges. The foundation aims to expand its reach and impact by forging partnerships, leveraging technology, and adopting innovative approaches to sustainable land management. With a long-term vision of creating a greener and healthier planet for future generations, Suvidha Foundation continues to inspire hope and catalyze positive change through its unwavering commitment to environmental stewardship.
                </div>


            </div>
            <div>
                <Footer />
            </div>

        </>
    )
}
