import { products } from "../../Constants/ProductsConstant.js";
import {product} from '../models/ProductsSchima.js'

const ProductsDefault = async () =>{
    try{
         await product.deleteMany({});
        await product.insertMany(products);
        console.log("data imported ")

    }catch(e){
        console.log(`procts default Data Error :-${e}`)
    }
}
export default ProductsDefault