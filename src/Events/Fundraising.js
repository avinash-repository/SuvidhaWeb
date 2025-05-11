import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Fundraising.css";

export default function Fundraising() {
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
                    <span className='uppercase ml-3'>Fundraising Events </span>
                </div>
                <div >
                    <h1 className='font-bold text-3xl lg:text-4xl ml-2 lg:ml-[380px]'>Fundraising Events  </h1>
                </div>
                <div className=' flex  items-center justify-center' >
                    <img src='https://www.mercycorps.org/sites/default/files/styles/hero_large_2x/public/2021-03/uzbekistan-200602-jlee-0002-2048px.webp?h=93e25e76&itok=c5p7uB3d' className='mt-2 w-[400px] lg:w-[700px] ' />

                </div>
                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Overview  </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                    Suvidha Foundation, a non-profit organization dedicated to humanitarian causes and community development, organizes a series of fundraising events throughout the year to support its initiatives and programs. These events serve as platforms for raising awareness, mobilizing resources, and fostering community engagement in the foundation's mission. From charity galas and benefit concerts to crowdfunding campaigns and marathon events, Suvidha Foundation employs diverse fundraising strategies to generate financial support and sustain its impactful projects aimed at improving lives and creating positive social change.
                </div>


                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Background  </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                    The necessity for fundraising events arises from the foundation's commitment to addressing various socio-economic challenges faced by marginalized communities. Suvidha Foundation recognizes the importance of financial resources in implementing its projects effectively and reaching out to those in need. Over the years, the foundation has organized a wide range of fundraising events, each tailored to engage different segments of society and garner support from donors, sponsors, and volunteers.
                </div>



                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Objectives  </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                    The primary objectives of Suvidha Foundation's fundraising events are twofold: to raise funds for its charitable activities and to raise awareness about the causes it supports. By hosting events that resonate with donors and the public, the foundation aims to attract financial contributions and encourage long-term engagement with its mission. Additionally, these events provide opportunities for networking, collaboration, and partnership-building with individuals, businesses, and organizations sharing similar philanthropic values.
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
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Types of Fundraising Events: </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                   <ul className="circle-bullets">
                    <li className='font-bold'>
                    Charity Galas and Dinners:
                        </li> 
             
                    Suvidha Foundation organizes elegant charity galas and fundraising dinners that bring together philanthropists, celebrities, and community leaders for an evening of entertainment, fine dining, and charitable giving. These events feature auctions, raffles, and live performances, creating an atmosphere of generosity and camaraderie while raising significant funds to support the foundation's projects and initiatives.

                  <li className='font-bold'> Benefit Concerts and Performances: </li>  
                    Leveraging the power of music and the arts, Suvidha Foundation hosts benefit concerts and performances featuring renowned artists, musicians, and performers. These events attract audiences of all ages and backgrounds, providing an opportunity to enjoy live entertainment while contributing to a meaningful cause. Proceeds from ticket sales, sponsorships, and merchandise sales go towards supporting the foundation's humanitarian efforts and community projects.

                    <li className='font-bold'> Crowdfunding Campaigns:</li>
                    In the digital age, crowdfunding has emerged as a powerful tool for mobilizing support and raising funds for charitable causes. Suvidha Foundation utilizes online platforms and social media channels to launch crowdfunding campaigns, reaching out to a global audience of potential donors and supporters. These campaigns leverage the power of social networks and peer-to-peer fundraising to achieve fundraising goals and expand the foundation's reach.

                    <li className='font-bold'>Sporting Events and Marathons:</li>
                    Suvidha Foundation organizes sporting events and marathons that promote health, fitness, and social responsibility while raising funds for its charitable programs. Participants, sponsors, and supporters come together to participate in races, tournaments, and fitness challenges, rallying around a common cause and making a positive impact in the community. These events not only generate financial support but also raise awareness about the foundation's mission and initiatives..

                    </ul>
                </div>



                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Impact  And Achivements </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                The impact of Suvidha Foundation's fundraising events extends beyond financial contributions, touching the lives of individuals and communities in need. Proceeds from these events support a wide range of programs and initiatives, including education, healthcare, disaster relief, and sustainable development projects. Through its fundraising efforts, the foundation has been able to provide essential services, resources, and support to underserved populations, empowering them to lead healthier, more dignified lives. Success stories and testimonials from beneficiaries highlight the tangible impact of the foundation's work and inspire continued support from donors and supporters.
                </div>


                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>Future Motive </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                As Suvidha Foundation continues its mission of making a positive difference in the world, the organization remains committed to innovating and expanding its fundraising efforts. In the years ahead, the foundation plans to explore new fundraising strategies, technologies, and partnerships to enhance its capacity to address pressing social issues and create lasting change. By harnessing the collective power of generosity, compassion, and solidarity, Suvidha Foundation aims to build a brighter future for individuals and communities in need, one fundraising event at a time.
                </div>


            </div>
            <div>
                <Footer />
            </div>

        </>
    )
}
