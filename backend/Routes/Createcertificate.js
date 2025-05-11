const express = require('express');
const router = express();
const User = require('../models/UserCertificate');
const { body, validationResult } = require("express-validator");



router.post('/createcertificate' , async (req,res )=>{


 
        try{

            await User.create({
                        name:req.body.name,
                        designation:req.body.designation,
                        from:req.body.from,
                        to:req.body.to,
                        code:req.body.code
            });

      
            res.json({success:true, message:'Details submitted successfully '});


        }
        catch(err){
            console.log(err);
            res.json({success:false , message:`Failed to submit details ------- ${err} `});
            
        }

});


module.exports = router;