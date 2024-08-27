import { Router } from "express";
import { PopularToursController } from "../controllers/tourDetailsController";

const tourDetailsRouter = Router();

tourDetailsRouter.get("/", PopularToursController.getAllPopularToursController);
tourDetailsRouter.get("/popular", PopularToursController.getPopularToursByTravelersQuantityController);
tourDetailsRouter.get("/:id", PopularToursController.getTourDetailsController);

export default tourDetailsRouter;