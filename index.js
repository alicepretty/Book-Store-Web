import express from 'express';
import * as dotenv from "dotenv"; 
import {connectedDb} from "./config/dbConnection.js";
import booksRoutes from './routes/booksRoutes.js';
import categoriesRoutes from "./routes/bookCategoriesRoutes.js";


import fileupload from "express-fileupload";  

dotenv.config();
const app = express(); 
app.use(express.urlencoded({ extended: false }));
app.use(fileupload({ useTempFiles: true }));
app.use(express.json());

app.use("/books", booksRoutes); 
app.use("", categoriesRoutes);
connectedDb();
const port = process.env.PORT || 3000;

app.listen(port , () => {
    console.log(`listening port ... ${port}`);
})

