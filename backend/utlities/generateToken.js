import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config({path:"../config/config.dotenv"})
const generateToken=(id)=>{
    return jwt.sign({id},"IDGN4JJ",{expiresIn: "3d"});


}
export default generateToken;