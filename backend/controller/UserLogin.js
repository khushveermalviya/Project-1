import user from "../modal/Modal.js"
import bcrypt from "bcryptjs";
import asynchandler from "express-async-handler"
import generateToken from "../utlities/generateToken.js";
const logins = asynchandler(async (req, res) => {
    const { Email: Email, Password: Password } = req.body;

    const login = await user.findOne({Email});
    console.log("req.body:", req.body);
    console.log("login:", login);
    
    try {
        if(login && await bcrypt.compare(Password, login.Password)){
            console.log("success");
         return   res.json({
                msg:'done bro done',
                login,
                token:generateToken(login?._id)

            })
           
        }
        else{
res.status(401);({
    msg:'Invalid email or password'

})
        }
    } catch (error) {
        console.error(error); 
        process.exit(1)
    }
});

export default logins;



; 
    