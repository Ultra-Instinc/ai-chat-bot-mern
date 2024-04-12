import { Router } from "express";
import { getAllUsers, login, signup } from "../controllers/user-controllers.js";
import { loginValidator, signupValidator, validate, } from "../utils/validators.js";
const userRouter = Router();
userRouter.route("/").get(getAllUsers);
userRouter.route("/signup").post(validate(signupValidator), signup);
userRouter.route("/login").post(validate(loginValidator), login);
export default userRouter;
//# sourceMappingURL=user-routes.js.map