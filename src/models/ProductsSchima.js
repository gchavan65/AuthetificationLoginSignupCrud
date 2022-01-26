import  mongoose  from "mongoose";

const producstschema = new mongoose.Schema({
    id:String,
    url:String,
    title:String,
    price:String,
    description:String,
    discount:String,
    tagline:String,
})

export const product= mongoose.model('product' , producstschema)