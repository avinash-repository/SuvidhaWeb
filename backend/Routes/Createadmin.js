const express= require("express");
const router = express();
const {body , validationResult} = require("express-validator");
const User = require("../models/Useradmin");

router.post('/createadmin' , [
    body('email' , 'Not a valid email').isEmail(),
    body('password', 'Password should be atleast 5 length ').isLength({min:5}) 
] , async (req, res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()});

    }

    else{
        try{
            await User.create(
                {
                        email:req.body.email,
                        password:req.body.password,
                        name:req.body.name  
                }
            );
            res.json({success:true , message:"Details submitted successfully"});


    }
    catch(errors){
        console.log(errors);
        res.status(400).json({success:false , message:"Internal server error"});
    }


    }

});

module.exports = router;

