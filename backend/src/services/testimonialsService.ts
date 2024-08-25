import prisma from "../prisma/prismaClient";

class TestimonialsService {
  static async getAllTestimonialsService() {
    const testimonials = await prisma.testimonials.findMany({
      select: {
        id: true,
        url_image1: true,
        url_image2: true,
        url_image3: true,
        comment: true,
        name: true,
        profession: true,
      },
    });
    return testimonials;
  }
}

export { TestimonialsService };