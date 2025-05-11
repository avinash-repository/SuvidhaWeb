import React from 'react'
import Navbar from '../components/Navbar'
import { IoIosArrowDropright } from "react-icons/io";
import Footer from '../components/Footer';
export default function Russia() {
    return (
        <>


            <div>
                <Navbar />
            </div>
            <div className='mt-3 flex flex-col '>
                <div className='flex flex-row font-bold text-lg  lg:text-2xl lg:ml-[370px]'>
                    <span className='uppercase ml-2 mr-3'>where we work </span>
                    <span className='mt-[5px] lg:mt-[3px]'>  <IoIosArrowDropright /> </span>
                    <span className='uppercase ml-3'>Russia </span>
                </div>
                <div >
                    <h1 className='font-bold text-3xl lg:text-4xl ml-2 lg:ml-[380px]'>Russia</h1>
                </div>
                <div className=' flex  items-center justify-center' >
                    <img src='https://www.mercycorps.org/sites/default/files/styles/hero_large_2x/public/2021-03/georgia-20210304-mercycorps-003-3708x3024px.webp?h=3a6d5a64&itok=aIh4KkTF' className='mt-2 w-[400px] lg:w-[700px] ' />

                </div>
                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>The Context  </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                    Non-Governmental Organizations (NGOs) in Russia operate within a complex socio-political landscape, where they navigate stringent regulations and varying levels of government scrutiny. Despite these challenges, NGOs play essential roles in addressing social, environmental, and humanitarian issues across the country.

                    In Russia, NGOs are involved in a diverse range of activities, including human rights advocacy, healthcare provision, environmental protection, and community development. Organizations such as Memorial and the Committee Against Torture work tirelessly to monitor and report on human rights violations, provide legal assistance to victims, and advocate for justice and accountability.
                    <br/>< br/>
                    Moreover, environmental NGOs like Greenpeace Russia and Bellona Foundation focus on raising awareness about environmental issues, promoting sustainable development practices, and advocating for environmental protection policies. They often engage in campaigns to address issues such as air and water pollution, deforestation, and climate change impacts.

                    Additionally, NGOs in Russia play crucial roles in providing social services, supporting vulnerable populations, and fostering civic engagement. Charitable organizations like the Russian Red Cross and Give Life Foundation work to improve access to healthcare, provide assistance to people in crisis situations, and support individuals and families facing hardships.

                    Despite facing obstacles such as legal restrictions and funding challenges, NGOs in Russia continue to work towards positive social change, advocating for human rights, environmental conservation, and community welfare. Their efforts contribute to fostering a more inclusive, equitable, and sustainable society in the country.
                </div>

            </div>
            <div>
                <Footer />
            </div>

        </>

    )
}
