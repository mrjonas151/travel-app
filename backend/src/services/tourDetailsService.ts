import prisma from "../prisma/prismaClient";

class TourDetailsService {
  static async getAllPopularToursService() {
    const popularTours = await prisma.tour.findMany({
      select: {
        id: true,
        url_image: true,
        title: true,
        city: true,
        initial_date: true,
        final_date: true,
        initial_price: true,
        max_people: true,
        min_age: true,
        overview_city: true,
        overview_curiosities: true,
        latitude: true,
        longitude: true,
        averageRating: true,
        userRatings: {
          select: {
            id: true,
            user_name: true,
            user_email: true,
            services: true,
            locations: true,
            amentities: true,
            prices: true,
            comfort: true,
          },
        },
        category: {
          select: {
            id: true,
            title: true,
            tour_quantity: true,
            price: true,
          },
        },
        country: {
          select: {
            id: true,
            name: true,
            travelers_quantity: true,
            url_image: true,
            latitude: true,
            longitude: true,
            min_weather: true,
            max_weather: true,
          },
        },
      },
    });
    return popularTours;
  }

  static async getPopularCountriesByTravelersQuantityService() {
    const countries = await prisma.country.findMany({
      select: {
        id: true,
        name: true,
        travelers_quantity: true,
        url_image: true,
        latitude: true,
        longitude: true,
        min_weather: true,
        max_weather: true,
      },
      orderBy: {
        travelers_quantity: 'desc',
      },
    });

    return countries;
  }

  static async getPopularCountryByIdService(id: string) {
    const country = await prisma.country.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        travelers_quantity: true,
        url_image: true,
        latitude: true,
        longitude: true,
        min_weather: true,
        max_weather: true,
        overview_country: true,
        overview_country_curiosities: true,
        language: true,
        currency: true,
        area: true,
        population: true,
        time_zone: true,
        time_to_travel: true,
      },
    });
    return country;
  }

  static async getTourDetailsService(id: string) {
    const tour = await prisma.tour.findUnique({
      where: { id },
      select: {
        id: true,
        url_image: true,
        title: true,
        city: true,
        initial_date: true,
        final_date: true,
        initial_price: true,
        max_people: true,
        min_age: true,
        overview_city: true,
        overview_curiosities: true,
        latitude: true,
        longitude: true,
        averageRating: true,
        userRatings: {
          select: {
            id: true,
            user_name: true,
            user_email: true,
            services: true,
            locations: true,
            amentities: true,
            prices: true,
            comfort: true,
          },
        },
        category: {
          select: {
            id: true,
            title: true,
            tour_quantity: true,
            price: true,
          },
        },
        country: {
          select: {
            id: true,
            name: true,
            travelers_quantity: true,
            url_image: true,
            latitude: true,
            longitude: true,
            min_weather: true,
            max_weather: true,
          },
        },
      },
    });
    return tour;
  }

  static async getAllContinentsService() {
    const continents = await prisma.continent.findMany({
      select: {
        id: true,
        name: true,
        countries: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    return continents;
  }
}

export { TourDetailsService };
