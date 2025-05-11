const express = require('express');
const router = express.Router();
const User = require('../models/UserCertificate');


router.post('/verifycertificate' , async(req, res)=>{
        
        try{
                let code = req.body.code;
                let data = await User.findOne({code});

                if(!data){
                        res.status(400).json({ success:false, errors:"Invalid Code "});
                }

                else{
                        
                        res.json({success:true , data:data });

                }
        }
        catch(err){
            console.log(err);

        }
})

module.exports =  router;
