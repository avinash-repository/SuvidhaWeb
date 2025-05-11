import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Testimonials.css";


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
      }, 130); // Typing speed - adjust as needed
  
      return () => clearInterval(interval);
    }, [index, displayedText, words, loop]);
  
    return <span>{displayedText}</span>;
  };

const Testimonials = () => {
    const data = [
        {
            name: 'John Cena',
            review: 'Hello, I had a great experience with this service. Highly recommended!',
            avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        {
            name: 'Jane Doe',
            review: 'Hi there! This service exceeded my expectations. Will definitely use it again.',
            avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        },
        {
            name: 'Alice Smith',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
        },
        {
            name: 'Bob Johnson',
            review: 'This is an amazing service. I am very satisfied with the results!',
            avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
        },
        {
            name: 'Emily Brown',
            review: 'I can\'t believe how fast and efficient this service is. Absolutely love it!',
            avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
        },
        {
            name: 'Michael Davis',
            review: 'Highly recommend this service to everyone. It\'s a game-changer!',
            avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
        },
        {
            name: 'Sophia Wilson',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
        }
    ];
    
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <>

        <div className="font-bold mt-10 pt-12 ">
        <div className="flex-col p-10 lg:flex  justify-center items-center text-5xl ">
            <div className=' lg:w-auto h-[80px]' >
            <Typewriter words={['What People Say About Our Work']} loop={{}} />
            </div>
  
        </div>
      </div>
        <div className='w-full m-auto bg-gray-700'>
            <div className='mt-20 p-10'>
                <Slider {...settings} className='text-white testimonial-slider'>
                    {data.map((d, index) => (
                        <div key={index} className='testimonial-item'>
                            <div className='testimonial-content m-5'>
                                <div className='testimonial-avatar m-4'>
                                    <img src={d.avatar} className='rounded-full' alt='avatar' />
                                </div>
                                <div className='testimonial-details'>
                                    <p className='testimonial-name text-xl font-bold mt-5'>{d.name}</p>
                                    <p className='testimonial-review mt-5'>{d.review}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
        </>

    );
};

export default Testimonials;
