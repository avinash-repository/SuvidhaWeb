import React , {useState} from 'react'
import upes from "../images/upes.png";
import {Link} from "react-router-dom";
import {  useNavigate } from 'react-router-dom';


export default function Createcert() {
    let navigate = useNavigate();
    const [certificateData , setcertificateData] = useState({name:'' , code:'', from :'' , to:'' , designation:''});
    const [showErrorMessage, setShowErrorMessage] =  useState(false);

    const onChange = (e)=>{
            setcertificateData({...certificateData , [e.target.name]:e.target.value });

    }


    const handlesubmit = async (e)=>{
        e.preventDefault();
        const response =await fetch("http://localhost:3000/api/createcertificate",{
            method:'POST',
            
            headers:{
               'Content-Type':'application/json'
            },
            body:JSON.stringify({ name:certificateData.name, code:certificateData.code , from:certificateData.from , to:certificateData.to , designation:certificateData.designation })   
           });
 
 
           const json = await response.json();
           console.log(json);
   
           if(!json.success){
             setShowErrorMessage(true);
           }
           else{
            setShowErrorMessage(false);
            alert("Form submitted successfully ");
          
            navigate('/create-certificate');
        }
    }


  return (
    <div> 
        <div className='flex flex-row  justify-between items-center w-full bg-slate-700 p-3 '>
            <div className='mt-2 text-white flex  flex-col lg:flex-row   '>
                    <img src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg' alt='image' width='80px' className='rounded-lg mr-[1.5rem]'></img>
                    <p className='mt-5 text-[1.5rem] font-bold'>Rahul Sharma  </p>
            </div>
            <Link to='/'>
    
                <div className='m-2 '>
           
            <button className="relative p-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 overflow-hidden">
          <span className="absolute p-5 top-0 left-0 w-full h-full border-gradient rounded-lg animate-border"></span>
      LogOut
        </button>
        
            </div>
                        
            </Link>
        </div>       

        <div>
        <div className='flex flex-col'>
                <div className='m-2 lg:m-5 p-[1rem] lg:p-[3.5rem] flex justify-center  flex-col'>


                    <div className='m-5 p-[1rem] lg:p-[8rem] flex  flex-col h-auto rounded-lg  bg-slate-200 text-black'>
                        <div className='font-bold  text-[2rem] lg:text-[4rem] flex justify-center text-center uppercase'>
                            Certificate Details
                        </div>
                        <div className='text-[1rem] lg:text-[1.5rem]'>
                            <form  onSubmit={handlesubmit} >
                                <div className='flex justify-center flex-col'>
                                    <div className='flex justify-center  mb-[2rem] '>


                                        <label htmlFor='firstname' >Full Name: </label>
                                    </div>
                                    <div className='lg:ml-[3rem] lg:mr-[3rem]'>

                                        <input
                                            className='p-2  text-black  uppercase  w-full  '
                                            type='text'
                                            name='name'
                                            placeholder='Full Name'
                                            value={certificateData.name}
                                            onChange={onChange}

                                        />
                                    </div>


                                    <div className='flex justify-center mt-[3rem] mb-[2rem]'>


                                        <label htmlFor='lastname' >Designation: </label>
                                    </div>
                                    <div className='lg:ml-[3rem] lg:mr-[3rem]'>

                                        <input
                                            className='p-2  text-black  uppercase  w-full  '
                                            type='text'
                                            name='designation'
                                            placeholder='Designation'
                                            value={certificateData.designation}
                                            onChange={onChange}

                                        />
                                    </div>
                                    <div className='flex justify-center mt-[3rem] mb-[2rem]'>


                                        <label htmlFor='email' > CPRR  Code: </label>
                                    </div>
                                    <div className='lg:ml-[3rem] lg:mr-[3rem]'>

                                        <input
                                            className='p-2  text-black uppercase   w-full  '
                                            type='text'
                                            name='code'
                                            placeholder='CPRR Code'
                                            value={certificateData.code}
                                            onChange={onChange}

                                        />
                                    </div>
                             






                                    <div className='flex justify-center  mt-[3rem] mb-[2rem]'>


                                        <label htmlFor='phone' >From: </label>
                                    </div>
                                    <div className='lg:ml-[3rem] lg:mr-[3rem]'>

                                        <input
                                            className='p-2  text-black  uppercase  w-full  '
                                            type='text'
                                            name='from'
                                            placeholder='From '
                                            value={certificateData.from}
                                            onChange={onChange}

                                        />
                                    </div>

                                    

                                    <div className='flex justify-center  mt-[3rem] mb-[2rem]'>


                                        <label htmlFor='phone' >To: </label>
                                    </div>
                                    <div className='lg:ml-[3rem] lg:mr-[3rem]'>

                                        <input
                                            className='p-2  text-black  uppercase  w-full  '
                                            type='text'
                                            name='to'
                                            placeholder='To'
                                            value={certificateData.to}
                                            onChange={onChange}

                                        />
                                    </div>
                             
                        {showErrorMessage && (
                            <div className='flex justify-center text-red-500  mt-[3rem] mb-[2rem]'>

                            Please fill all the details 
                        </div>
                        ) }
                                    <button className='bg-green-400 p-4 m-[3rem] hover:scale-[110%] transition duration-700 ease-in-out hover:bg-green-900'> Submit Details</button>
                           
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
 </div>
  )
}
