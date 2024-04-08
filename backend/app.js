import cors from 'cors';
import cookieParser from 'cookie-parser';
import express from 'express'
import dotenv from 'dotenv'
dotenv.config({path:"./config/config.env"})
const app= express();
app.use(cors({

    origin:process.env.CORS_ORIGIN
}))