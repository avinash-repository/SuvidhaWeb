import React from 'react'
import Navbar from '../components/Navbar'
import { IoIosArrowDropright } from "react-icons/io";
import Footer from '../components/Footer';
export default function Germany() {
    return (
        <>


            <div>
                <Navbar />
            </div>
            <div className='mt-3 flex flex-col '>
                <div className='flex flex-row font-bold text-lg  lg:text-2xl lg:ml-[370px]'>
                    <span className='uppercase ml-2 mr-3'>where we work </span>
                    <span className='mt-[5px] lg:mt-[3px]'>  <IoIosArrowDropright /> </span>
                    <span className='uppercase ml-3'>Germany </span>
                </div>
                <div >
                    <h1 className='font-bold text-3xl lg:text-4xl ml-2 lg:ml-[380px]'>Germany</h1>
                </div>
                <div className=' flex  items-center justify-center' >
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ZWzgfOrbdfOVPdoa4rqMsSdIRbW1ZZbxjQ&s' className='mt-2 w-[400px] lg:w-[700px] ' />

                </div>
                <div>
                    <h1 className='font-bold text-2xl lg:text-3xl ml-2 mt-3 lg:ml-[380px]'>The Context  </h1>
                </div>
                <div className='flex  items-center justify-center m-2 text-lg lg:ml-[380px]  lg:mr-[200px] '>
                    Non-Governmental Organizations (NGOs) in Germany are instrumental in addressing a wide array of social, environmental, and humanitarian issues both domestically and internationally. With a strong civil society tradition, Germany boasts a vibrant NGO sector that actively engages in advocacy, service provision, and community empowerment.

                    One significant focus of NGOs in Germany is refugee and migrant assistance. Organizations such as Caritas, Diakonie, and Pro Asyl provide essential support to refugees and asylum seekers, offering accommodation, legal aid, language classes, and integration programs. These NGOs play a crucial role in fostering social cohesion and facilitating the integration of newcomers into German society.
                        <br/>< br/>
                    Environmental NGOs also play a prominent role in Germany, given the country's commitment to sustainability and green initiatives. Organizations like Greenpeace Germany, BUND (Friends of the Earth Germany), and WWF Germany work tirelessly to raise awareness about environmental issues, advocate for policy change, and promote conservation efforts.

                    Moreover, NGOs in Germany are active in social justice, human rights, and development work both at home and abroad. From combating poverty and inequality to promoting gender equality and LGBTQ+ rights, these organizations contribute to creating a more equitable and inclusive society.

                    Overall, NGOs in Germany serve as catalysts for positive change, leveraging their expertise, resources, and grassroots connections to address pressing social and environmental challenges and advocate for a more just and sustainable world.
                </div>

            </div>
            <div>
                <Footer />
            </div>

        </>

    )
}
