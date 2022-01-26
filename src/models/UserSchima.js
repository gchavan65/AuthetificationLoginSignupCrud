import mongoose from "mongoose";


export const userSchema = new mongoose.Schema({
    FullName:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20,
    },
    
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        min:5,
        max:20,
   } ,
   password:{
    type:String,
    required:true,
    trim:true,
    min:5,
    max:10,
   },
   phone:{
    type:String,
    required:true,
    trim:true,
    unique:true,
    min:10,
    max:10,
   }
})

const user = mongoose.model('user', userSchema)

export default user ;