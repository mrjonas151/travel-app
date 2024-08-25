import { Request, Response } from "express";
import { PopularToursService } from "../services/popularToursService";

class PopularToursController {
  static async getAllPopularToursController(req: Request, res: Response) {
    const popularTours = await PopularToursService.getAllPopularToursService();

    return res.json(popularTours);
  }
}

export { PopularToursController };