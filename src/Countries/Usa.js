import React from 'react'
import Navbar from '../components/Navbar'
import { IoIosArrowDropright } from "react-icons/io";
import Footer from '../components/Footer';
export default function Usa() {
    return (
        <>


            <div>
                <Navbar />
            </div>
            <div className='mt-3 flex flex-col '>
                <div className='flex flex-row font-bold text-lg  lg:text-2xl lg:ml-[370px]'>
                    <span className='uppercase ml-2 mr-3'>where we work </span>
                    <span className='mt-[5px] lg:mt-[3px]'>  <IoIosArrowDropright /> </span>
                    <span className='uppercase ml-3'>USA </span>
                </div>
                <div >
                    <h1 className='font-bold text-3xl lg:text-4xl ml-2 lg:ml-[380px]'>USA </h1>
                </div>
                <div className=' flex  items-center justify-center' >
                    <img src='https://www.mercycorps.org/sites/default/files/styles/hero_large_2x/public/2021-05/unitedstates-202101-emillstein-1915-2048px.webp?h=20a5c04f&itok=a3PdkbEA' className='mt-2 w-[400px] lg:w-[700px] ' />

                </div>
                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>The Context  </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                    Non-Governmental Organizations (NGOs) in the United States are integral to addressing a diverse array of social, environmental, and humanitarian issues within the country and around the world. With a rich tradition of civil society engagement, NGOs in the USA play a vital role in supplementing government efforts, advocating for policy change, and mobilizing resources to tackle pressing challenges.

                    In the United States, NGOs operate in various sectors, including healthcare, education, environmental conservation, human rights, and disaster relief. Organizations such as the American Red Cross, Doctors Without Borders, and Feeding America are among the many NGOs that provide critical assistance during emergencies, disasters, and times of need, offering medical care, food aid, and shelter to affected communities.

                    Moreover, environmental NGOs like the Sierra Club, Environmental Defense Fund, and Natural Resources Defense Council (NRDC) work to protect natural resources, combat climate change, and promote sustainable development practices through advocacy, research, and community engagement.
                    <br/> <br/>
                    Additionally, NGOs in the USA play essential roles in advancing social justice, civil rights, and equality. Organizations such as the American Civil Liberties Union (ACLU), NAACP Legal Defense Fund, and Human Rights Watch advocate for marginalized groups, challenge discriminatory practices, and promote policy reforms to uphold constitutional rights and human dignity.

                    Overall, NGOs in the USA are vital actors in shaping public discourse, driving social change, and fostering a more equitable, sustainable, and inclusive society. Their work embodies the spirit of civic engagement and collective action, contributing to positive outcomes for individuals, communities, and the nation as a whole.
                </div>

            </div>
            <div>
                <Footer />
            </div>

        </>

    )
}
