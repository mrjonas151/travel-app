import { Router } from "express";
import { TravelGuideController } from "../controllers/travelGuideController";

const travelGuideRouter = Router();

travelGuideRouter.get("/", TravelGuideController.getAllTravelGuideController);

export default travelGuideRouter;