 import asynchandler from 'express-async-handler';
 import app from '../app/app.js ';
import Tokenheader from '../utlities/Tokenheader.js';
import VerifyTokenss  from '../utlities/VerifyToken.js';
 
 const dummy = asynchandler(async (req, res) => {
    const token = Tokenheader(req);
    const verify = VerifyTokenss(token);
    console.log("verify:", verify);
    res.json({
        
        msg:"done"});
});
export default dummy;