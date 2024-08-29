import { Router } from "express";
import { PopularToursController } from "../controllers/tourDetailsController";

const tourDetailsRouter = Router();

tourDetailsRouter.get("/", PopularToursController.getAllPopularToursController);
tourDetailsRouter.get("/continents", PopularToursController.getAllContinentsController);
tourDetailsRouter.post("/:id/review", PopularToursController.createUserReviewController);
tourDetailsRouter.get("/popular", PopularToursController.getPopularToursByTravelersQuantityController);
tourDetailsRouter.get("/:id", PopularToursController.getTourDetailsController);
tourDetailsRouter.get("/countries/:id", PopularToursController.getPopularCountryByIdController);

export default tourDetailsRouter;