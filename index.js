import express from 'express';
import * as dotenv from "dotenv"; 
import {connectedDb} from "./config/dbConnection.js";
import booksRoutes from './routes/booksRoutes.js'

dotenv.config();
const app = express(); 
app.use(express.json());

app.use("/books", booksRoutes); 
connectedDb();
const port = process.env.PORT || 3000;

app.listen(port , () => {
    console.log(`listening port ... ${port}`);
})

