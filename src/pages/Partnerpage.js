import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

export default function Partnerpage() {
  return (
    <>
    <div>
          <Navbar/>

    </div>
  
    <div className='flex justify-center items-center flex-col'>
      <div className='flex  lg:text-center  m-[2rem] lg:m-[8rem]  text-xl '>
      Joining with Suvidha Foundation links you with a bold cause and brand — we were named  “Brand of the Year” and “Most Loved Brand” among international aid nonprofits.

We will work with you to create an authentic campaign that motivates customers to act — driving loyalty, sales and other business objectives. There are many options to design a campaign that is right for your company, including donating a percent of sales, giving your customers the opportunity to add a donation at checkout, or inviting your customers and employees to join in a fundraiser for Mercy Corps.

We have everything you need, including sample messaging, social shareables and other customizable templates, to help you communicate easily and effectively about your partnership with Mercy Corps with your consumers.

Get in touch with us today to launch your cause marketing campaign.
      </div>
        <div className='flex text-center uppercase mt-[3rem] text-3xl font-bold '>
            How It Works 
        </div>
        <div className=' grid grid=rows-3 lg:grid-cols-3 mt-[5rem]  gap-5 text-xl m-[2rem]  text-white font-semibold'>
                <div className='bg-slate-800 p-[3rem]'>
                 1. Fill out the Partnership form .
                </div>
                <div className='bg-slate-800 p-[3rem] '>
                    2. Our Partnership Team will contact you shortly .

                </div>
                <div className='bg-slate-800 p-[3rem] '>
                  3.  During Team call if your company fullfill our Partnership Criteria upon inspection of your company records then you will get a call  .
                </div>

        </div>


    </div>
    <div className='flex flex-col lg:flex-row  justify-center  p-[2rem] m-[1rem] bg-sky-100  lg:p-[5rem] lg:m-[8rem]'>
        <div className='flex font-bold text-3xl lg:m-[2rem] items-center '> 
                Interested in exploring a partnership ?
        </div>

        <div className='items-center mt-[1.5rem] ml-[2rem] text-2xl'>

          <Link to='/partner/contact-us'>

         
        <button className="relative p-2 bg-purple-500 text-white px-4 py-2 rounded-lg ml-4 hover:bg-purple-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 overflow-hidden">
                <span className="absolute p-5 top-0 left-0 w-full h-full border-gradient rounded-lg animate-border"></span>
                Contact Us
              </button>
              </Link>
          </div>
    </div>


<div>
  <Footer/>
</div>
    </>
  )
}
