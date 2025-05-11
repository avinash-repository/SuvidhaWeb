import React from 'react'
import Navbar from '../components/Navbar'
import { IoIosArrowDropright } from "react-icons/io";
import Footer from '../components/Footer';
export default function India() {
    return (
        <>


            <div>
                <Navbar />
            </div>
            <div className='mt-3 flex flex-col '>
                <div className='flex flex-row font-bold text-lg  lg:text-2xl lg:ml-[370px]'>
                    <span className='uppercase ml-2 mr-3'>where we work </span>
                    <span className='mt-[5px] lg:mt-[3px]'>  <IoIosArrowDropright /> </span>
                    <span className='uppercase ml-3'>India </span>
                </div>
                <div >
                    <h1 className='font-bold text-3xl lg:text-4xl ml-2 lg:ml-[380px]'>India </h1>
                </div>
                <div className=' flex  items-center justify-center' >
                    <img src='https://www.mercycorps.org/sites/default/files/styles/hero_large_2x/public/2020-01/pakistan-200811-msamper-0142.webp?h=3cb7932d&itok=v-jk6Opf' className='mt-2 w-[400px] lg:w-[700px] ' />

                </div>
                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>The Context  </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                    Non-Governmental Organizations (NGOs) play a vital role in India, addressing diverse social, economic, and environmental challenges across the nation. With a vast and diverse population, India grapples with issues ranging from poverty, education, healthcare, to environmental degradation and human rights violations. NGOs in India operate at various scales, from grassroots community organizations to internationally recognized entities, each contributing to the country's development in its unique way.

                    One prominent area where NGOs excel is in providing education and healthcare services to marginalized communities. Organizations like Teach For India and Pratham focus on improving educational outcomes and access to quality education for children from underprivileged backgrounds. Similarly, NGOs like SEWA and CRY work towards the welfare of women and children, advocating for their rights and providing essential services.
                        <br/> <br/>
                    Moreover, NGOs also address environmental concerns through initiatives such as afforestation drives, waste management programs, and advocating for sustainable development practices. Organizations like Greenpeace India and TERI (The Energy and Resources Institute) actively engage in environmental conservation efforts and policy advocacy.

                    Additionally, NGOs in India often play a crucial role in disaster relief and rehabilitation efforts, providing humanitarian aid during natural calamities like floods, earthquakes, and cyclones.

                    Overall, NGOs in India serve as catalysts for social change, leveraging innovation, collaboration, and community participation to address multifaceted challenges and contribute to the nation's progress and development.
                </div>

            </div>
            <div>
                <Footer />
            </div>

        </>

    )
}
