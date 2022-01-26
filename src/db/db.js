import mongoose from 'mongoose';

const MongoConnection = async() =>{
    const url =`mongodb+srv://Gaurav1:VuTbSoLRLHK3sbn1@cluster0.appeq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
try{
 await mongoose.connect(url,{
      //   useCreatendex: true, 
    //  useFindAndModify: false, 
   useNewUrlParser: true, 
   useUnifiedTopology: true
})
console.log('sucessfully connect MongoDBdatabase');
}catch(err){
    console.log("Mongodb Error is :-", err)
}
}

export default MongoConnection

