import { Request, Response } from "express";
import { CategoryService } from "../services/categoryService";

class CategoryController {
  static async getAllCategoriesController(req: Request, res: Response) {
      const categories = await CategoryService.getAllCategoriesService();
      res.json(categories);
  }
}

export { CategoryController };