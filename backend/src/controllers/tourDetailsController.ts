import { Request, Response } from "express";
import { TourDetailsService } from "../services/tourDetailsService";

class PopularToursController {
  static async getAllPopularToursController(req: Request, res: Response) {
    const popularTours = await TourDetailsService.getAllPopularToursService();

    return res.json(popularTours);
  }
}

export { PopularToursController };