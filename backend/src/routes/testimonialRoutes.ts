import { Router } from "express";
import { TestimonialsController } from "../controllers/testimonialsController";

const testimonialsRouter = Router();

testimonialsRouter.get("/", TestimonialsController.getAllTestimonialsController);

export default testimonialsRouter;