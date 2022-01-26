

import express from "express";
import {userLogin} from '../controllers/userLogin.js'
import {userSignup} from '../controllers/userSignup.js'
import {getProducts,UpdateProducts,getProductById,deleteProduct,} from '../controllers/CurdOperationsController/CurdOprations.js'
import  VerifyToken  from "../Authentification/Auth.js";





const app = express()
const router = express.Router();
// Routes
router.post("/login", userLogin);
router.post("/signup", userSignup);
router.get("/getproducts",VerifyToken,getProducts)
router.get('/getproducts/:id', VerifyToken,getProductById);
router.put('/getupdateproduct/:id',VerifyToken,UpdateProducts)
router.delete('/deleteproducts/:id',VerifyToken,deleteProduct)



export default router;   