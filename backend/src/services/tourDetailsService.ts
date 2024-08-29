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
            comment: true,
            createdAt: true,
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
        tours: {
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
                comment: true,
                createdAt: true,
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
        },
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
            comment: true,
            createdAt: true,
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

static async createUserReviewService(tourId: string, review: {
  user_id: string,
  user_name: string,
  user_email: string,
  services: number,
  locations: number,
  amentities: number,
  prices: number,
  comfort: number,
  comment: string,
}) {
  try {
    const newReview = await prisma.userRating.create({
      data: {
        user_name: review.user_name,
        user_email: review.user_email,
        services: review.services,
        locations: review.locations,
        amentities: review.amentities,
        prices: review.prices,
        comfort: review.comfort,
        comment: review.comment,
        idTour: tourId,
        idUser: review.user_id, 
      },
    });
    return newReview;
  } catch (error) {
    console.error('Error creating review:', error); 
    throw error; 
  }
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
