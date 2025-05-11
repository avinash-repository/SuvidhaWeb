import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function VerificationCert() {
    const [getData, setGetData] = useState({code:""});
    const [certificate, setCertificate] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);

    const onChange = (e) => {
        setGetData({ ...getData, [e.target.name]: e.target.value });
        setCertificate(null); 

    };

    const handleSearch = async () => {
      
        try {
            const response = await fetch('http://localhost:3000/api/verifycertificate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ code: getData.code })
            });

            const json = await response.json();
            console.log(json.data);  
            if (response.ok && json.success) {
                  
                setCertificate(json.data); 
                setErrorMessage(false);
            } else {
                setCertificate(null);
                setErrorMessage(true);
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage(true);
        }
    };

    return (
        <>
            <div><Navbar /></div>
            <div className='bg-zinc-800 text-white w-full h-screen'>
                <div className='uppercase text-2xl p-[2rem] lg:pt-[4rem] lg:pl-[15rem]'>
                    CERTIFICATE VERIFICATION SYSTEM
                </div>
                <div className='p-[2rem] lg:pt-[5rem] text-center'>
                    <input onChange={onChange} value={getData.code} type="text" name='code' placeholder='Enter ID' className='uppercase text-xl w-full lg:w-[40rem] text-black h-[3rem] p-[0.3rem]' />
                    <button onClick={handleSearch} className="relative mt-[3rem] p-[1rem] text-xl bg-sky-700 text-white px-4 py-2 rounded-lg ml-4 hover:bg-sky-900 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 overflow-hidden">
                        Search
                    </button>
                </div>

                {certificate && (
                    <div className='text-white text-center m-1 flex justify-center lg:text-[2rem] mt-[3rem]'>
                        <table className='uppercase border-collapse border border-white'>
                            <thead>
                                <tr>
                                    <th className="border border-white p-[1rem]">Name</th>
                                    <th className="border border-white p-[1rem]">Domain</th>
                                    <th className="border border-white p-[1rem]">From</th>
                                    <th className="border border-white p-[1rem]">To</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-white p-[1rem]">{certificate.name}</td>
                                    <td className="border border-white p-[1rem]">{certificate.designation}</td>
                                    <td className="border border-white p-[1rem]">{certificate.from}</td>
                                    <td className="border border-white p-[1rem]">{certificate.to}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {errorMessage && 
                    <div className='m-[5rem] bg-red-400 text-black lg:h-[3rem] text-center'>
                        <h2 className='text-xl font-bold lg:pt-[1rem]'>This MMS code does not exist </h2>
                    </div>
                }
            </div>
        </>
    );
}
