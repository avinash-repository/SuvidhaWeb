import React from 'react'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Carousal from '../components/Carousal';
import Banner from '../components/Banner';
import Testimonials from '../components/Testimonials';
import ReadMore  from '../components/ReadMore';
import Collaborative from '../components/Collaborative';
import Partner from '../components/Partner';
import Internship from '../components/Internship';

export default function Home() {
  return (
    <div>
      <div className='mb-1 relative z-10'>
      <Navbar/>
      </div>
      <div className='mt-[50px]'>
      <Carousal/>
      </div>
      <div className=''>
      <Banner/>
      </div>
      <div className='mt-1'>
        <Partner/>
      </div>

      <div className='relative bottom-[10rem] lg:bottom-[14rem]'>
        <ReadMore/>
      </div>
      <div>
        <Internship/>
      </div>
      <div className='mt-1 relative bottom-[10rem]'>
        <Collaborative/>
      </div>
      <div className='mt-10'>
      <Testimonials/>
      </div>
    
      <div className='mt-4'>
      <Footer/>
      </div>
    

      

    </div>
  )   
}
