import React from 'react'
import Navbar from '../components/Navbar'
import { IoIosArrowDropright } from "react-icons/io";
import Footer from '../components/Footer';
export default function Australia() {
    return (
        <>


            <div>
                <Navbar />
            </div>
            <div className='mt-3 flex flex-col '>
                <div className='flex flex-row font-bold text-lg  lg:text-2xl lg:ml-[370px]'>
                    <span className='uppercase ml-2 mr-3'>where we work </span>
                    <span className='mt-[5px] lg:mt-[3px]'>  <IoIosArrowDropright /> </span>
                    <span className='uppercase ml-3'>Australia</span>
                </div>
                <div >
                    <h1 className='font-bold text-3xl lg:text-4xl ml-2 lg:ml-[380px]'>Australia </h1>
                </div>
                <div className=' flex  items-center justify-center' >
                    <img src='https://www.mercycorps.org/sites/default/files/styles/hero_large_2x/public/2019-12/iraq-201511-crobbins-0101.webp?h=fadd4ac5&itok=x9W4ouLk' className='mt-2 w-[400px] lg:w-[700px] ' />

                </div>
                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>The Context  </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                    Non-Governmental Organizations (NGOs) in Australia play a vital role in addressing various social, environmental, and humanitarian issues, contributing significantly to the country's development and fostering positive change both domestically and internationally.

                    One significant area of NGO activity in Australia is Indigenous rights and reconciliation. Organizations such as the National Aboriginal Community Controlled Health Organisation (NACCHO) and the Indigenous Literacy Foundation work to empower Indigenous communities, promote cultural preservation, and advocate for social justice and equality.
                    <br/> <br/>
                    Moreover, environmental NGOs like the Australian Conservation Foundation and WWF Australia are actively engaged in protecting Australia's unique ecosystems, advocating for conservation policies, and addressing environmental challenges such as climate change, deforestation, and marine conservation.

                    Additionally, NGOs in Australia play crucial roles in providing social services, supporting vulnerable populations, and advocating for policy change. Charitable organizations like the Salvation Army and St. Vincent de Paul Society provide essential assistance to those experiencing homelessness, poverty, and domestic violence, while advocacy groups like Amnesty International Australia and Oxfam Australia work to promote human rights, gender equality, and international development.

                    Overall, NGOs in Australia serve as important agents of social change, environmental stewardship, and community empowerment, contributing to building a more inclusive, equitable, and sustainable society for all Australians and beyond.
                </div>

            </div>
            <div>
                <Footer />
            </div>

        </>

    )
}
