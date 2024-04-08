import Tokenheader from "../utlities/Tokenheader.js";
import VerifyToken from "../utlities/VerifyToken.js";
const isLoggedIn = (req, res, next) => {

const Token =Tokenheader(req);

 const decoded= VerifyToken(Token);
 if(!decoded){
    throw new Error("Not authorized, token failed");

 }
 else{
    req.userAuthId=decoded?.id;

 }
}
export default isLoggedIn;