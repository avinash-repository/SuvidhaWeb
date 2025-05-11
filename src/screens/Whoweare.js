import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Whoweare() {

  const [selectTab, setselectTab] = useState('mission');


  return (
    <>
      <div className='z-10 relative'>
        <Navbar />
      </div>

      <div>
        <img src='https://t3.ftcdn.net/jpg/05/10/20/44/360_F_510204435_sEBr6TtetlxHik1EcZX1PaniJMRBlt6X.jpg' alt='img' className=' w-full lg:h-[600px]' />
      </div>
      <div className='absolute  bg-black text-white top-[200px] left-[190px]  w-[100px] h-[75px]] lg:top-[370px] lg:left-[800px] lg:w-[300px] lg:h-[100px] '>
        <div className='relative flex  justify-center   align-middle lg:top-[30px]'><h1 className='text-sm lg:text-4xl font-bold'>WHO WE ARE</h1></div>

      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div>
          <div className='ml-5 p-5'>
            Our unwavering belief in the power of people united has brought about real change, stretching across every corner of the world. Thanks to years of support from committed supporters like you, the death penalty is abolished in most countries, dangerous spyware used to target activists has been uncovered and seemingly untouchable tyrants have been made to answer for their crime
          </div>

          <div className='ml-5 p-5'>
            <h1 className='text-3xl font-bold'> What is Suvidha Foundation ?</h1>
          </div>

          <div className='ml-5 p-5'>
            Suvidha Foundation is a global movement of more than 10 million people who are committed to creating a future where human rights are enjoyed by everyone. United by our shared humanity, we know that the power to create positive change is within all of us.
            <br /> <br />
            We are funded by members and people like you. We are independent of any political ideology, economic interest or religion. We stand with victims of human rights violations whoever they are, wherever they are.
            <br /> <br />
            No government is beyond scrutiny. We uncover the truth. We hold human rights violators to account.
          </div>
        </div>
        <div className='pl-10 pt-5 pb-5'>   
          <iframe
          className='w-[300px] h-[200px] lg:w-[560px] lg:h-[315px] '
          width="560"
          height="315"
          src="https://www.youtube.com/embed/X4QYV5GTz7c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        </div>
      </div>
      <br />
      <br />
      <br />


      {/*      Our Mission OUr strategy  */}
      <div>
        <div className='flex flex-row justify-around items-center text-md lg:text-4xl font-bold '>
          <div className={`p-3 border-b-2  border-gray-400 ${selectTab === 'mission' ? 'border-b-4 border-black' : ''}`}>
            <button onClick={() => setselectTab('mission')}>Our Mission</button>
          </div>

          <div className={`p-3 border-b-2  border-gray-400 ${selectTab === 'vision' ? 'border-b-4 border-black' : ''}`}>
            <button

              onClick={() => setselectTab('vision')}


            >Our Vision</button>
          </div>

          <div className={`p-3 border-b-2  border-gray-400 ${selectTab === 'run' ? 'border-b-4 border-black' : ''}`}>
            <button onClick={() => setselectTab('run')}>How We're Run</button>
          </div>


        </div>

      </div>

      {/*       Content of Our mission our vision
 */}
      <div>
        {selectTab === 'mission' &&
          <div className='m-5 p-5 flex flex-col justify-center items-center'>
            <div className='font-bold text-3xl'>
              <h1>Our Mission</h1>
            </div>

            <div className='text-md p-4'>
              <p> To Inspire Students, help them Innovate and let them Integrate to build the next generation humankind.</p>
              <br />
              <p> To Run Food Donation And Awareness Campaign In Rural Region.</p>
            </div>

          </div>}


        {selectTab === 'vision' &&
          <div className='m-5 p-5 flex flex-col justify-center items-center'>
            <div className='font-bold text-3xl'>
              <h1>Our Vision</h1>
            </div>

            <div className='text-md p-4'>
              <p>To build Next Generation Entrepreneur, by providing them a Skill-Based Education.</p>
              <br />
              <p> To Provide Internship, Training And Workshops and Quality Education All Over The World .</p>
            </div>

          </div>}



        {selectTab === 'run' &&
          <div className='m-5 p-5 flex flex-col justify-center items-center'>
            <div className='font-bold text-3xl'>
              <h1>
                How are we governed?</h1>
            </div>

            <div className='text-md p-4'>
              <p>


                We are a democratic organization which means that we are governed by individual members like you. Every year, representatives from over 60 countries attend a Global Assembly to vote on decisions that guide the Organization movement.
              </p>
              <br />
              <p>


                As an Suvidha FOundation member, you can participate in local conferences, events and elections organized by your country office.
              </p>


            </div>
            <div className='font-bold text-3xl'>
              <h1>
                How are we Financed?</h1>
            </div>

            <div className='text-md p-4'>
              <p>


                Our deeply held core principles of impartiality, independence and accuracy underpin all we do. This is built on an understanding that all human rights must be respected together if we are to achieve a world free from fear and want.
              </p>
              <br />
              <p>


                We are independent of any institution, ideology, economic interest, and religion. Our only interest is in achieving human rights for all.
              </p>


            </div>



          </div>}


      </div>
      <br />
      <br />
      {/* 
ABout Us Content  */}
      <div className='m-4 grid grid-cols-1 lg:grid-cols-2 text-3xl'>
        <div className='flex flex-col  '>
          <div className='font-bold  m-2 p-5 '>
            <h1>About Us</h1>
          </div>
          <div className='m-2 p-5 text-base '>
            Suvidha Mahila Mandal is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future. The organization has provisions of student internships, student mentorship and the scope to volunteer. Through these programmes, the organization aims to achieve the vision of imparting innovative education that stays with the students forever and equip them for the unforeseen future.
          </div>
        </div>
        <div className='flex flex-col  bg-gray-200  items-center '>
          <div className='bg-black w-full  '>
            text
          </div>
          <div className='flex text-center text-xl font-bold p-4 lg:pt-4'>
            Be part of a global movement for human rights
          </div>
          <div className='flex text-center text-3xl font-bold p-4 pt-4'>
            BECOME A MEMBER TODAY
          </div>
          <div className='text-3xl font-bold  p-[10px] lg:pt-[20px] pb-[20px]'>
            <button className='bg-yellow-400 text-black px-4 py-2 rounded-lg ml-4 hover:bg-yellow-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 '>
              Join Us
            </button>
          </div>



          <div className='flex mt-[30px] bg-black w-full  font-base '>
            Hello
          </div>

        </div>


      </div>




      <div>
        <Footer />
      </div>
    </>
  )
}
