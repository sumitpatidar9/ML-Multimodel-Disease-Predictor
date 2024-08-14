
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
    
    email: {
        type: String,
        required: true,
    },

    password:{
        type: String,
        required: true,
    },

    files:[FileSchema],
});



const User = mongoose.model('User', UserSchema);

export {User};