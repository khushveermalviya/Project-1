import mongoose from "mongoose";
import dotenv, { config } from "dotenv"
dotenv.config({path:"config.dotenv"})

const dbconnect= async()=>{
    try{
const  connected= await mongoose.connect(`${process.env.MONGODB_URI}`)
console.log(`${connected.host }/connection succefull ${process.env.PORT}`)
console.log()

    }
 catch (error) {
    throw error;
    console.error(error);
    process.exit(1);
}

}

export default dbconnect