import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config({path:"../config/config.dotenv"})
const VerifyToken=(token)=>{
    return jwt.verify(token, "IDGN4JJ"),(err, decode)=>{
        if(err){
            return console.log("error");
        }
        else{
            return decode;
        }
    }
}
export default VerifyToken;;