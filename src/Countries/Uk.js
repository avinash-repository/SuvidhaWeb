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
                    <span className='uppercase ml-3'>UK </span>
                </div>
                <div >
                    <h1 className='font-bold text-3xl lg:text-4xl ml-2 lg:ml-[380px]'>UK </h1>
                </div>
                <div className=' flex  items-center justify-center' >
                    <img src='https://www.mercycorps.org/sites/default/files/styles/hero_large_2x/public/2022-03/romania-20220310-cnelson-066-2048x1365px.webp?h=03cd56cc&itok=-LQKmCZr' className='mt-2 w-[400px] lg:w-[700px] ' />

                </div>
                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>The Context  </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                    Non-Governmental Organizations (NGOs) in the United Kingdom (UK) play a pivotal role in addressing a wide range of societal issues, from poverty and homelessness to environmental conservation and human rights advocacy. These organizations operate with a focus on promoting social justice, equality, and sustainable development across the UK and globally.

                    One significant area of NGO activity in the UK is supporting vulnerable populations, including the homeless, refugees, and those experiencing poverty. Charities like Shelter, Crisis, and The Trussell Trust work tirelessly to provide shelter, food, and support services to individuals and families in need, aiming to alleviate homelessness and poverty.
                    <br/><br/>
                Furthermore, environmental NGOs such as Friends of the Earth and WWF UK advocate for sustainable policies, conservation efforts, and climate action. They engage in public awareness campaigns, policy advocacy, and community initiatives to address environmental challenges and promote a more sustainable way of living.

                    Additionally, NGOs in the UK are active in human rights advocacy, promoting equality and justice for marginalized groups, including minorities, women, and LGBTQ+ individuals. Organizations like Amnesty International and Human Rights Watch UK work to raise awareness of human rights violations, advocate for policy change, and provide support to victims of injustice.

                    In essence, NGOs in the UK serve as vital actors in shaping social, environmental, and human rights agendas, driving positive change and fostering a more inclusive and equitable society.
                </div>

            </div>
            <div>
                <Footer />
            </div>

        </>

    )
}
