import { Router } from "express";
import { PopularToursController } from "../controllers/popularToursController";

const popularTourRouter = Router();

popularTourRouter.get("/", PopularToursController.getAllPopularToursController);

export default popularTourRouter;