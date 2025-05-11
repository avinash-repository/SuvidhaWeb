import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import display1 from '../video/Internship.mp4';
import display2 from '../video/Meal.mp4';
import display3 from '../video/Planting.mp4';
import image from '../images/empowerment.jpg';
import image2 from '../images/welcome.jpeg';

const Typewriter = ({ words, loop }) => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText(prevText => {
        const nextChar = words[index][prevText.length];
        if (nextChar) {
          return prevText + nextChar;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setDisplayedText('');
            setIndex((index + 1) % words.length);
          }, loop.delay || 500000); // Default delay is 2 seconds
          return prevText;
        }
      });
    }, 300); // Typing speed - adjust as needed

    return () => clearInterval(interval);
  }, [index, displayedText, words, loop]);

  return <span>{displayedText}</span>;
};

const Carousal = () => {
  const slides = [
    { type: 'video', url: display1 },
    { type: 'image', url: image },
    { type: 'video', url: display2 },
    { type: 'image', url: image2 },
    { type: 'video', url: display3 }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const currentSlide = slides[currentIndex];

  return (
    <>
      <div className="font-bold mt-10 ">
        <div className="flex  justify-center items-center text-5xl ">
            <div className='w-[400px] h-[70px]' >
            <Typewriter words={['What We Provide ']} loop={{}} />
            </div>
  
        </div>
      </div>
      <div className='max-w-[800px] h-[400px] w-full lg:max-w-[1400px] lg:h-[780px] lg:w-full m-auto py-16 px-4 relative'>
        {currentSlide.type === 'video' ? (
          <video autoPlay loop muted className='w-full h-full rounded-2xl object-cover'>
            <source src={currentSlide.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={currentSlide.url} alt="Slide" className='w-full h-full rounded-2xl object-cover' />
        )}

        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
    </>
  );
};

export default Carousal;
