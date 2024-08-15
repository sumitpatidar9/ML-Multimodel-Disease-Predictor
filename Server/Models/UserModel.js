
import mongoose from "mongoose";


const FileSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true,
    },

    content: {
        type: String,
        required: true,
    }
});



const UserSchema = new mongoose.Schema({

    name: {
        type:String,
        required: true,
    },

    lastname:{
        type: String,
        required: true,
    },

    username:{
        type: String,
        unique: true,
        required: true,
    },
    
    email: {
        type: String,
        unique: true,
        required: true,
    },

    password:{
        type: String,
        required: true,
    },
    
    gender:{
        type: String,
        required : true,
    },

    address: {
        type: String,
        required: true,
    },

   contact: {
    type: String,
    required: true,
   },

    files:[FileSchema],
});



const User = mongoose.model('User', UserSchema);

export {User};