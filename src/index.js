import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// Routes
import Routes from "./routes/routes.js";

//import Mongodb
import MongoConnection from "./db/db.js";
// default data
import ProductsDefault from '../src/DefaultData/Products.js'

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// // routes
  app.use("/", Routes);


// port no
const Port = 8000;

// Connect to MongoDB with Mongoose
MongoConnection();

  ProductsDefault()

// // Default Route
// app.get("/");

//  Start server
app.listen(Port, console.log(`Server running on Port ${Port}`));