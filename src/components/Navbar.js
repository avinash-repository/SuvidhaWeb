import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../images/suvidha doundation.jpg";
import "./Navbar.css";
import { Link } from "react-router-dom";



const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWhoWeAreMenuOpen, setIsWhoWeAreMenuOpen] = useState(false);
  const [isWhatWeDoMenuOpen, setIsWhatWeDoMenuOpen] = useState(false);
  const [isWhereWeAreMenuOpen, setIsWhereWeAreMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-700 opacity-90 py-4 font-bold flex items-center justify-between px-8 relative">
      {/* Logo on the left */}
      <div className='flex flex-row'>
        <Link to="/">
          <img src={logo} alt="Logo" className="h-[6rem] lg:h-[8rem] " />
        </Link>
        <div className='hidden lg:flex flex-col ml-3 justify-center items-center text-4xl'>
          <Link to="/">
            <div className="text-purple-300 font-bold ">Suvidha</div>
            <div className="text-purple-300 font-bold ">Foundation</div>
          </Link>
        </div>





      </div>

      {/* Center links */}
      <div className="hidden  lg:flex flex-grow justify-evenly">
        <div className="group relative py-3">
          <Link to='/'>
            <span className="mx-4 cursor-pointer hover:text-gray-400 text-white">Home</span>
          </Link>

        </div>

        <div
          className="group relative py-3"
          onMouseEnter={() => setIsWhoWeAreMenuOpen(true)}
          onMouseLeave={() => setIsWhoWeAreMenuOpen(false)}
        >
        <Link to='/who-we-are'>  <span className="mx-4 cursor-pointer hover:text-gray-400 text-white">Who We Are</span> </Link>
          {isWhoWeAreMenuOpen && (
            <div className="z-10 absolute bg-white shadow-lg py-2 rounded-lg mt-2 w-36 transition ease-in-out duration-800">
           <Link to='/members'>  <span className="block px-4 py-2 hover:bg-gray-800 hover:text-white">Our Members</span> </Link> 
           <Link to='/who-we-are'>  <span className="block px-4 py-2 hover:bg-gray-800 hover:text-white">About Us</span> </Link> 
            </div>
          )}
        </div>
        <div
          className="z-10 group relative py-3"
          onMouseEnter={() => setIsWhatWeDoMenuOpen(true)}
          onMouseLeave={() => setIsWhatWeDoMenuOpen(false)}
        >
          <Link to='/what-we-do'>
          <span className="z-10 mx-4 cursor-pointer hover:text-gray-400 text-white">What We Do</span>
          </Link>
          {isWhatWeDoMenuOpen && (
            <div className="z-100 absolute bg-white shadow-lg py-2 rounded-lg mt-2 w-36">
             <Link to='/what-we-do/tree-plantation'> <span className="block px-4 py-1 hover:bg-gray-800 hover:text-white">Tree Plantation</span></Link>
             <Link to='/what-we-do/fundraising'>  <span className="block px-4 py-1 hover:bg-gray-800 hover:text-white">Fundraising Events</span></Link>
             <Link to='/what-we-do/clothes'><span className="block px-4 py-1 hover:bg-gray-800 hover:text-white">Clothes Distribution</span></Link> 
             <Link to='/what-we-do/food'> <span className="block px-4 py-1 hover:bg-gray-800 hover:text-white">Food Donations</span></Link>
             <Link to='/what-we-do/workshop'>  <span className="block px-4 py-1 hover:bg-gray-800 hover:text-white">Free Workshops </span></Link>
            </div>
          )}
        </div>

        <div
          className="group relative py-3"
          onMouseEnter={() => setIsWhereWeAreMenuOpen(true)}
          onMouseLeave={() => setIsWhereWeAreMenuOpen(false)}
        >
          <Link to='/where-we-work'>
            <span className="z-10 mx-4 cursor-pointer hover:text-gray-400 text-white ">Where We Work</span>

          </Link>
          {isWhereWeAreMenuOpen && (
            <div className="z-10 absolute bg-white shadow-lg py-2 rounded-lg mt-2 w-36">
              <Link to='/where-we-work' state={{ section: 'asia' }}> <span className="block px-4 py-1 hover:bg-gray-800 hover:text-white">Asia</span></Link>
              <Link to='/where-we-work' state={{ section: 'africa' }}>    <span className="block px-4 py-1 hover:bg-gray-800 hover:text-white">Africa</span>  </Link>
              <Link to='/where-we-work' state={{ section: 'america' }}>    <span className="block px-4 py-1 hover:bg-gray-800 hover:text-white">America</span>  </Link>
              <Link to='/where-we-work' state={{ section: 'australia' }}>    <span className="block px-4 py-1 hover:bg-gray-800 hover:text-white">Australia</span>  </Link>
              <Link to='/where-we-work' state={{ section: 'europe' }}>    <span className="block px-4 py-1 hover:bg-gray-800 hover:text-white">Europe</span>  </Link>
            </div>
          )}
        </div>
      </div>


      <div className="hidden lg:flex mt-4">
      <Link to='/internship'>
        <button className="relative p-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 overflow-hidden">
          <span className="absolute p-5 top-0 left-0 w-full h-full border-gradient rounded-lg animate-border"></span>
          Apply for Internship
        </button>
        </Link>
        <Link to='/donate'>
        <button className="relative p-2 bg-red-500 text-white px-4 py-2 rounded-lg ml-4 hover:bg-red-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 overflow-hidden">
          <span className="absolute p-5 top-0 left-0 w-full h-full border-gradient rounded-lg animate-border"></span>
          Donate
        </button>
        </Link>
      </div>



      {/* Mobile toggle button */}
      <div className="lg:hidden">
        {!isMobileMenuOpen ? (
          <button onClick={toggleMobileMenu} className="text-white text-xl focus:outline-none">
            <FaBars />
          </button>
        ) : (
          <button onClick={toggleMobileMenu} className="text-white text-xl focus:outline-none">
            <FaTimes />
          </button>
        )}


        {isMobileMenuOpen && (
          <div style={{ zIndex: 10 }} className="z-50 lg:hidden absolute top-full right-0 left-0 bg-white py-4 shadow-lg transition ease-in-out duration-800">
            <div className="flex flex-col items-center space-y-2 text-black">
              <Link to="/">   <span className="hover:text-gray-400 ">Home</span></Link>
              <div className="group relative" onClick={() => setIsWhoWeAreMenuOpen(!isWhoWeAreMenuOpen)}>
                <Link to="/who-we-are"> <span className="cursor-pointer hover:text-gray-400 ">Who We Are</span></Link>
              </div>
              <div className="group relative" onClick={() => setIsWhatWeDoMenuOpen(!isWhatWeDoMenuOpen)}>
                <Link to="/what-we-do"> <span className="cursor-pointer hover:text-gray-400 ">What We Do</span></Link>
              </div>
              <div className="group relative" onClick={() => setIsWhereWeAreMenuOpen(!isWhereWeAreMenuOpen)}>
                <Link to='/where-we-work'><span className="cursor-pointer hover:text-gray-400 ">Where We Work</span></Link>
              </div>
            </div>
    


            <div className=" flex mt-4 lg:hidden">
              
            <Link to='/internship'>
              <button className="relative p-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 overflow-hidden">
                <span className="absolute p-5 top-0 left-0 w-full h-full border-gradient rounded-lg animate-border"></span>
                Apply for Internship
              </button>
              </Link>
              <Link to='/donate'>

         
              <button className="relative p-2 bg-red-500 text-white px-4 py-2 rounded-lg ml-4 hover:bg-red-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 overflow-hidden">
                <span className="absolute p-5 top-0 left-0 w-full h-full border-gradient rounded-lg animate-border"></span>
                Donate
              </button>
              </Link>
            </div>

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
