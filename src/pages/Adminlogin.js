import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import {useNavigate} from "react-router-dom";
export default function Adminlogin() {

    let navigate= useNavigate()
    const [logindetails, setLogindetails] = useState({ email: '', password: "" });


    const onChange = (e) => {
        setLogindetails({ ...logindetails, [e.target.name]: e.target.value });


    }


    const handlesubmit = async (e)=>{
        e.preventDefault();
        const response =await fetch("http://localhost:3000/api/adminlogin",{
            method:'POST',
            
            headers:{
               'Content-Type':'application/json'
            },
            body:JSON.stringify({ email:logindetails.email, password:logindetails.password })   
           });
 
 
           const json = await response.json();
           console.log(json);
   
           if(!json.success){
             alert("Incorrect Emailid and Password ")
           }
           
           if(json.success){
           
            console.log("Login Successful ");
           
             navigate("/create-certificate");
           }
    }


    return (
        <div>
            <div className=''>
                <Navbar />
            </div>
            <div className='  align-center flex justify-center items-center mt-[8rem] mr-[2rem] ml-[2rem] lg:mt-[8rem] lg:mr-[20rem] lg:ml-[20rem] pt-[3rem] pb-[3rem]  flex-col h-auto rounded-lg text-2xl  bg-cyan-800 text-white '>
                <div >
                    <form onSubmit={handlesubmit} >
                        <div className='flex justify-center flex-col'>
                            <div className='flex justify-center'>


                                <label htmlFor='firstname' >Email id: </label>
                            </div>
                            <div className='lg:ml-[3rem] lg:mr-[3rem]'>

                                <input
                                    className='p-2  text-black  w-full   '
                                    type='text'
                                    name='email'
                                    placeholder='Enter Your id '
                                    onChange={onChange}
                                    value={logindetails.email}
                                />
                            </div>


                            <div className='flex justify-center mt-[3rem]'>


                                <label htmlFor='lastname' >Password: </label>
                            </div>
                            <div className='lg:ml-[3rem] lg:mr-[3rem]'>

                                <input
                                    className='p-2  text-black    w-full   '
                                    type='password'
                                    name='password'
                                    onChange={onChange}
                                    placeholder='Enter Your password'
                                    value={logindetails.password}
                                />
                            </div>
                            <button className='bg-blue-700 p-4 mt-[2rem] hover:scale-[110%] transition duration-700 ease-in-out hover:bg-blue-900'> Login </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
