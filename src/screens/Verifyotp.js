import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

export default function Verifyotp() {
    const [formData, setFormData] = useState({ otp: '' });
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    let navigate = useNavigate();

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setShowErrorMessage(false); // Hide error message when user starts typing
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { otp } = formData;

        try {
            const response = await fetch('http://localhost:3000/api/verifyintern', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ otp: otp })
            });

            const json = await response.json();
            console.log(json);

            if (!json.success) {
                setShowErrorMessage(true);
            } else {
                setShowErrorMessage(false);
                navigate('/');
            }
        } catch (error) {
            console.error('Error:', error);
            setShowErrorMessage(true); // Show error message for unexpected errors
        }
    };

    return (
        <>
            <div className='flex h-screen items-center justify-center text-xl'>
                <div className='flex text-center border-4 shadow-gray-500 shadow-lg border-gray-800 lg:w-[18rem] lg:h-[20rem] w-[17rem] h-[18rem]'>
                    <div className='flex flex-col justify-center text-center items-center'>
                        <form onSubmit={handleSubmit}>
                            <div className='flex text-center lg:p-1 p-4'>
                                <input
                                    className='p-1  lg:ml-[1.5rem] border-4  border-gray-700'
                                    type='password'
                                    name='otp'
                                    placeholder='Enter OTP'
                                    value={formData.otp}
                                    onChange={onChange}
                                />
                            </div>
                            <div>
                                <button className='bg-yellow-400 p-4 lg:ml-[1.5rem] mt-[2.5rem] hover:scale-[110%] transition duration-700 ease-in-out hover:bg-yellow-700'>
                                    Submit
                                </button>
                            </div>
                            {showErrorMessage && (
                                <p className='text-center text-red-600 lg:ml-[1.5rem] p-4'>
                                    Invalid OTP
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
