import Data from "../modals/Data.js"
import statuses from 'statuses';
import bcrypt from "bcryptjs"




const Login=async(req,res)=>{
    const {email, password } = req.body;
const { message } = statuses;
const UserFind=await Data.findOne({
    email,
})
if(!UserFind){
return    res.json({
        msg:"invalid"
    })
}
res.json({
    msg:"good boy khushveer"
})


}
export default Login