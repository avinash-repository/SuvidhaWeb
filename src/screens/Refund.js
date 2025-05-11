import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Link} from "react-router-dom";
export default function Refund() {
  return (
<>
    <div>
        <Navbar/>
    </div>
    <div>
            <div className='flex flex-col m-[1.5rem] '>
    <div className='flex lg:ml-[2rem]   mt-[3.5rem] text-4xl font-bold  '>
                  Refund To Donations
                </div>
                <div className='flex flex-col lg:ml-[2rem] mt-[1.5rem]   text-xl mb-[3rem]'>
                Donations to Amnesty International Limited via our website can only be refunded in exceptional circumstances. If Amnesty International (or its appointed supplier) has made an administrative error in handling your donation, for example if we’ve accidentally taken two payments, we will of course be happy to refund. However, please be aware that errors of this nature will normally be settled by your bank and credit/debit card issuer who will then claim the money back from us. If you believe we have made an error, please contact us at <Link to='https://www.canva.com/' target="_blank" >
                <div className='font-bold underline'>
                admin@suvidhafoundationedutech.org
            
                  </div>   
                  </Link>      
                
                 </div>
    </div>
    </div>
    <div>
        <Footer/>
    </div>
</>
  )
}
