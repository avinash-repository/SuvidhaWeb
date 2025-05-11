import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import {  useNavigate , Link } from 'react-router-dom';
export default function Donate() {
    let navigate= useNavigate()
    const [formData, setFormData] = useState({ firstname: '', lastname: '', country: '', email: '', address: '', state: '', pincode: '', phone: '', comment: '' });
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });


    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstname, lastname, country,  email, address, state, pincode, phone , comment  } = formData;
    
        try {
            const response = await fetch('http://localhost:3000/api/createintern', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ firstname, lastname, country, email, address, state, pincode, comment, phone })
            });
    
            const json = await response.json();
            console.log(json);
    
            if (!json.success) {
                setShowErrorMessage(true);
            } else {
                setShowErrorMessage(false);
                alert("Form submitted successfully ");
                navigate('/otpverification');
            }
        } catch (error) {
            console.error('Error occurred:', error);
            setShowErrorMessage(true);
        }
    };
    


    return (
        <>
            <div>
                <Navbar />
            </div>

            <div className='m-5 grid lg:grid-cols-2 grid-cols-1 '>
                <div className='flex justify-center flex-col'>
                    <div className='flex justify-center uppercase font-bold  text-[2rem] lg:text-[3rem]'>
                        <h1>
                            Give now to help
                        </h1>
                    </div>
                    <div>
                        <img src='https://www.mercycorps.org/sites/default/files/styles/image_caption_bottom_medium_2x/public/2023-11/gaza-gettyimages-1753653178-edit.webp?h=e54b631c&itok=e4d6pf3I' alt='' className='w-full   h-[17rem] lg:h-[27rem]' />
                    </div>
                    <div className='flex justify-center mt-[3rem] flex-col  text-[1rem] lg:text-[1.5rem]'>
                        <p>
                            <span className='font-bold'>  Your gift today will go where it is needed most </span>, helping us mobilize our teams in response to humanitarian crises in places like Ukraine and Gaza, deliver lifesaving assistance to Yemeni children displaced by violent conflict, support farmers threatened by drought in Somalia, Kenya, and Ethiopia, assist communities with recovery after earthquakes in Afghanistan and Syria, and so much more.
                        </p>
                        <br />
                        <p className=' text-[1rem] lg:text-[2rem] font-bold '>
                            Suvidha Foundation teams are already on the ground where help is most needed.
                        </p>
                    </div>
                    <div className='flex flex-col mt-[4rem]'>
                        <div className=' flex justify-center uppercase text-[2rem] lg:text-[3rem] font-bold '>
                            <h1>Where your money goes</h1>
                        </div>
                        <div className='text-[1rem] lg:text-[1.5rem]'>
                            <p>
                                Every donation you make supports our work across the world – from helping our research teams expose hidden human rights abuses, to funding vital activism and campaigns so that we can challenge those in power
                            </p>
                            <p>
                                We couldn’t do any of this work without your support.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='m-5 p-[1rem] lg:p-[3.5rem] flex  flex-col h-auto rounded-lg  bg-zinc-700 text-white'>
                    <div className='font-bold  text-[2rem] lg:text-[4rem] flex justify-center uppercase'>
                        Your Information
                    </div>
                    <div className='text-[1rem] lg:text-[1.5rem]'>
                        <form onSubmit={handleSubmit} >
                            <div className='flex justify-center flex-col'>
                                <div className='flex justify-center'>


                                    <label htmlFor='firstname' >First Name: </label>
                                </div>
                                <div className='lg:ml-[3rem] lg:mr-[3rem]'>

                                    <input
                                        className='p-2  text-black  uppercase  w-full   '
                                        type='text'
                                        name='firstname'
                                        placeholder='First Name'
                                        value={formData.firstname}
                                        onChange={onChange}

                                    />
                                </div>


                                <div className='flex justify-center mt-[3rem]'>


                                    <label htmlFor='lastname' >Last Name: </label>
                                </div>
                                <div className='lg:ml-[3rem] lg:mr-[3rem]'>

                                    <input
                                        className='p-2  text-black  uppercase  w-full   '
                                        type='text'
                                        name='lastname'
                                        placeholder='Last Name'
                                        value={formData.lastname}
                                        onChange={onChange}

                                    />
                                </div>
                                <div className='flex justify-center mt-[3rem]'>


                                    <label htmlFor='email' > Email: </label>
                                </div>
                                <div className='lg:ml-[3rem] lg:mr-[3rem]'>

                                    <input
                                        className='p-2  text-black   w-full  '
                                        type='email'
                                        name='email'
                                        placeholder='Email ID'
                                        value={formData.email}
                                        onChange={onChange}

                                    />
                                </div>


                                <div className='flex justify-center mt-[3rem]'>


                                    <label htmlFor='address' >Address: </label>
                                </div>
                                <div className='lg:ml-[3rem] lg:mr-[3rem] h-[10rem]'>

                                    <textarea
                                        className='p-2  text-black  uppercase  w-full h-[10rem] '

                                        name='address'
                                        placeholder='Address'
                                        value={formData.address}
                                        onChange={onChange}

                                    ></textarea>
                                </div>


                                <div className='flex justify-center  mt-[3rem]'>


                                    <label htmlFor='state' >State: </label>
                                </div>
                                <div className='lg:ml-[3rem] lg:mr-[3rem]'>

                                    <input
                                        className='p-2  text-black  uppercase  w-full  '
                                        type='text'
                                        name='state'
                                        placeholder='State'
                                        value={formData.state}
                                        onChange={onChange}

                                    />
                                </div>

                                <div className='flex justify-center mt-[3rem]'>


                                    <label htmlFor='address' >Country: </label>
                                </div>

                                <div className='flex justify-center  text-black  uppercase'>
                                    <select className='p-3 mb-5' name='country' value={formData.country} onChange={onChange}>
                                        <option >Select a country</option>
                                        <option value='Afghanistan'>Afghanistan</option>
                                        <option value='Albania'>Albania</option>
                                        <option value='Algeria'>Algeria</option>
                                        <option value='Andorra'>Andorra</option>
                                        <option value='Angola'>Angola</option>
                                        <option value='Antigua and Barbuda'>Antigua and Barbuda</option>
                                        <option value='Argentina'>Argentina</option>
                                        <option value='Armenia'>Armenia</option>
                                        <option value='Australia'>Australia</option>
                                        <option value='Austria'>Austria</option>
                                        <option value='Azerbaijan'>Azerbaijan</option>
                                        <option value='Bahamas'>Bahamas</option>
                                        <option value='Bahrain'>Bahrain</option>
                                        <option value='Bangladesh'>Bangladesh</option>
                                        <option value='Barbados'>Barbados</option>
                                        <option value='Belarus'>Belarus</option>
                                        <option value='Belgium'>Belgium</option>
                                        <option value='Belize'>Belize</option>
                                        <option value='Benin'>Benin</option>
                                        <option value='Bhutan'>Bhutan</option>
                                        <option value='Bolivia'>Bolivia</option>
                                        <option value='Bosnia and Herzegovina'>Bosnia and Herzegovina</option>
                                        <option value='Botswana'>Botswana</option>
                                        <option value='Brazil'>Brazil</option>
                                        <option value='Brunei'>Brunei</option>
                                        <option value='Bulgaria'>Bulgaria</option>
                                        <option value='Burkina Faso'>Burkina Faso</option>
                                        <option value='Burundi'>Burundi</option>
                                        <option value='Cabo Verde'>Cabo Verde</option>
                                        <option value='Cambodia'>Cambodia</option>
                                        <option value='Cameroon'>Cameroon</option>
                                        <option value='Canada'>Canada</option>
                                        <option value='Central African Republic'>Central African Republic</option>
                                        <option value='Chad'>Chad</option>
                                        <option value='Chile'>Chile</option>
                                        <option value='China'>China</option>
                                        <option value='Colombia'>Colombia</option>
                                        <option value='Comoros'>Comoros</option>
                                        <option value='Congo'>Congo</option>
                                        <option value='Costa Rica'>Costa Rica</option>
                                        <option value='Croatia'>Croatia</option>
                                        <option value='Cuba'>Cuba</option>
                                        <option value='Cyprus'>Cyprus</option>
                                        <option value='Czech Republic'>Czech Republic</option>
                                        <option value='Denmark'>Denmark</option>
                                        <option value='Djibouti'>Djibouti</option>
                                        <option value='Dominica'>Dominica</option>
                                        <option value='Dominican Republic'>Dominican Republic</option>
                                        <option value='Ecuador'>Ecuador</option>
                                        <option value='Egypt'>Egypt</option>
                                        <option value='El Salvador'>El Salvador</option>
                                        <option value='Equatorial Guinea'>Equatorial Guinea</option>
                                        <option value='Eritrea'>Eritrea</option>
                                        <option value='Estonia'>Estonia</option>
                                        <option value='Eswatini'>Eswatini</option>
                                        <option value='Ethiopia'>Ethiopia</option>
                                        <option value='Fiji'>Fiji</option>
                                        <option value='Finland'>Finland</option>
                                        <option value='France'>France</option>
                                        <option value='Gabon'>Gabon</option>
                                        <option value='Gambia'>Gambia</option>
                                        <option value='Georgia'>Georgia</option>
                                        <option value='Germany'>Germany</option>
                                        <option value='Ghana'>Ghana</option>
                                        <option value='Greece'>Greece</option>
                                        <option value='Grenada'>Grenada</option>
                                        <option value='Guatemala'>Guatemala</option>
                                        <option value='Guinea'>Guinea</option>
                                        <option value='Guinea-Bissau'>Guinea-Bissau</option>
                                        <option value='Guyana'>Guyana</option>
                                        <option value='Haiti'>Haiti</option>
                                        <option value='Honduras'>Honduras</option>
                                        <option value='Hungary'>Hungary</option>
                                        <option value='Iceland'>Iceland</option>
                                        <option value='India'>India</option>
                                        <option value='Indonesia'>Indonesia</option>
                                        <option value='Iran'>Iran</option>
                                        <option value='Iraq'>Iraq</option>
                                        <option value='Ireland'>Ireland</option>
                                        <option value='Israel'>Israel</option>
                                        <option value='Italy'>Italy</option>
                                        <option value='Jamaica'>Jamaica</option>
                                        <option value='Japan'>Japan</option>
                                        <option value='Jordan'>Jordan</option>
                                        <option value='Kazakhstan'>Kazakhstan</option>
                                        <option value='Kenya'>Kenya</option>
                                        <option value='Kiribati'>Kiribati</option>
                                        <option value='Kosovo'>Kosovo</option>
                                        <option value='Kuwait'>Kuwait</option>
                                        <option value='Kyrgyzstan'>Kyrgyzstan</option>
                                        <option value='Laos'>Laos</option>
                                        <option value='Latvia'>Latvia</option>
                                        <option value='Lebanon'>Lebanon</option>
                                        <option value='Lesotho'>Lesotho</option>
                                        <option value='Liberia'>Liberia</option>
                                        <option value='Libya'>Libya</option>
                                        <option value='Liechtenstein'>Liechtenstein</option>
                                        <option value='Lithuania'>Lithuania</option>
                                        <option value='Luxembourg'>Luxembourg</option>
                                        <option value='Madagascar'>Madagascar</option>
                                        <option value='Malawi'>Malawi</option>
                                        <option value='Malaysia'>Malaysia</option>
                                        <option value='Maldives'>Maldives</option>
                                        <option value='Mali'>Mali</option>
                                        <option value='Malta'>Malta</option>
                                        <option value='Marshall Islands'>Marshall Islands</option>
                                        <option value='Mauritania'>Mauritania</option>
                                        <option value='Mauritius'>Mauritius</option>
                                        <option value='Mexico'>Mexico</option>
                                        <option value='Micronesia'>Micronesia</option>
                                        <option value='Moldova'>Moldova</option>
                                        <option value='Monaco'>Monaco</option>
                                        <option value='Mongolia'>Mongolia</option>
                                        <option value='Montenegro'>Montenegro</option>
                                        <option value='Morocco'>Morocco</option>
                                        <option value='Mozambique'>Mozambique</option>
                                        <option value='Myanmar'>Myanmar</option>
                                        <option value='Namibia'>Namibia</option>
                                        <option value='Nauru'>Nauru</option>
                                        <option value='Nepal'>Nepal</option>
                                        <option value='Netherlands'>Netherlands</option>
                                        <option value='New Zealand'>New Zealand</option>
                                        <option value='Nicaragua'>Nicaragua</option>
                                        <option value='Niger'>Niger</option>
                                        <option value='Nigeria'>Nigeria</option>
                                        <option value='North Korea'>North Korea</option>
                                        <option value='North Macedonia'>North Macedonia</option>
                                        <option value='Norway'>Norway</option>
                                        <option value='Oman'>Oman</option>
                                        <option value='Pakistan'>Pakistan</option>
                                        <option value='Palau'>Palau</option>
                                        <option value='Palestine'>Palestine</option>
                                        <option value='Panama'>Panama</option>
                                        <option value='Papua New Guinea'>Papua New Guinea</option>
                                        <option value='Paraguay'>Paraguay</option>
                                        <option value='Peru'>Peru</option>
                                        <option value='Philippines'>Philippines</option>
                                        <option value='Poland'>Poland</option>
                                        <option value='Portugal'>Portugal</option>
                                        <option value='Qatar'>Qatar</option>
                                        <option value='Romania'>Romania</option>
                                        <option value='Russia'>Russia</option>
                                        <option value='Rwanda'>Rwanda</option>
                                        <option value='Saint Kitts and Nevis'>Saint Kitts and Nevis</option>
                                        <option value='Saint Lucia'>Saint Lucia</option>
                                        <option value='Saint Vincent and the Grenadines'>Saint Vincent and the Grenadines</option>
                                        <option value='Samoa'>Samoa</option>
                                        <option value='San Marino'>San Marino</option>
                                        <option value='Sao Tome and Principe'>Sao Tome and Principe</option>
                                        <option value='Saudi Arabia'>Saudi Arabia</option>
                                        <option value='Senegal'>Senegal</option>
                                        <option value='Serbia'>Serbia</option>
                                        <option value='Seychelles'>Seychelles</option>
                                        <option value='Sierra Leone'>Sierra Leone</option>
                                        <option value='Singapore'>Singapore</option>
                                        <option value='Slovakia'>Slovakia</option>
                                        <option value='Slovenia'>Slovenia</option>
                                        <option value='Solomon Islands'>Solomon Islands</option>
                                        <option value='Somalia'>Somalia</option>
                                        <option value='South Africa'>South Africa</option>
                                        <option value='South Korea'>South Korea</option>
                                        <option value='South Sudan'>South Sudan</option>
                                        <option value='Spain'>Spain</option>
                                        <option value='Sri Lanka'>Sri Lanka</option>
                                        <option value='Sudan'>Sudan</option>
                                        <option value='Suriname'>Suriname</option>
                                        <option value='Sweden'>Sweden</option>
                                        <option value='Switzerland'>Switzerland</option>
                                        <option value='Syria'>Syria</option>
                                        <option value='Taiwan'>Taiwan</option>
                                        <option value='Tajikistan'>Tajikistan</option>
                                        <option value='Tanzania'>Tanzania</option>
                                        <option value='Thailand'>Thailand</option>
                                        <option value='Timor-Leste'>Timor-Leste</option>
                                        <option value='Togo'>Togo</option>
                                        <option value='Tonga'>Tonga</option>
                                        <option value='Trinidad and Tobago'>Trinidad and Tobago</option>
                                        <option value='Tunisia'>Tunisia</option>
                                        <option value='Turkey'>Turkey</option>
                                        <option value='Turkmenistan'>Turkmenistan</option>
                                        <option value='Tuvalu'>Tuvalu</option>
                                        <option value='Uganda'>Uganda</option>
                                        <option value='Ukraine'>Ukraine</option>
                                        <option value='United Arab Emirates'>United Arab Emirates</option>
                                        <option value='United Kingdom'>United Kingdom</option>
                                        <option value='United States of America'>United States of America</option>
                                        <option value='Uruguay'>Uruguay</option>
                                        <option value='Uzbekistan'>Uzbekistan</option>
                                        <option value='Vanuatu'>Vanuatu</option>
                                        <option value='Vatican City'>Vatican City</option>
                                        <option value='Venezuela'>Venezuela</option>
                                        <option value='Vietnam'>Vietnam</option>
                                        <option value='Yemen'>Yemen</option>
                                        <option value='Zambia'>Zambia</option>
                                        <option value='Zimbabwe'>Zimbabwe</option>
                                    </select>

                                </div>

                                <div className='flex justify-center  mt-[3rem]'>
                                    <label htmlFor='pincode' >Pincode: </label>
                                </div>
                                <div className='lg:ml-[3rem] lg:mr-[3rem]'>

                                    <input
                                        className='p-2  text-black  uppercase  w-full  '
                                        type='number'
                                        name='pincode'
                                        placeholder='Pincode'
                                        value={formData.pincode}
                                        onChange={onChange}

                                    />
                                </div>



                                <div className='flex justify-center  mt-[3rem]'>


                                    <label htmlFor='phone' >Phone Number: </label>
                                </div>
                                <div className='lg:ml-[3rem] lg:mr-[3rem]'>

                                    <input
                                        className='p-2  text-black  uppercase  w-full  '
                                        type='number'
                                        name='phone'
                                        placeholder='phone'
                                        value={formData.phone}
                                        onChange={onChange}

                                    />
                                </div>

                                <div className='flex justify-center  mt-[3rem]'>


                                    <label htmlFor='comment' >Comment: </label>
                                </div>
                                <div className='lg:ml-[3rem] lg:mr-[3rem]'>

                                    <input
                                        className='p-2  text-black  uppercase  w-full  '
                                        type='text'
                                        name='comment'
                                        placeholder='comment'
                                        value={formData.comment}
                                        onChange={onChange}

                                    />
                                </div>

                                <div className='flex justify-center mt-[3rem] text-red-400'>
                                    {showErrorMessage && (
                                        <p className=''>
                                            Please fill all the details
                                        </p>
                                    )}
                                </div>
                                <Link to='/payment'>
                                    <div className='p-4 m-[3rem] '>

                             
                            
                                <button className='bg-blue-700 p-4  hover:scale-[110%] transition duration-700 ease-in-out hover:bg-blue-900 w-full'> Donate </button>
                                </div>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}
