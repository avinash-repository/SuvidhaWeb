import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';
export default function Partnercontact() {

    let navigate = useNavigate();
    const [formData, setFormdata] = useState({ name: '', email: '', message: '' });

    const onchange = (e) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        alert("Details submitted ");
        console.log(formData.name);
        console.log(formData.email);
        console.log(formData.message);
        navigate('/');
    }

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='flex text-center justify-center align-center mt-[2rem] text-[3rem] font-bold  uppercase '>
                        Contact Us
                </div>
            <div className='m-[1rem] p-[2rem] lg:m-[5rem] lg:p-[5rem] bg-gray-300 text-center'>
              
                <div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='name' > Name: </label>
                        <div className='mt-[0.5rem] mb-[1rem]'>
                            <input
                                className='p-2  text-black w-full lg:w-[20rem]  uppercase   '
                                type='text'
                                name='name'
                                placeholder='Your Name '
                                value={formData.name}
                                onChange={onchange}

                            />
                        </div>

                        <label htmlFor='email' > Email: </label>
                        <div className='mt-[0.5rem] mb-[2rem]'>
                            <input
                                className='p-2  text-black w-full lg:w-[20rem]     '
                                type='email'
                                name='email'
                                placeholder='Your Email '
                                value={formData.email}
                                onChange={onchange}

                            />





                        </div>
                        <label htmlFor='msg' >  Message : </label>

                        <div className='mt-[0.5rem] mb-[1rem] text-white'>
                            <textarea
                                name="message"
                                rows="4"
                                value={formData.message}
                                className="px-0 w-full lg:w-[45rem] text-xl bg-gray-500 text-white"
                                onChange={onchange}  // Changed from 'onchange' to 'onChange'
                                placeholder="Write a comment..."
                                required>
                            </textarea>





                        </div>

                        <div className=' text-xl font-bold'>



                            <button className="relative p-2 bg-sky-600 text-white px-4 py-2 rounded-lg ml-4 hover:bg-sky-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 overflow-hidden">
                                <span className="absolute p-5 top-0 left-0 w-full h-full border-gradient rounded-lg animate-border"></span>
                                Send Message
                            </button>

                        </div>

                    </form>

                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}




