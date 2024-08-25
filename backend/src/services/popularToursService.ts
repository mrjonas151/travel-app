import prisma from "../prisma/prismaClient";

class PopularToursService {
  static async getAllPopularToursService() {
    const popularTours = await prisma.popularTours.findMany({
      select: {
        id: true,
        url_image: true,
        city: true,
        country: true,
        title: true,
        stars: true,
        reviews: true,
        days: true,
        price: true,
      },
    });
    return popularTours;
  }
}

export { PopularToursService };