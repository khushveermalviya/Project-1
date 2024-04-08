import experess from "express"
import UserControl  from "../controller/UserControl.js"
import UserLogin from "../controller/UserLogin.js"

const UserRoutes=experess.Router()
UserRoutes.post("/api/Registration",UserControl)
UserRoutes.post("/api/login",UserLogin)
export default UserRoutes;