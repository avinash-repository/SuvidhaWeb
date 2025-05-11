import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import upes from "../images/upes.png";
import microsoft from "../images/microsoft.webp"
import jp from "../images/jp.png"
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
            }, loop.delay || 500000); 
            return prevText;
          }
        });
      }, 100); // Typing speed - adjust as needed
  
      return () => clearInterval(interval);
    }, [index, displayedText, words, loop]);
  
    return <span>{displayedText}</span>;
  };


export default function Collaborative() {
  return (
 <>
        <div className="font-bold mt-10 pt-12  ">
        <div className="flex-col p-10 lg:flex  justify-center items-center text-5xl ">
            <div className=' lg:w-auto h-[80px]' >
            <Typewriter words={['In Collaboration With']} loop={{}} />
            </div>
  
        </div>
      </div>
      <div className=' flex justify-center items-center flex-col lg:flex-row '>
        <div className='transition ease-in-out duration-700 m-10 hover:scale-[120%]'>
            <Link to='https://www.upes.ac.in/'  target='_blank' >
            <img src={upes} alt='IMG' width='400px' />
            </Link>
          
        </div>
        <div className='transition ease-in-out duration-700 m-10 hover:scale-[120%]'>
            <Link to='https://www.microsoft.com/en-in'  target='_blank'>
            <img src={microsoft} alt='IMG' width='400px'/>

            </Link>
     
        </div>
        <div className='transition ease-in-out duration-700 m-10 hover:scale-[120%]'>
            <Link to='https://www.jpmorgan.com/global' target='_blank'>
            <img src={jp} alt='IMG'  width='400px'/>
            </Link>
     
        </div>
    

      </div>
 </>
  )
}
