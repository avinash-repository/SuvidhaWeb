import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaLinkedin } from "react-icons/fa";
import {Link} from "react-router-dom";
export default function Members() {
  return (
    <>

      <div className=''>
        <Navbar />
      </div>
      <div className='m-2'>
        <div className='flex justify-center mt-5 font-bold text-3xl '>
          <h2 className='flex '>Our Team Members</h2>
        </div>
        <div className='flex justify-center items-center flex-col m-2'>
          <div className='flex flex-col lg:flex-row '>
            <div className='transition duration-700 ease-in-out border-4 border-sky-800  felx flex-col w-[300px] lg:w-[400px] h-[600px] lg:h-[600px] justify-center items-center p-5 m-3 hover:text-white hover:bg-sky-800'>
              <div className='flex items-center justify-center'>
                <img src='https://www.suvidhafoundationedutech.org/img/team/Shobha_Motghare.jpeg' alt='pic' className='rounded-[80%]  w-[150px] ' />
              </div>
              <div className='flex items-center justify-center'>
                <h3 className='text-2xl font-black uppercase'>Shobha Motghare
                </h3>
              </div>
              <div className='flex items-center justify-center'>
                <h3 className='font-light '>Secretary</h3>
              </div>
              <div className='flex items-center justify-center p-5 '>
                <p className=''>
                  Sobha is our co-founder and has developed search strategies for a avariety of clients from international brands to medium brands . She has lot of experience in various fields. In addition to that she is a philontropist .
                </p>
              </div>
              <div className='flex items-center justify-center text-center'>
              <Link to="https://in.linkedin.com/">  <FaLinkedin className='text-4xl'/> </Link>
              </div>

            </div>
            <div className='transition duration-700 ease-in-out border-4 border-sky-800  felx flex-col w-[300px] lg:w-[400px] h-[600px] lg:h-[600px] justify-center items-center p-5 m-3 hover:text-white hover:bg-sky-800'>
              <div className='flex items-center justify-center'>
                <img src='https://www.suvidhafoundationedutech.org/img/team/Payal_Badhe.jpg' alt='pic' className='rounded-[80%]  w-[150px] ' />
              </div>
              <div className='flex items-center justify-center'>
                <h3 className='text-2xl font-black uppercase'>Payal Badhe
                </h3>
              </div>
              <div className='flex items-center justify-center'>
                <h3 className='font-light '>President</h3>
              </div>
              <div className='flex items-center justify-center p-5 '>
                <p className=''>


                  Payal, our esteemed co-founder, brings a wealth of experience in crafting dynamic search strategies tailored to a diverse range of clientele, spanning from renowned international brands to thriving medium-sized enterprises.                          </p>
              </div>
              <div className='flex items-center justify-center'>
              <Link to="https://in.linkedin.com/">  <FaLinkedin className='text-4xl'/> </Link>
              </div>

            </div>


            <div className= 'transition duration-700 ease-in-out border-4 border-sky-800  felx flex-col w-[300px] lg:w-[400px] h-[600px] lg:h-[600px] justify-center items-center p-5 m-3 hover:text-white hover:bg-sky-800'>
              <div className='flex items-center justify-center'>
                <img src='https://www.suvidhafoundationedutech.org/img/Bharti_Shendre.jpg' alt='pic' className='rounded-[80%]  w-[150px] ' />
              </div>
              <div className='flex items-center justify-center'>
                <h3 className='text-2xl font-black uppercase'>Bharti Shendre
                </h3>
              </div>
              <div className='flex items-center justify-center'>
                <h3 className='font-light '>Treasurer</h3>
              </div>
              <div className='flex items-center justify-center p-5 '>
                <p className=''>


                Bharti, our treasurer, adeptly manages finances with precision and diligence, ensuring fiscal responsibility and sustainability. With a keen eye for detail, Bharti navigates financial landscapes adeptly.                         </p>
              </div>

              <div className='flex items-center justify-center font-[30px]'>
              <Link to="https://in.linkedin.com/">  <FaLinkedin className='text-4xl'/> </Link>
              </div>

            </div>
          </div>



          <div className='flex flex-col lg:flex-row'>


          <div className='transition duration-700 ease-in-out border-4 border-sky-800  flex flex-col justify-center w-[300px] lg:w-[400px] h-[600px] lg:h-[600px] items-center p-5 m-3 hover:text-white hover:bg-sky-800'>
              <div className='flex items-center justify-center'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgVdK33FE7DEugIjCG-r2sl1KgawbEYGpJoQ&usqp=CAU' alt='pic' className='rounded-[80%]  w-[150px]  ' />
              </div>
              <div className='flex items-center justify-center'>
                <h3 className='text-2xl font-black'>Sarah Habel</h3>
              </div>
              <div className='flex items-center justify-center'>
                <h3 className='font-light '>Advisor</h3>
              </div>
              <div className='flex items-center justify-center p-5 '>
                <p className=''>
                  Sarah  is our advisor and has developed search strategies for a avariety of clients from international organizations to medium brands .
                </p>
              </div>
              <div>
              <Link to="https://in.linkedin.com/">  <FaLinkedin className='text-4xl'/> </Link>
              </div>
              <div>

              </div>

            </div>


            
            <div className='transition duration-700 ease-in-out border-4 border-sky-800  flex flex-col justify-center w-[300px] lg:w-[400px] h-[600px] lg:h-[600px] items-center p-5 m-3 hover:text-white hover:bg-sky-800'>
              <div className='flex items-center justify-center'>
                <img src='https://www.suvidhafoundationedutech.org/img/Nilima_Kalambe.jpg' alt='pic' className='rounded-[80%]  w-[150px]  ' />
              </div>
              <div className='flex items-center justify-center'>
                <h3 className='text-2xl font-black'>Nilima Kalambe</h3>
              </div>
              <div className='flex items-center justify-center'>
                <h3 className='font-light '>Advisor</h3>
              </div>
              <div className='flex items-center justify-center p-5 '>
                <p className=''>
                  Nilima is our advisor and has developed search strategies for a avariety of clients from international brands to medium brands .
                </p>
              </div>
              <div>
              <Link to="https://in.linkedin.com/">  <FaLinkedin className='text-4xl'/> </Link>
              </div>

            </div>

          

        

          </div>
          
        </div>
      </div>
      <div>
        <Footer />
      </div>

    </>
  )
}
