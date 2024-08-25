import prisma from "../prisma/prismaClient";

class TravelGuideService {
    static async getAllTravelGuideService() {
        const travelGuide = await prisma.travelGuide.findMany({
        select: {
            id: true,
            url_image: true,
            month: true,
            day: true,
            year: true,
            title: true,
        },
        });
        return travelGuide;
    }
}

export { TravelGuideService };