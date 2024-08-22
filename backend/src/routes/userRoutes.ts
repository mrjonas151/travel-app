import { Router } from "express";
import { UserController } from "../controllers/userController";

const router = Router();

router.post("/", UserController.createUserController);

export default router;