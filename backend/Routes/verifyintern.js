const express = require('express');
const router = express.Router();
const User =  require("../models/UserIntern");
const {body, validationResult} = require("express-validator");



router.post("/verifyintern"  , 
 [body('otp' , 'OTP should be of 6 digit number').isLength({min:6 , max:6}) ] ,
  async (req, res)=>{
     const errors= validationResult(req);

     if(!errors.isEmpty()){
          res.status(400).json({errors:errors.array()});
         
     }

     else{
          try{
               const  otpint = req.body.otp;
       
           
               const  userData = await User.findOne({otpint});
              
               if( otpint !== userData.otpint ){
                    res.status(400).json({ success:false , errors:"Invalid otp  "});
               }
               else{
                    await User.updateOne({otpint},  {verified:true});
       
                    res.json({success:true});
          

               }
       
       
       
           }
           catch(error){
                   console.log(error);
                   res.json({success:false});
                      
       
       
           }

     }
   
});



module.exports = router;
