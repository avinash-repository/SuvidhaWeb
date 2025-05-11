import React from 'react'
import Navbar from '../components/Navbar'
import { IoIosArrowDropright } from "react-icons/io";
import Footer from '../components/Footer';
export default function Myanmar() {
    return (
        <>


            <div>
                <Navbar />
            </div>
            <div className='mt-3 flex flex-col '>
                <div className='flex flex-row font-bold text-lg  lg:text-2xl lg:ml-[370px]'>
                    <span className='uppercase ml-2 mr-3'>where we work </span>
                    <span className='mt-[5px] lg:mt-[3px]'>  <IoIosArrowDropright /> </span>
                    <span className='uppercase ml-3'>Myanmar </span>
                </div>
                <div >
                    <h1 className='font-bold text-3xl lg:text-4xl ml-2 lg:ml-[380px]'>Myanmar </h1>
                </div>
                <div className=' flex  items-center justify-center' >
                    <img src='https://www.mercycorps.org/sites/default/files/styles/hero_large_2x/public/2021-04/myanmar-201703-emillstein-2243-2048px.webp?h=37d0f765&itok=EbXiu3Rj' className='mt-2 w-[400px] lg:w-[700px] ' />

                </div>
                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>The Context  </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                    Non-Governmental Organizations (NGOs) in Myanmar play a crucial role in addressing a myriad of social, economic, and humanitarian challenges within the country, particularly in the context of its complex political landscape and ongoing socio-economic transition.

                    NGOs in Myanmar engage in diverse activities, including humanitarian assistance, community development, healthcare provision, education, and human rights advocacy. Organizations such as the International Rescue Committee (IRC) and Médecins Sans Frontières (MSF) provide vital humanitarian aid, including food, shelter, and healthcare services, to internally displaced persons (IDPs) and vulnerable communities affected by conflict and natural disasters.
                    <br/> <br/>
                    Moreover, NGOs in Myanmar are actively involved in promoting democratic governance, human rights, and peace-building initiatives. Civil society organizations like the Human Rights Watch (HRW) and Fortify Rights work to document human rights violations, advocate for justice and accountability, and support democratic reforms and peace processes.

                    Additionally, environmental NGOs such as WWF Myanmar and Green Lotus focus on biodiversity conservation, sustainable natural resource management, and climate change mitigation, working to preserve Myanmar's rich ecological heritage and promote environmental sustainability.

                    Despite facing challenges such as limited funding, regulatory restrictions, and security concerns, NGOs in Myanmar continue to play a vital role in advancing social progress, fostering community resilience, and advocating for positive change towards a more democratic, peaceful, and sustainable future for the country.
                </div>

            </div>
            <div>
                <Footer />
            </div>

        </>

    )
}
