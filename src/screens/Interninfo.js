import React, { useState } from 'react'
import { useLocation , useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Interninfo() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const position = queryParams.get('position');
    let navigate = useNavigate();


    const [formData, setFormData] = useState({ firstname: '', lastname: '', position:position || '', college: '',   email: '', gender: '', hqualification: '', cqualification: '', phone: ''});
    const [showErrorMessage, setShowErrorMessage] = useState(false);

 

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });


    }
    const handleSubmit = async (e) => {
        e.preventDefault();
         const {firstname , lastname , position , college, email , gender, hqualification , cqualification, phone} = formData;
        
            const response = await fetch('http://localhost:3000/api/createintern', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'

                },
                body:JSON.stringify({firstname:firstname , lastname:lastname , position:position , college:college , email:email , gender:gender , hqualification:hqualification , cqualification:cqualification, phone:phone})
            });

            const json = await response.json();
            console.log(json);

            if(!json.success){
                setShowErrorMessage(true);
            }
            else{
                setShowErrorMessage(false);
                alert("Form submitted successfully ");
              
                navigate('/otpverification');
            }
      
    }
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='flex flex-col'>
                <div className='m-2 lg:m-5 p-[1rem] lg:p-[3.5rem] flex justify-center  flex-col'>


                    <div className='m-5 p-[1rem] lg:p-[8rem] flex  flex-col h-auto rounded-lg  bg-slate-200 text-black'>
                        <div className='font-bold  text-[2rem] lg:text-[4rem] flex justify-center text-center uppercase'>
                            Your Information
                        </div>
                        <div className='text-[1rem] lg:text-[1.5rem]'>
                            <form onSubmit={handleSubmit} >
                                <div className='flex justify-center flex-col'>
                                    <div className='flex justify-center  mb-[2rem] '>


                                        <label htmlFor='firstname' >First Name: </label>
                                    </div>
                                    <div className='lg:ml-[3rem] lg:mr-[3rem]'>

                                        <input
                                            className='p-2  text-black  uppercase  w-full  '
                                            type='text'
                                            name='firstname'
                                            placeholder='First Name'
                                            value={formData.firstname}
                                            onChange={onChange}

                                        />
                                    </div>


                                    <div className='flex justify-center mt-[3rem] mb-[2rem]'>


                                        <label htmlFor='lastname' >Last Name: </label>
                                    </div>
                                    <div className='lg:ml-[3rem] lg:mr-[3rem]'>

                                        <input
                                            className='p-2  text-black  uppercase  w-full  '
                                            type='text'
                                            name='lastname'
                                            placeholder='Last Name'
                                            value={formData.lastname}
                                            onChange={onChange}

                                        />
                                    </div>
                                    <div className='flex justify-center mt-[3rem] mb-[2rem]'>


                                        <label htmlFor='email' > Email: </label>
                                    </div>
                                    <div className='lg:ml-[3rem] lg:mr-[3rem]'>

                                        <input
                                            className='p-2  text-black    w-full  '
                                            type='email'
                                            name='email'
                                            placeholder='Email ID'
                                            value={formData.email}
                                            onChange={onChange}

                                        />
                                    </div>
                                    <div className='flex justify-center mt-[3rem] mb-[2rem]'>


                                        <label htmlFor='college' > College: </label>
                                    </div>
                                    <div className='lg:ml-[3rem] lg:mr-[3rem]'>

                                        <input
                                            className='p-2  text-black  uppercase  w-full  '
                                            type='text'
                                            name='college'
                                            placeholder='College Name'
                                            value={formData.college}
                                            onChange={onChange}

                                        />
                                    </div>





                                    <div className='flex justify-center  mt-[3rem] mb-[2rem]'>


                                        <label htmlFor='phone' >Whatsapp Number: </label>
                                    </div>
                                    <div className='lg:ml-[3rem] lg:mr-[3rem]'>

                                        <input
                                            className='p-2  text-black  uppercase  w-full  '
                                            type='number'
                                            name='phone'
                                            placeholder='Whatsapp Number'
                                            value={formData.phone}
                                            onChange={onChange}

                                        />
                                    </div>
                                    <div className='flex flex-col lg:flex-row '>

                                  
                                    <div className='flex justify-center mt-[3rem] mb-[2rem]'>
                                            <select className='p-3 mt-2 mb-1' name='position'  id='position' value={formData.position}  onChange={onChange}>
                                                <option>--Select Domain--</option>
                                                <option value='AppDev'>App Development</option>
                                                <option value='WebDev'>web Development</option>
                                                <option value='DataSc'>Data Science</option>
                                                <option value='AI'>ML & AI</option>
                                                <option value='UIUX'>UI/UX</option>
                                                <option value='HR'>Human Resource</option>
                                                <option value='Finance'>Finance Analyst</option>
                                                <option value='SocialMedia'>Social Media Marketing</option>


                                                <option value='Business'>Business Management</option>

                                            </select>
                                    </div>

                                    <div className='flex   mt-[1rem] lg:ml-[15rem] lg:mt-[4rem] justify-center  mb-[1rem]'>


                                        <label htmlFor='gender' >Gender: </label>
                                    </div>

                                    <div className='flex justify-center lg:w-[40px] lg:h-[40px] lg:ml-[3rem] lg:mt-[4rem]  text-black'>
                                        <select className='p-1' name='gender' value={formData.gender} onChange={onChange}>

                                            <option value='male'>Male</option>
                                            <option value='female'>Female</option>
                                            <option value='other'>Other</option>
                                        

                                        </select>

                                    </div>
                                    </div>

                                    <div className='flex justify-center  mt-[3rem] mb-[2rem]'>
                                        <label htmlFor='hqualification' >Highest Education Qualification: </label>
                                    </div>
                                    <div className='lg:ml-[3rem] lg:mr-[3rem]'>

                                        <input
                                            className='p-2  text-black  uppercase  w-full  '
                                            type='text'
                                            name='hqualification'
                                            placeholder='Highest Qualification'
                                            value={formData.hqualification}
                                            onChange={onChange}

                                        />
                                    </div>



                                    <div className='flex justify-center  mt-[3rem] mb-[2rem]'>


                                        <label htmlFor='phone' >Current Year / Education: </label>
                                    </div>
                                    <div className='lg:ml-[3rem] lg:mr-[3rem]'>

                                        <input
                                            className='p-2  text-black  uppercase  w-full  '
                                            type='text'
                                            name='cqualification'
                                            placeholder='Current Year'
                                            value={formData.cqualification}
                                            onChange={onChange}

                                        />
                                    </div>
                                    <div className='flex justify-center  text-center mt-[3rem] mb-[2rem]'>

                                    <label>
                                        <input
                                            type="checkbox"
                                            className='p-2  text-black m-2  '
                                           
                                            required  
                                        />
                                        I agree to the terms and conditions
                                    </label>
                                    </div>


                                    <div className='flex justify-center mt-[3rem] text-red-400'>
                                        {showErrorMessage && (
                                            <p className=''>
                                                Please fill all the details
                                            </p>
                                        )}
                                    </div>
                                    <button className='bg-green-400 p-4 m-[3rem] hover:scale-[110%] transition duration-700 ease-in-out hover:bg-green-900'> Submit Details</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
