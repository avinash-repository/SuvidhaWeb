import React from 'react'
import Navbar from '../components/Navbar'
import { IoIosArrowDropright } from "react-icons/io";
import Footer from '../components/Footer';
export default function Chile() {
    return (
        <>


            <div>
                <Navbar />
            </div>
            <div className='mt-3 flex flex-col '>
                <div className='flex flex-row font-bold text-lg  lg:text-2xl lg:ml-[370px]'>
                    <span className='uppercase ml-2 mr-3'>where we work </span>
                    <span className='mt-[5px] lg:mt-[3px]'>  <IoIosArrowDropright /> </span>
                    <span className='uppercase ml-3'>Chile </span>
                </div>
                <div >
                    <h1 className='font-bold text-3xl lg:text-4xl ml-2 lg:ml-[380px]'>Chile </h1>
                </div>
                <div className=' flex  items-center justify-center' >
                    <img src='https://www.mercycorps.org/sites/default/files/styles/hero_large_2x/public/2020-07/colombia-201905-emillstein-0353-2048px.webp?h=5ec96bd9&itok=XbDNOIMc' className='mt-2 w-[400px] lg:w-[700px] ' />

                </div>
                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>The Context  </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                    Non-Governmental Organizations (NGOs) in Chile play a vital role in addressing social, environmental, and economic issues, advocating for marginalized communities, and fostering sustainable development across the country.

                    One significant area of NGO activity in Chile is environmental conservation and sustainability. Organizations such as Fundación Terram and Oceana Chile work to protect Chile's diverse ecosystems, advocate for sustainable fisheries management, and promote environmental policies to address climate change and biodiversity loss.

                    Moreover, NGOs in Chile are actively involved in promoting human rights and social justice. Organizations like Amnesty International Chile and Corporación Humanas focus on advocating for human rights protections, gender equality, and social inclusion, working to address issues such as discrimination, violence against women, and indigenous rights.
                    <br/> <br/>
                    Additionally, NGOs in Chile play essential roles in providing social services and supporting vulnerable populations. Charitable organizations like Hogar de Cristo and Techo-Chile work to alleviate poverty, provide housing assistance, and empower communities through education, healthcare, and social programs.

                    Overall, NGOs in Chile serve as key actors in driving positive social change, protecting the environment, and promoting human rights and development. Despite facing challenges such as limited resources and political obstacles, these organizations remain committed to building a more equitable, sustainable, and inclusive society for all Chileans.
                </div>

            </div>
            <div>
                <Footer />
            </div>

        </>

    )
}
