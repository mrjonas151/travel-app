import { Request, Response } from "express";
import { TourDetailsService } from "../services/tourDetailsService";

class PopularToursController {
  static async getAllPopularToursController(req: Request, res: Response) {
    const popularTours = await TourDetailsService.getAllPopularToursService();

    return res.json(popularTours);
  }

  static async getPopularToursByTravelersQuantityController(req: Request, res: Response) {
    try {
      const popularTours = await TourDetailsService.getPopularCountriesByTravelersQuantityService();
      return res.json(popularTours);
    } catch (error) {
      return res.status(500).json({ message: "Server error" });
    }
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

  static async getPopularCountryByIdController(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const country = await TourDetailsService.getPopularCountryByIdService(id);
      if (!country) {
        return res.status(404).json({ message: "Country not found" });
      }
      return res.json(country);
    } catch (error) {
      return res.status(500).json({ message: "Server error" });
    }
  }

  static async getAllContinentsController(req: Request, res: Response) {
      try {
        const continents = await TourDetailsService.getAllContinentsService();
        return res.json(continents);
      } catch (error) {
        return res.status(500).json({ message: 'Error searching continents' });
      }
  }
}

export { PopularToursController };