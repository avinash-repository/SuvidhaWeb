const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    firstname:{
        type:String, 
        required:true, 
    },
    lastname:{
        type:String,
        default:""
    
    },
    position:{
        type:String, 
   
    },
    college:{
        type:String, 
        required:true, 
    },
    email:{
        type:String, 
        required:true, 
    },
    gender:{
        type:String, 
       
    },
    hqualification:{
        type:String, 
        required:true, 
    },
    cqualification:{
        type:String, 
        required:true, 
    },

    otpint:{
        type:String, 
        default:""
    },
    phone:{
        type:String, 
        required:true, 
    },
    verified:{
        type:Boolean,
        default:false
    },

    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('intern', UserSchema)




