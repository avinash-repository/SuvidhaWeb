import { Link } from "react-router-dom";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-black text-white  pt-14 pb-3 md:text-xl ">
            <div className="flex justify-between m-5 flex-col md:flex-row gap-[50px] md:gap-0 ">
                {/* LEFT START */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    {/* MENU START */}
                    <div className="flex flex-col gap-3">
                        <div className=" font-medium uppercase ">
                            Suvidha Foundation (Suvidha mahila Mandal)
                        </div>
                        <div className=" text-white/[0.5] hover:text-white cursor-pointer">
                            Suvidha Mahila Mandal, Walni Ward No. 1, Jai Bhole Nagar, Walni, Saoner
                        </div>
                        <div className=" text-white/[0.5] hover:text-white cursor-pointer">
                            Nagpur, Maharashtra 441102
                        </div>

                    </div>

                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className=" font-medium uppercase ">
                             Useful Links
                            </div>
                            <Link to='/who-we-are'>
                                <div className=" text-white/[0.5] hover:text-white cursor-pointer">
                                    About Us
                                </div>

                            </Link>
                            <Link to='/partner/contact-us'>

                                <div className=" text-white/[0.5] hover:text-white cursor-pointer">
                                    Contact Us
                                </div>

                            </Link>
                            <Link to='/internship'>
                                <div className=" text-white/[0.5] hover:text-white cursor-pointer">
                                    Our Internship
                                </div>

                            </Link>
                            <Link to='/partner'>
                                <div className=" text-white/[0.5] hover:text-white cursor-pointer">
                                  Partner with Us
                                </div>

                            </Link>
                            <Link to='/courses'>
                                <div className=" text-white/[0.5] hover:text-white cursor-pointer">
                              Study Material 
                                </div>

                            </Link>
                            <Link to='/donate'>
                                <div className=" text-white/[0.5] hover:text-white cursor-pointer">
                                Donate 
                                </div>

                            </Link>
                            <Link to='/certificate-verification'>
                                <div className=" text-white/[0.5] hover:text-white cursor-pointer">
                             Verify Certificate 
                                </div>

                            </Link>
        

                        </div>


                    </div>
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className=" font-medium uppercase ">
                        Admin 
                            </div>
                            <Link to='/admin-login'>
                                <div className=" text-white/[0.5] hover:text-white cursor-pointer">
                                Login
                                </div>

                            </Link>
                            <Link to=''>

                                <div className=" text-white/[0.5] hover:text-white cursor-pointer">
                                News   
                                </div>

                            </Link>
                   

                        </div>


                    </div>


                </div>



                <div className="flex gap-4 justify-center md:justify-start mr-20 ">
                    <div
                        onClick={() =>
                            window.open("https://facebook.com", "_blank")
                        }
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                    >
                        <FaFacebookF size={20} />
                    </div>
                    <div
                        onClick={() =>
                            window.open("https://twitter.com")
                        }
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                    >
                        <FaTwitter size={20} />
                    </div>
                    <div
                        onClick={() =>
                            window.open("https://youtube.com")
                        }
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                    >
                        <FaYoutube size={20} />
                    </div>

                    <div
                        onClick={() =>
                            window.open("https://instagram.com")
                        }
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaInstagram size={20} />
                    </div>
                </div>

            </div>
            <div className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                {/* LEFT START */}
                <div className="text-lg m-6 text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
                    ©  Suvidha Foundation (Suvidha Mahila Mandal) All Rights Reserved
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-2 m-5 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    <Link to="/refund-policy">


                        <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                            Refunds to Donations
                        </div>
                    </Link>
                    <Link to='/privacy-policy'>


                        <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                            Privacy Policy
                        </div>
                    </Link>
                </div>
                {/* RIGHT END */}
            </div>
        </footer>
    );
};

export default Footer;