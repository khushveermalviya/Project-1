import moongose from "mongoose";
import dotenv from "dotenv"
dotenv.config({path:"..config/config.dotenv"})
const connection =async()=>
{
    try{
const dbconnect =await moongose.connect(`${process.env.MONGODB_URI}`)
console.log("connected",`${process.env.MONGODB_URI}`);
    }
    catch(error){

        console.log(error)
        process.exit(1)
    }
}
export default connection;