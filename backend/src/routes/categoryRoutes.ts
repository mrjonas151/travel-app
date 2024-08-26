import { Router } from "express";
import { CategoryController } from "../controllers/categoryController";

const categoryRouter = Router();

categoryRouter.get("/", CategoryController.getAllCategoriesController);

export default categoryRouter;