import { Router } from 'express';
import AllControllers from '../controllers/index.controllers.js';

const router = Router();

// router.use(express.json());

router.get("/", AllControllers.GetController);

// router.listen(3000, () => {
//     console.log("Server is running on port 3000");
// })

router.post("/", AllControllers.PostController);

router.delete("/", AllControllers.DeleteController);

export default router;