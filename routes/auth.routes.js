import {Router} from "express";
import AuthController from "../controllers/auth.controllers.js";
import authMiddleware from "../middleware/authmiddleware.js";

const authRouter = Router();

authRouter.post("/auth/login", AuthController.LoginController);
authRouter.post("/auth/register", AuthController.RegisterController);

authRouter.get("/me", authMiddleware, AuthController.GetMeController);
// authRouter.post("/auth/logout");

export default authRouter;