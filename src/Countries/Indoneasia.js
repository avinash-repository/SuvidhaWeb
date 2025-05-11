import React from 'react'
import Navbar from '../components/Navbar'
import { IoIosArrowDropright } from "react-icons/io";
import Footer from '../components/Footer';
export default function Indonesia() {
    return (
        <>


            <div>
                <Navbar />
            </div>
            <div className='mt-3 flex flex-col '>
                <div className='flex flex-row font-bold text-lg  lg:text-2xl lg:ml-[370px]'>
                    <span className='uppercase ml-2 mr-3'>where we work </span>
                    <span className='mt-[5px] lg:mt-[3px]'>  <IoIosArrowDropright /> </span>
                    <span className='uppercase ml-3'>Indonesia </span>
                </div>
                <div >
                    <h1 className='font-bold text-3xl lg:text-4xl ml-2 lg:ml-[380px]'>Indonesia </h1>
                </div>
                <div className=' flex  items-center justify-center' >
                    <img src='https://www.mercycorps.org/sites/default/files/styles/hero_large_2x/public/2021-05/indonesia-202002-emillstein-6238-2048px.webp?h=ce2b1606&itok=iW35VSYz' className='mt-2 w-[400px] lg:w-[700px] ' />

                </div>
                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>The Context  </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                    Non-Governmental Organizations (NGOs) in Indonesia play a crucial role in addressing a wide range of social, environmental, and economic challenges, and in promoting sustainable development across the archipelago.

                    One significant area of focus for NGOs in Indonesia is disaster relief and resilience building. Given Indonesia's susceptibility to natural disasters such as earthquakes, tsunamis, and volcanic eruptions, organizations like the Indonesian Red Cross Society (Palang Merah Indonesia) and Humanitarian Forum Indonesia are instrumental in providing emergency aid, supporting recovery efforts, and implementing disaster preparedness programs.
                    <br/> <br/>
                    Moreover, environmental NGOs play a vital role in Indonesia, given its rich biodiversity and significant environmental challenges such as deforestation, habitat loss, and pollution. Organizations like WALHI (Friends of the Earth Indonesia) and Yayasan Orangutan Sumatera Lestari (Orangutan Information Centre) work to protect ecosystems, promote sustainable land-use practices, and advocate for environmental conservation policies.

                    Additionally, NGOs in Indonesia are actively involved in promoting social justice, human rights, and community development. Organizations such as Komnas HAM (National Commission on Human Rights) and Pusat Kajian Hak Asasi Manusia (Center for the Study of Human Rights) work to monitor human rights violations, provide legal assistance to marginalized groups, and advocate for policy reforms to uphold human rights standards.

                    Overall, NGOs in Indonesia play a vital role in advancing social progress, environmental sustainability, and human rights protection, contributing to the country's development and fostering a more resilient and inclusive society.
                </div>

            </div>
            <div>
                <Footer />
            </div>

        </>

    )
}
