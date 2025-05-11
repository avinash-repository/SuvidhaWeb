const mongoose = require("mongoose");
const {Schema} = mongoose;

const UserSchema = new Schema({

    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        default:"",
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    state:{
        type:String, 
        required:true
    },
    country:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    comment: {type:String}
        
    

})

module.exports = mongoose.model('donate' , UserSchema);