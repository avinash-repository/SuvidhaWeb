const mongoose =  require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({

        name:{
            type:String,
            required:true
        },
        designation:{
            type:String,
            required:true
        },
        code:{
            type:String, 
            required:true
        },
        from:{
            type:String,
            required:true
        },


        to:{
            type:String,
            required:true
        }

})

module.exports = mongoose.model('certificate' , UserSchema);