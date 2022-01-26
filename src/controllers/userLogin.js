import User from '../models/UserSchima.js'
import jwt from 'jsonwebtoken';
import CryptoJs from 'crypto-js'
const Crypto = CryptoJs

  
  
export const userLogin = async (req, res) => {
  try{
let user = await User.findOne({email: req.body.email })

const bytes  = Crypto.AES.decrypt(user.password, 'Gaurav@123');
const originalPasswaord = bytes.toString(Crypto.enc.Utf8);


if(!originalPasswaord === req.body.password){
  res.status(404).json(`wrong eamil & password`)
}
const accesToken = jwt.sign({id:user._id, email:user.email},
  "Gaurav@123",{expiresIn:"5d"})

 const {password , ...info} = user._doc
res.status(200).json({...info , accesToken})

  }catch(e){
    console.log(`This is Login Error: ${e}`);
  }
}