// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AddressElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './App.css';

// Import your components
import Home from './screens/Home';
import Wherewework from './screens/Wherewework';
import India from './Countries/India';
import Uk from './Countries/Uk';
import Southafrica from './Countries/Southafrica';
import Germany from './Countries/Germany';
import Russia from './Countries/Russia';
import Myanmar from './Countries/Myanmar';
import Bangladesh from './Countries/Bangladesh';
import Japan from './Countries/Japan';
import Indonesia from './Countries/Indoneasia';
import Usa from './Countries/Usa';
import Brazil from './Countries/Brazil';
import Chile from './Countries/Chile';
import Australia from './Countries/Australia';
import Malaysia from './Countries/Malaysia';
import Whatwedo from './screens/Whatwedo';
import Members from './screens/Members';
import Whoweare from './screens/Whoweare';
import Tree from './Events/Tree';
import Fundraising from './Events/Fundraising';
import Animal from './Events/Animal';
import Clothes from './Events/Clothes';
import Food from './Events/Food';
import Sanitary from './Events/Sanitarypad';
import Workshop from './Events/Workshop';
import Donate from './screens/Donate';
import Internship from './screens/Internship';
import Interninfo from './screens/Interninfo';
import Verifyotp from './screens/Verifyotp';
import Privacypolicy from './screens/Privacypolicy';
import Refund from './screens/Refund';
import Createcert from './screens/Createcert';
import Adminlogin from './pages/Adminlogin';
import Partnerpage from './pages/Partnerpage';
import Partnercontact from './pages/Partnercontact';
import Verificationcert from './pages/Verificationcert';
import Payment from './pages/Payment';
import Courses from './pages/Courses';
import Tourguide from './courses/Tourguide';
import Ads from './courses/Ads';
import Translator from './courses/Translator';
import Transport from './courses/Transport';

import Nutritionist from './courses/Nutritionist';



import Fragrance from './courses/Fragrance';
import Swim from './courses/Swim';


const stripePromise = loadStripe('pk_test_51NHqv2SHlEMXRcpVvXM3F7ktdInt5Dcx9pTcvhMCME4Zog3cUcINMj2kC1Bcim9gVUeHRektbIqU7p1GM1S3ybud009EYqrSa8');

function App() {
  return (
    <Router>
      <Elements stripe={stripePromise}>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/where-we-work" element={<Wherewework />} />
            <Route exact path="/where-we-work/india" element={<India />} />
            <Route exact path="/where-we-work/south-africa" element={<Southafrica />} />
            <Route exact path="/where-we-work/uk" element={<Uk />} />
            <Route exact path="/where-we-work/germany" element={<Germany />} />
            <Route exact path="/where-we-work/russia" element={<Russia />} />
            <Route exact path="/where-we-work/myanmar" element={<Myanmar />} />
            <Route exact path="/where-we-work/bangladesh" element={<Bangladesh />} />
            <Route exact path="/where-we-work/japan" element={<Japan />} />
            <Route exact path="/where-we-work/indonesia" element={<Indonesia />} />
            <Route exact path="/where-we-work/usa" element={<Usa />} />
            <Route exact path="/where-we-work/brazil" element={<Brazil />} />
            <Route exact path="/where-we-work/chile" element={<Chile />} />
            <Route exact path="/where-we-work/australia" element={<Australia />} />
            <Route exact path="/where-we-work/malaysia" element={<Malaysia />} />
            <Route exact path="/what-we-do" element={<Whatwedo />} />
            <Route exact path="/who-we-are" element={<Whoweare />} />
            <Route exact path="/members" element={<Members />} />
            <Route exact path="/what-we-do/tree-plantation" element={<Tree />} />
            <Route exact path="/what-we-do/fundraising" element={<Fundraising />} />
            <Route exact path="/what-we-do/animal" element={<Animal />} />
            <Route exact path="/what-we-do/clothes" element={<Clothes />} />
            <Route exact path="/what-we-do/food" element={<Food />} />
            <Route exact path="/what-we-do/sanitary" element={<Sanitary />} />
            <Route exact path="/what-we-do/workshop" element={<Workshop />} />
            <Route exact path="/donate" element={<Donate />} />
            <Route exact path="/internship" element={<Internship />} />
            <Route exact path="/internship/apply" element={<Interninfo />} />
            <Route exact path='/otpverification' element={<Verifyotp />} />
            <Route exact path='/privacy-policy' element={<Privacypolicy />} />
            <Route exact path='/refund-policy' element={<Refund />} />
            <Route exact path='/create-certificate' element={<Createcert />} />
            <Route exact path='/admin-login' element={<Adminlogin />} />
            <Route exact path='/partner' element={<Partnerpage />} />
            <Route exact path='/partner/contact-us' element={<Partnercontact />} />
            <Route exact path='/certificate-verification' element={<Verificationcert />} />
            <Route exact path='/payment' element={<Payment />} />
            <Route exact path='/courses' element={<Courses />} />
            <Route exact path='/courses/tour-guide' element={<Tourguide />} />
            <Route exact path='/courses/nutritionist' element={<Nutritionist/>} />
            <Route exact path='/courses/ads' element={<Ads/>} />
            <Route exact path='/courses/fragrance' element={<Fragrance/>} />
            <Route exact path='/courses/swim' element={<Swim/>} />
            <Route exact path='/courses/translator' element={<Translator/>} />
            <Route exact path='/courses/transport' element={<Transport/>} />
           
           
          </Routes>
        </div>
      </Elements>
    </Router>
  );
}

export default App;
