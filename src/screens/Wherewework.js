import React, { useState, useEffect, useRef } from 'react';
import Navbar from "../components/Navbar";
import world from "../images/map1.png";
import Footer from '../components/Footer';
import { useLocation, Link } from 'react-router-dom';

const WorldMap = () => {


  const location = useLocation();
  const sectionRef = useRef(null);

  useEffect(() => {
    if (location.state && location.state.section) {
      const section = location.state.section;
      const ref = sectionRef.current[section];
      if (ref) {
        ref.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>

      <div className=''>
        <Navbar />
        <div className='m-5 justify-center'>
          <div className=''>
            <img src={world} useMap="#image_map" alt="World Map" />
            <map name="image_map">
              <area target="" alt="India" title="India" href="/where-we-work/india" coords="827,245,915,317" shape="rect" />
              <area target="" alt="Bangladesh" title="Bangladesh" href="/where-we-work/bangladesh" coords="917,244,929,248,935,264,921,260" shape="poly" />
              <area target="" alt="Myanmar" title="Myanmar" href="/where-we-work/myanmar" coords="946,238,964,267,958,296,932,273" shape="poly" />
              <area target="" alt="malaysia" title="malaysia" href="/where-we-work/malaysia" coords="958,333,999,390" shape="rect" />
              <area target="" alt="Australia" title="Australia" href="/where-we-work/australia" coords="1017,409,1186,541" shape="rect" />
              <area target="" alt="Russia" title="Russia" href="/where-we-work/russia" coords="673,79,750,60,859,30,991,48,1126,63,1112,118,1058,155,999,117,918,123,871,133,816,111,779,128,721,159,683,121,665,94" shape="poly" />
              <area target="" alt="Japan" title="Japan" href="/where-we-work/japan" coords="1078,161,1132,238" shape="rect" />
              <area target="" alt="USA" title="USA" href="/where-we-work/usa" coords="77,129,327,251" shape="rect" />
              <area target="" alt="UK" title="UK" href="/where-we-work/uk" coords="545,106,573,135" shape="rect" />
              <area target="" alt="Germany" title="Germany" href="/where-we-work/germany" coords="549,139,588,171" shape="rect" />
              <area target="" alt="Brazil" title="Brazil" href="/where-we-work/brazil" coords="332,349,408,387,390,446,351,508,332,496,336,474,319,443,291,411,269,408,251,391,275,355,300,339" shape="poly" />
              <area target="" alt="Chile" title="Chile" href="/where-we-work/chile" coords="273,440,259,459,264,514,272,588,303,604" shape="poly" />
              <area target="" alt="South Africa" title="South Africa" href="/where-we-work/south-africa" coords="618,492,643,479,653,477,678,460,688,470,689,494,667,515,634,520" shape="poly" />
            </map>
          </div>
        </div>


      </div>

      <div className='m-5 flex flex-col justify-center items-center text-xl font-bold'>
        <div className='p-5 lg:w-[40rem]'> Our 5,900+ team members live and work in over 40+ countries around the world. 86% of them are from the countries where they work.</div>
        <div className='p-5 lg:w-[40rem]' >
          The work we do in each country is informed by our partners there: local community members, government officials, and other changemakers who are invested in transforming their communities for good.
        </div>
        <div className='p-5 lg:w-[40rem]' >
          Note: This list is regularly updated, and does not represent all of our country operations. We add pages as we ramp up programs and shift from emergency response to longer-term development efforts
        </div>
      </div>


      <div className='flex ml-10  flex-col lg:justify-center lg:ml-[28rem]  font-bold m-4'>
        <div className='mt-5 text-2xl lg:text-7xl' ref={(e) => (sectionRef.current = { ...sectionRef.current, africa: e })}>Africa</div>
        <ul className='  lg:text-[1.5rem]'>


          <Link to="/where-we-work/south-africa">


            <li>
              South Africa
            </li>
          </Link>
        </ul>

        <div className='mt-5  text-2xl lg:text-7xl' ref={(e) => (sectionRef.current = { ...sectionRef.current, europe: e })}>Europe</div>
        <ul className='lg:text-[1.5rem]'>

          <Link to="/where-we-work/uk">
               <li>
              UK
            </li>
          </Link>
          <Link to="/where-we-work/germany">
               <li>
              Germany
            </li>
          </Link>
          <Link to="/where-we-work/russia">
               <li>
              Russia
            </li>
          </Link>
        </ul>


        <div className='mt-5 text-2xl lg:text-7xl' ref={(e) => (sectionRef.current = { ...sectionRef.current, asia: e })}>Asia</div>
        <ul className='lg:text-[1.5rem]'>

          <Link to="/where-we-work/india">
            <li>
              India
            </li>
          </Link>
          <Link to="/where-we-work/myanmar">
            <li>
              Myanmar
            </li>
          </Link>
          <Link to="/where-we-work/bangladesh">
            <li>
              Bangladesh
            </li>
          </Link>
          <Link to="/where-we-work/japan">
            <li>
              Japan
            </li>
          </Link>
          <Link to="/where-we-work/malaysia">
            <li>
              Malaysia
            </li>
          </Link>
          <Link to="/where-we-work/indonesia">
            <li>
              Indonesia
            </li>
          </Link>
        </ul>


        <div className='mt-5 text-2xl lg:text-7xl' ref={(e) => (sectionRef.current = { ...sectionRef.current, america: e })}>America</div>
        <ul className='lg:text-[1.5rem]'>

        <Link to="/where-we-work/usa">
            <li>
              USA
            </li>
          </Link>
          <Link to="/where-we-work/brazil">
            <li>
              Brazil
            </li>
          </Link>
          <Link to="/where-we-work/chile">
            <li>
              Chile
            </li>
          </Link>
        </ul>

        <div className='mt-5 text-2xl lg:text-7xl' ref={(e) => (sectionRef.current = { ...sectionRef.current, australia: e })}>Australia
        </div>
        <ul className='lg:text-[1.5rem]'>
        <Link to="/where-we-work/australia">
            <li>
              Australia
            </li>
          </Link>


        </ul>
      </div>

      <Footer />
    </>

  );
};

export default WorldMap;
