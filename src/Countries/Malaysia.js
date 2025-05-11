import React from 'react'
import Navbar from '../components/Navbar'
import { IoIosArrowDropright } from "react-icons/io";
import Footer from '../components/Footer';
export default function Malaysia() {
    return (
        <>


            <div>
                <Navbar />
            </div>
            <div className='mt-3 flex flex-col '>
                <div className='flex flex-row font-bold text-lg  lg:text-2xl lg:ml-[370px]'>
                    <span className='uppercase ml-2 mr-3'>where we work </span>
                    <span className='mt-[5px] lg:mt-[3px]'>  <IoIosArrowDropright /> </span>
                    <span className='uppercase ml-3'>Malaysia </span>
                </div>
                <div >
                    <h1 className='font-bold text-3xl lg:text-4xl ml-2 lg:ml-[380px]'>Malaysia</h1>
                </div>
                <div className=' flex  items-center justify-center' >
                    <img src='https://www.mercycorps.org/sites/default/files/styles/hero_large_2x/public/2021-06/nepal-201803-emillstein-5468-2048px.webp?h=4555fd66&itok=pi0-Ewa-' className='mt-2 w-[400px] lg:w-[700px] ' />

                </div>
                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>The Context  </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                    Non-Governmental Organizations (NGOs) in Malaysia play a significant role in addressing a wide range of social, economic, and environmental issues, advocating for marginalized communities, and promoting sustainable development across the nation.

                    One significant area of NGO activity in Malaysia is human rights advocacy. Organizations such as Suara Rakyat Malaysia (SUARAM) and Lawyers for Liberty (LFL) work to promote civil liberties, freedom of expression, and justice, often challenging governmental policies and advocating for legal reforms to protect human rights.
                    <br/> <br/>
                    Moreover, environmental NGOs like the Malaysian Nature Society (MNS) and WWF-Malaysia focus on conservation efforts, biodiversity protection, and sustainable development practices. They engage in research, advocacy, and community-based initiatives to address environmental challenges such as deforestation, habitat loss, and pollution.

                    Additionally, NGOs in Malaysia are actively involved in providing social services and supporting vulnerable populations. Charitable organizations like the Malaysian Red Crescent Society and Mercy Malaysia provide humanitarian aid, disaster relief, and healthcare services to those in need, both domestically and internationally.

                    Overall, NGOs in Malaysia serve as important agents of social change, environmental stewardship, and community empowerment, contributing to building a more inclusive, equitable, and sustainable society for all Malaysians.
                </div>

            </div>
            <div>
                <Footer />
            </div>

        </>

    )
}
