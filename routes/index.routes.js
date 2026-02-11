import { Router } from 'express';
import AllControllers from '../controllers/index.controllers.js';
import authMiddleware from '../middleware/authMiddleware.js';

const studentRouter = Router();


studentRouter.get("/",authMiddleware, AllControllers.GetController);

studentRouter.post("/", AllControllers.PostController);

studentRouter.put("/", AllControllers.PutController);

studentRouter.delete("/", AllControllers.DeleteController);


export default studentRouter;