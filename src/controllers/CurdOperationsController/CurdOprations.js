import { product } from "../../models/ProductsSchima.js";
import jwt from 'jsonwebtoken'

// Save data of the Products in database
export const addProducts = async (req, res) => {
   
    try{
     
        const exist = await product.findOne({
            title: req.body.title,
        })
        if(exist){
            return res.status(401).send('username is alredy exists')
        }
        
const newProdcut = req.body
  const newProducts = new product(newProdcut);
  await newProducts.save();
  res.status(200).json(`Product is Sucessfully Register ${req.body.title}`)
    }catch(e){
        console.log(`This is the Error:- ${e}`);
    }
          
}


// get all products
export const getProducts = async (req, res) => {
 
  try {
    const products = await product.find({});
    res.json(products);
  } catch (e) {
    console.log(`this is the error for products ${e}`);
  }
};


// Get products by id
export const getProductById = async (req, res) => {
  try {
      const products = await product.findOne({ 'id': req.params.id });
      res.json(products);
  }catch (error) {
    res.status(404).json({ message: error.message })
  }
}

// Save data of edited user in the database
export const UpdateProducts = async (req, res) => {
console.log({"id":req.params.id})

    try{
      await product.findOneAndUpdate({"id":req.params.id},{$set:{
        id:req.body.id,
        title:req.body.title,
        price:req.body.price,
        discount:req.body.discount,
        description:req.body.description,
       
        
      }} ,{new:true});
        res.status(201).json( {  
          id:req.body.id,
          title:req.body.title,
          price:req.body.price,
          discount:req.body.discount,
          description:req.body.description,
         });
          console.log(req.params.id)
    } catch (error){
        res.status(409).json({ message: error.message});     
    }

}




// deleting data of Products from the database
export const deleteProduct = async (req, res) => {
    try{
        const DeleteById = await product.deleteOne({'id':req.params.id })
        res.json(DeleteById);
      }catch(e){
        console.error(`this if error for indivisual products ${e}`)
      }
}

