import user from "../modal/Modal.js"
import bcrypt from "bcryptjs"
const registration = async (req, res) => {
    const { Email, username, lastname, mobileNumber, Password } = req.body;

    const check = await user.findOne({
        Email,
    });

    if (check) {
        return res.json({
            msg: "already register"
        });
    } 
    const salt = await bcrypt.genSalt(10)
    const hashpassword=await bcrypt.hash(Password,salt)


        const create = await user.create({
            username,
            lastname,
            Email,
            mobileNumber,
            Password:hashpassword,
        });

    

        res.status(201).json({
            status: "done",
            msg: `registration done ${check.Email}`
        });
    }


export default registration;