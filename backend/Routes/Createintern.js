const express = require('express');

const router = express.Router()
const User = require("../models/UserIntern");
const {body, validationResult} = require('express-validator');
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
        user: 'avinashbhuyan8989@gmail.com',
        pass: 'cjeb cdbg xoja nakj'
    }
});

router.post("/createintern", [ body('email' , 'Not a valid email id ').isEmail() ],

    async (req, res)=> {
 
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }


    else{
        const otp = Math.floor( Math.random() * 900000  + 100000 ); // 6-digit OTP random otp
        try {
            await User.create({
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                email:req.body.email,
                position:req.body.position,
                college:req.body.college,
                gender:req.body.gender,
                hqualification:req.body.hqualification,
                cqualification:req.body.cqualification,
                phone:req.body.phone,
                countrycode:req.body.countrycode,
                otpint:otp
                
            })

            const mailOptions = {
                from: 'avinashbhuyan8989@gmail.com',
                to: req.body.email,
                subject: 'OTP Verification',
                text: `Your OTP for email verification is: ${otp}`
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                     res.json({ success: false, message: 'Failed to send OTP' });
                }
                console.log('Email sent: ' + info.response);
                res.json({ success: true, message: 'OTP sent successfully' });
            });

                 res.json({ success: true , message:' Form  successfully submitteed'  });

        }

        catch (error) {
            console.log(error)
            res.json({success:false , message:`Failed to submit details ------- ${err} `});

        }

    }
   
    })



module.exports = router;