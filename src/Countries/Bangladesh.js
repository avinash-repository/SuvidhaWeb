import React from 'react'
import Navbar from '../components/Navbar'
import { IoIosArrowDropright } from "react-icons/io";
import Footer from '../components/Footer';
export default function Bangladesh() {
    return (
        <>


            <div>
                <Navbar />
            </div>
            <div className='mt-3 flex flex-col '>
                <div className='flex flex-row font-bold text-lg  lg:text-2xl lg:ml-[370px]'>
                    <span className='uppercase ml-2 mr-3'>where we work </span>
                    <span className='mt-[5px] lg:mt-[3px]'>  <IoIosArrowDropright /> </span>
                    <span className='uppercase ml-3'>Bangladesh </span>
                </div>
                <div >
                    <h1 className='font-bold text-3xl lg:text-4xl ml-2 lg:ml-[380px]'>Bangladesh </h1>
                </div>
                <div className=' flex  items-center justify-center' >
                    <img src='https://www.mercycorps.org/sites/default/files/styles/hero_large_2x/public/2021-03/uzbekistan-200602-jlee-0002-2048px.webp?h=93e25e76&itok=c5p7uB3d' className='mt-2 w-[400px] lg:w-[700px] ' />

                </div>
                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>The Context  </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                    Non-Governmental Organizations (NGOs) in Bangladesh play a pivotal role in addressing various socio-economic challenges and improving the quality of life for millions of people across the country. Bangladesh has a rich and vibrant NGO sector, known for its innovation, resilience, and grassroots approach to development.

                    NGOs in Bangladesh are involved in a wide range of activities, including poverty alleviation, healthcare provision, education, women's empowerment, and disaster management. Organizations like BRAC (formerly Bangladesh Rural Advancement Committee) and Grameen Bank have gained international recognition for their innovative microfinance programs, which have helped lift millions of people out of poverty by providing access to credit and financial services.
                    <br/> <br/>
                    Moreover, NGOs in Bangladesh are actively engaged in promoting healthcare access and improving health outcomes, particularly in rural areas. Organizations such as the Bangladesh Red Crescent Society and icddr,b (International Centre for Diarrhoeal Disease Research, Bangladesh) work to combat diseases, provide healthcare services, and strengthen health systems across the country.

                    Additionally, NGOs in Bangladesh play a crucial role in advancing education and empowering marginalized communities, particularly women and girls. Organizations like BRAC Education and Plan International Bangladesh focus on improving access to quality education, promoting gender equality, and providing vocational training opportunities for youth.

                    Overall, NGOs in Bangladesh are instrumental in driving social change, promoting sustainable development, and empowering communities to build a better future for themselves and future generations. Their work is essential in addressing the country's development challenges and creating pathways to a more equitable and prosperous society.
                </div>

            </div>
            <div>
                <Footer />
            </div>

        </>

    )
}
