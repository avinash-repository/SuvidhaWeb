const mongoose = require("mongoose");
const {Schema} = mongoose;

const UserSchema = new Schema({

    email:{
        type:String,
        required:true
    },
    password:{
        type:String, 
        required:true
    },
    name:{
        type:String,
        default:""
    }

        
    

})

module.exports = mongoose.model('admin' , UserSchema);