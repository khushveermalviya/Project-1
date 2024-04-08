import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import dbconnect from "./config/dbconnect.js";
import app from "./app/app.js";
import UserRoutes from "./Routes/UserRoutes.js";
import { log } from 'console';
dotenv.config({path:"./config/config.dotenv"});


dbconnect();
app.use(express.json());
app.use('/', UserRoutes);



app.listen("5001",()=>{
  console.log("sone")
})

