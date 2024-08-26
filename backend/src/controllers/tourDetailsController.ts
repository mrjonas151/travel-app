import { Request, Response } from "express";
import { TourDetailsService } from "../services/tourDetailsService";

class PopularToursController {
  static async getAllPopularToursController(req: Request, res: Response) {
    const popularTours = await TourDetailsService.getAllPopularToursService();

    return res.json(popularTours);
  }

  static async getTourDetailsController(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const tour = await TourDetailsService.getTourDetailsService(id);
      if (!tour) {
        return res.status(404).json({ message: "Tour not found" });
      }
      return res.json(tour);
    } catch (error) {
      return res.status(500).json({ message: "Server error" });
    }
  }

}

export { PopularToursController };