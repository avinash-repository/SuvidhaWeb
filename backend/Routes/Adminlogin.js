const express = require("express");
const router = express();
const { body, validationResult } = require("express-validator");
const User = require("../models/Useradmin");

router.post('/adminlogin', [
    body('email', 'Not a valid email').isEmail()

],
    async (req, res) => {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({errors:errors.array()});
            }

            else{
                try{
                    const {email , password} = req.body;
                    const data = await User.findOne({email});

                    if(!data){
                         res.status(400).json({success:false , errors:"Invalid email id and password"});
                    }
                    else{
                        if(data.password !== password){
                            res.status(400).json({success:false , errors:"Invalid email id and password "});
   
                       }
   

                    }
                    res.json({success:true, message:"Login Successful "});
                

            }
            catch(error){
                console.log(error);
                res.status(400).json({success:false , message:'Internal server error '});

            }

            }


          
    });

    module.exports = router;