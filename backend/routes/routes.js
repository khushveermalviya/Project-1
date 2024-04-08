import experess from "express";
import UserControl  from "../controller/UserRegisration.js";
import UserLogin from "../controller/UserLogin.js";
import dummy  from "../controller/Dummy.js";
import isLoggedIn from "../middleware/isLoggedIn.js";


const UserRoutes=experess.Router();
UserRoutes.post("/api/user/register",UserControl);
UserRoutes.post("/api/user/login",UserLogin);
UserRoutes.get("/api/user",isLoggedIn,dummy);

export default UserRoutes;  