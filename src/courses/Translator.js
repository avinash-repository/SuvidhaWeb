import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./Ads.css";

const Chapter = ({  videoUrl,  title, isActive,  onClick }) => (
  <div>
    <div
      className='mx-3 border-2 border-black bg-gray-400 py-5 text-2xl font-bold'
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
     {title}
    </div>
    {isActive && (
      <div className=' lg:my-[1rem]  lg:mx-[3rem]'>
        <iframe 
        className='video-iframe'
          src={videoUrl}
         
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    )}
  </div>
);

export default function Translator() {
  const [activeChapter, setActiveChapter] = useState(null);


  const videos = {
    chapter1: {
        title:"Introduction",
        url:'https://www.youtube.com/embed/someVideo1',
    },
    chapter2: {
      title:"Strating with Profile demo",
      url:'https://www.youtube.com/embed/someVideo1',
    },
    chapter3: {
      title:"managing the time ",
      url:'https://www.youtube.com/embed/someVideo1',
    },
    chapter4: {
      title:"Business Escalation",
      url:'https://www.youtube.com/embed/someVideo1',
    }
  

    

  };
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='flex flex-col justify-center text-center align-center m-2 '>
          <h1 className='text-3xl font-bold text-center my-4'>
Translator 
             </h1>
        <div className='flex flex-col w-full'>
          {Object.keys(videos).map((point) => (     
          <Chapter
          key={point}
          title={videos[point].title}
          videoUrl={videos[point].url}
          isActive={activeChapter === point}
          onClick={() => setActiveChapter(activeChapter === point ? null : point)}
        />
          ))}


        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
