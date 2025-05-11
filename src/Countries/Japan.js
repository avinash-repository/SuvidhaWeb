import React from 'react'
import Navbar from '../components/Navbar'
import { IoIosArrowDropright } from "react-icons/io";
import Footer from '../components/Footer';
export default function Japan() {
    return (
        <>


            <div>
                <Navbar />
            </div>
            <div className='mt-3 flex flex-col '>
                <div className='flex flex-row font-bold text-lg  lg:text-2xl lg:ml-[370px]'>
                    <span className='uppercase ml-2 mr-3'>where we work </span>
                    <span className='mt-[5px] lg:mt-[3px]'>  <IoIosArrowDropright /> </span>
                    <span className='uppercase ml-3'>Japan </span>
                </div>
                <div >
                    <h1 className='font-bold text-3xl lg:text-4xl ml-2 lg:ml-[380px]'>Japan </h1>
                </div>
                <div className=' flex  items-center justify-center' >
                    <img src='https://www.mercycorps.org/sites/default/files/styles/hero_large_2x/public/2019-12/kyrgyzstan-201409-tharris-0421-2048px%20Wide%20-%20Presentations_Documents.webp?h=941aa32c&itok=d0Sh1tKB' className='mt-2 w-[400px] lg:w-[700px] ' />

                </div>
                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>The Context  </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                    Non-Governmental Organizations (NGOs) in Japan play a significant role in addressing various societal issues and promoting social welfare, both domestically and internationally. Despite Japan's reputation for a strong government and corporate presence, NGOs complement these institutions by filling gaps in service provision, advocating for marginalized groups, and fostering civic engagement.

                    In Japan, NGOs are involved in a diverse range of activities, including disaster relief, environmental conservation, humanitarian aid, and community development. Organizations like Peace Boat and the Japan Platform are actively engaged in disaster response efforts, providing emergency assistance, reconstruction support, and long-term recovery initiatives in the aftermath of natural disasters.
                    <br/> <br/>
                    Moreover, environmental NGOs such as the Japan Environmental Action Network (JEAN) and the World Wide Fund for Nature (WWF) Japan work to raise awareness about environmental issues, promote sustainable practices, and advocate for policy changes to protect Japan's natural resources and biodiversity.

                    Additionally, NGOs in Japan are involved in social welfare initiatives, including supporting marginalized communities, promoting human rights, and providing healthcare and education services. Organizations like the Japan Association for Refugees and the Japan NGO Center for International Cooperation (JANIC) work to address issues such as poverty, discrimination, and social exclusion.

                    Overall, NGOs in Japan contribute to creating a more inclusive, equitable, and sustainable society by mobilizing resources, raising awareness, and advocating for positive change on various fronts, both within Japan and globally.
                </div>

            </div>
            <div>
                <Footer />
            </div>

        </>

    )
}
