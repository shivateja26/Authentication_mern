// const express = require('express');
import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './db/connectDB.js';

import authRoutes from "./routes/auth.route.js"

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json()); //this will allow us to parse incomming requests with json payloads(request:req.body)
app.use("/api/auth",authRoutes)
app.listen(PORT,()=>{
    connectDB();
    console.log("Server is running on port 5000",PORT);

});