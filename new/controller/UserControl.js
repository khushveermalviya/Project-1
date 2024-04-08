import Data from "../modals/Data.js"
import statuses from 'statuses';
import bcrypt from "bcryptjs"




const registration=async(req,res)=>{
    const { fullname, email, password } = req.body;
const { message } = statuses;
//check if user exist
const UserExist= await Data.findOne({email})
if(UserExist)
{
    res.json({
msg:"you are fool i think because you already registrater if forgot about so go and forot the password"
    })
};

const salt = await bcrypt.genSalt(10)
const hashPassword = await bcrypt.hash(password,salt)
const user=await Data.create({
    fullname,
    email,
    password:hashPassword,
});
res.status(201).json({
    status: "done mohit",
    message:"asdfasf",
    data: user
  });


}
export default registration