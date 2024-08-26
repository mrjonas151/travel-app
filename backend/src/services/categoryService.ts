import prisma from "../prisma/prismaClient";

class CategoryService {
  static async getAllCategoriesService() {
    const categories = await prisma.category.findMany({
      select: {
        id: true,
        title: true,
        tour_quantity: true,
        price: true,
      },
    });
    return categories;
  }
}

export { CategoryService };