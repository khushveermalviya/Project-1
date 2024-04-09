import app from './app/app.js';
import dotenv from 'dotenv';
dotenv.config({path:"./config/config.env"});
import connectDB from './DB/connection.js';
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));