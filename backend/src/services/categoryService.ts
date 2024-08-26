import prisma from "../prisma/prismaClient";

class CategoryService {
  static async getAllCategoriesService() {
    const categories = await prisma.category.findMany({
      select: {
        id: true,
        title: true,
        tour_quantity: true,
        price: true,
        tours:{
          select:{
            id: true,
            title: true,
          }
        }
      },
    });
    return categories;
  }
}

export { CategoryService };