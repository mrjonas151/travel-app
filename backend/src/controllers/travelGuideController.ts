import { Request, Response } from "express";
import { TravelGuideService } from "../services/travelGuideService";

class TravelGuideController {
  static async getAllTravelGuideController(req: Request, res: Response) {
    const travelGuide = await TravelGuideService.getAllTravelGuideService();

    return res.json(travelGuide);
  }
}

export { TravelGuideController };