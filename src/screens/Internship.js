import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from "react-router-dom"

export default function Internship() {


    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='flex flex-col m-[2rem]'>
                <div className='flex flex-col '>
                    <div className='flex justify-center text-center text-[4rem] font-bold'>
                        <h1>Our Internships</h1>
                    </div>
                    <div className='flex justify-center  text-center lg:pl-[15rem] lg:pr-[15rem]'>
                        <p>
                            We are passionate about technology ,  management  and  believe in the power of  transforming the world. Our internship program is just one of the ways in which we are investing in the future of the industry and programs.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col mt-[5rem]'>
                    <div className='flex justify-center font-bold uppercase underline text-[2rem]  '>
                        <h1>Internship Position</h1>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 '>
                        <div className='lg:m-[2rem]  flex flex-col justify-center   w-[320px] h-[580px] lg:w-[360px] lg:h-[580px]'>
                            <div>
                                <img src='https://cdn.dribbble.com/users/653870/screenshots/14626585/media/9ff7a9485edff0893e622848862d0080.gif' alt='img' className='w-full h-[10rem] lg:h-[14rem]' />
                            </div>
                            <div className='flex justify-center font-bold text-[1.5rem]'>
                                Web Development (MERN)
                            </div>
                            <div className='flex justify-center text-center'>
                                <p>
                                    web development internship that provides practical work experience and an introduction to crafting and enhancing web-based systems. This opportunity offers engaging challenges and real-world projects, allowing you to gain hands-on experience in the dynamic fields of web and app development. Join our award-winning innovation team and kickstart your journey to success in a supportive and enriching environment.
                                </p>
                            </div>

                            <div className='text-white text-[1.4rem] flex justify-center mt-[1rem] '>
                            <Link to={`/internship/apply?position=WebDev`}>
                                <button className='bg-blue-500  p-[0.5rem] rounded-xl ' >Apply </button>
                            </Link>

                        </div>
                    </div>

                    <div className='lg:m-[2rem]  flex flex-col justify-center   w-[320px] h-[580px] lg:w-[360px] lg:h-[580px]'>
                        <div>
                            <img src='https://cdn.dribbble.com/users/795597/screenshots/6081444/mobile_development2.gif' alt='img' className='w-full h-[10rem] lg:h-[14rem]' />
                        </div>
                        <div className='flex justify-center font-bold text-[1.5rem]'>
                            App Development
                        </div>
                        <div className='flex justify-center text-center'>
                            <p>
                                Gain practical work experience and dive into the world of app development with our internship program. This opportunity offers hands-on projects and a chance to enhance your skills in creating innovative and user-friendly mobile applications. Join our dynamic team and kickstart your journey to success in the exciting field of app development.                                </p>
                        </div>

                        <div className='text-white text-[1.4rem] flex justify-center mt-[1rem] '>
                            <Link to={'/internship/apply?position=AppDev'}>
                            <button className='bg-blue-500  p-[0.5rem] rounded-xl ' >Apply </button>
                            </Link>
                        </div>
                    </div>


                    <div className='lg:m-[2rem]  flex flex-col justify-center   w-[320px] h-[580px] lg:w-[360px] lg:h-[580px]'>
                        <div>
                            <img src='https://cdn.dribbble.com/users/176039/screenshots/9022929/media/b21392d51355d99c7b82a5fedf2c4f85.gif' alt='img' className='w-full h-[10rem] lg:h-[14rem]' />
                        </div>
                        <div className='flex justify-center font-bold text-[1.5rem]'>
                            Data Science
                        </div>
                        <div className='flex justify-center text-center'>
                            <p>
                                Data Science internship that provides practical work experience and an introduction to crafting and enhancing web-based systems. This opportunity offers engaging challenges and real-world projects, allowing you to gain hands-on experience in the dynamic fields of web and app development. Join our award-winning innovation team and kickstart your journey to success in a supportive and enriching environment.
                            </p>
                        </div>

                        <div className='text-white text-[1.4rem] flex justify-center mt-[1rem] '>
                            <Link to={'/internship/apply?position=DataSc'}></Link>
                            <button className='bg-blue-500  p-[0.5rem] rounded-xl '>Apply </button>
                        </div>
                    </div>

                    <div className='lg:m-[2rem]  flex flex-col justify-center   w-[320px] h-[580px] lg:w-[360px] lg:h-[580px]'>
                        <div>
                            <img src='https://digitalogy.co/blog/wp-content/uploads/2019/03/Machine-Learning.gif' alt='img' className='w-full h-[10rem] lg:h-[14rem]' />
                        </div>
                        <div className='flex justify-center font-bold text-[1.5rem] text-center'>
                            Machine Learning And Aritificial Intelligence
                        </div>
                        <div className='flex justify-center text-center'>
                            <p>
                                Explore the fascinating world of artificial intelligence with our internship program. Gain practical experience in machine learning, data analysis, and AI-driven applications. Join our team and work on cutting-edge projects that shape the future of AI technology.                                </p>
                        </div>

                        <div className='text-white text-[1.4rem] flex justify-center mt-[1rem] '>
                            <Link to={'/internship/apply?position=AI'}>

                       
                            <button className='bg-blue-500  p-[0.5rem] rounded-xl ' >Apply </button>
                            </Link>
                        </div>
                    </div>

                    <div className='lg:m-[2rem]  flex flex-col justify-center   w-[320px] h-[580px] lg:w-[360px] lg:h-[580px]'>
                        <div>
                            <img src='https://i.pinimg.com/originals/87/0a/2f/870a2f0a426751eac1fc9cefcd97be78.gif' alt='img' className='w-full h-[10rem] lg:h-[14rem]' />
                        </div>
                        <div className='flex justify-center font-bold text-[1.5rem]'>
                            UI/UX Design
                        </div>
                        <div className='flex justify-center text-center'>
                            <p>
                                Enhance your skills in user interface and user experience design through our internship program. You'll work on real projects, collaborate with designers and developers, and learn industry-standard tools and techniques. Join our team and kickstart your journey to becoming a skilled UI/UX designer.                                </p>
                        </div>

                        <div className='text-white text-[1.4rem] flex justify-center mt-[1rem] '>
                            <Link to={'/internship/apply?position=UIUX'}>

                 
                            <button className='bg-blue-500  p-[0.5rem] rounded-xl ' > Apply </button>
                            </Link>
                        </div>
                    </div>

                    <div className='lg:m-[2rem]  flex flex-col justify-center   w-[320px] h-[580px] lg:w-[360px] lg:h-[580px]'>
                        <div>
                            <img src='https://cdn.dribbble.com/users/4341736/screenshots/15436012/media/7ce440f7462802f0f109f08088c97fb7.gif' alt='img' className='w-full h-[10rem] lg:h-[14rem]' />
                        </div>
                        <div className='flex justify-center font-bold text-[1.5rem]'>
                            Finance Analyst
                        </div>
                        <div className='flex justify-center text-center'>
                            <p>
                                Explore the world of finance and gain valuable work experience through our internship program. You'll have the opportunity to work on real-world projects, learn financial analysis techniques, and develop your skills in financial modeling. Join our team and take the first step towards a rewarding career in finance.                                </p>
                        </div>

                        <div className='text-white text-[1.4rem] flex justify-center mt-[1rem] '>
                            <Link to={'/internship/apply?position=Finance'}>

                     
                            <button className='bg-blue-500  p-[0.5rem] rounded-xl ' >Apply </button>
                            </Link>
                        </div>
                    </div>



                    <div className='lg:m-[2rem]  flex flex-col justify-center   w-[320px] h-[580px] lg:w-[360px] lg:h-[580px]'>
                        <div>
                            <img src='https://i.gifer.com/7eK3.gif' alt='img' className='w-full h-[10rem] lg:h-[14rem]' />
                        </div>
                        <div className='flex justify-center font-bold text-[1.5rem]'>
                            Human Resource
                        </div>
                        <div className='flex justify-center text-center'>
                            <p>
                                Dive into the world of human resources with our internship program. Gain hands-on experience in recruitment, employee relations, training, and development. Join our team and learn from experienced HR professionals as you take the first step towards a rewarding career in human resources.                                </p>
                        </div>

                        <div className='text-white text-[1.4rem] flex justify-center mt-[1rem] '>
                            <Link to={'/internship/apply?position=HR'}>

                  
                            <button className='bg-blue-500  p-[0.5rem] rounded-xl ' >Apply </button>
                            </Link>
                        </div>
                    </div>



                    <div className='lg:m-[2rem]  flex flex-col justify-center   w-[320px] h-[580px] lg:w-[360px] lg:h-[580px]'>
                        <div>
                            <img src='https://i.pinimg.com/originals/82/23/cc/8223ccba89cd34cbcbe65e47d8bc4993.gif' alt='img' className='w-full h-[10rem] lg:h-[14rem]' />
                        </div>
                        <div className='flex justify-center font-bold text-[1.5rem]'>
                            Social Media Marketing
                        </div>
                        <div className='flex justify-center text-center'>
                            <p>
                                Develop your skills in social media marketing through our internship program. This opportunity offers hands-on experience in creating and implementing social media campaigns, analyzing metrics, and engaging with our audience. Join our team and learn from industry experts as you kickstart your career in social media marketing.                                </p>
                        </div>

                        <div className='text-white text-[1.4rem] flex justify-center mt-[1rem] '>
                            <Link to={'/internship/apply?position=SocialMedia'}>
                            <button className='bg-blue-500  p-[0.5rem] rounded-xl ' >Apply </button>
                            </Link>
                        </div>
                    </div>



                    <div className='lg:m-[2rem]  flex flex-col justify-center   w-[320px] h-[580px] lg:w-[360px] lg:h-[580px]'>
                        <div>
                            <img src='https://cdn.pixabay.com/animation/2022/08/04/08/49/08-49-01-330_512.gif' alt='img' className='w-full h-[10rem] lg:h-[14rem]' />
                        </div>
                        <div className='flex justify-center font-bold text-[1.5rem]'>
                            Business Management
                        </div>
                        <div className='flex justify-center text-center'>
                            <p>
                                Take on challenges and gain practical experience in business management with our internship program. You'll work on real-world projects, develop leadership skills, and learn about strategic planning and decision-making. Join our team and pave the way for a successful career in business management.                                </p>
                        </div>

                        <div className='text-white text-[1.4rem] flex justify-center mt-[1rem] '>
                            <Link to={'/internship/apply?position=Business'}>
                            <button className='bg-blue-500  p-[0.5rem] rounded-xl ' >Apply </button>
                            </Link>
                        </div>
                    </div>




                </div>
            </div>

        </div >
            <div>
                <Footer />
            </div>
        </>
    )
}
