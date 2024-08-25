import { Request, Response } from "express";
import { TestimonialsService } from "../services/testimonialsService";

class TestimonialsController {
  static async getAllTestimonialsController(req: Request, res: Response) {
    const testimonials = await TestimonialsService.getAllTestimonialsService();

    return res.json(testimonials);
  }
}

export { TestimonialsController };