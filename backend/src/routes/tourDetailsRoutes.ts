import { Router } from "express";
import { PopularToursController } from "../controllers/tourDetailsController";

const tourDetailsRouter = Router();

tourDetailsRouter.get("/", PopularToursController.getAllPopularToursController);
tourDetailsRouter.get("/:id", PopularToursController.getTourDetailsController);

export default tourDetailsRouter;