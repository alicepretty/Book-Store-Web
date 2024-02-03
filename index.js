import express from 'express';
import * as dotenv from "dotenv"; 
import {connectedDb} from "./config/dbConnection.js";

dotenv.config();
const app = express(); 
connectedDb();
const port = process.env.PORT || 3000;

app.listen(port , () => {
    console.log(`listening port ... ${port}`);
})


