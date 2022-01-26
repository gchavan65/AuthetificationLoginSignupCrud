import User from '../models/UserSchima.js'
import CryptoJs from 'crypto-js'  

  
  export const userSignup = async(req, res)=>{
    try{
        const exist = await User.findOne({
            email: req.body.email,
        })
        if(exist){
            return res.status(401).send(`email: ${email} is alredy exist`)
        }
  // const user = await req.body;
  const newuser = new User({
    FullName:req.body.FullName,
    email:req.body.email,
    phone:req.body.phone,
    password:CryptoJs.AES.encrypt(req.body.password, 'Gaurav@123').toString(),
  });
  await newuser.save();
  
  res.status(200).json(`email: ${email} is Sucessfully Register`)
    }catch(e){
        console.log(`This is the Error:- ${e}`);
    }
          
  
  }
  