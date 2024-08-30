import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import styles from './TourDetails.module.css'
import PopularToursComponent from "../../components/PopularToursComponent/PopularToursComponent"
import TourDetailComponent, { TourDetailComponentProps } from "../../components/TourDetailComponent/TourDetailComponent"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from "react"
import api from "../../services/api"
import { useParams } from "react-router-dom"

const TourDetails = () => {
  const { tour_id } = useParams<{ tour_id: string }>();
  const [tours, setTours] = useState<TourDetailComponentProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [tour, setTour] = useState<TourDetailComponentProps | null>(null);

    const getTourDetailsById = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/tourDetails/${tour_id}`);
      setTour(response.data);
    } catch (err) {
      setError('Error fetching tour details');
    } finally {
      setLoading(false);
    }
  };

  const getAllTours = async () => {
    try {
      const response = await api.get('/tourDetails');
      setTours(response.data);  
    } catch (err) {
      setError('Error searching for tours');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllTours();
    if (tour_id) {
      getTourDetailsById();
    }
  }, []);

  if (loading) return <p>Waiting...</p>;
  if (error) return <p>{error}</p>;
  if (!tour) return <p>No tour details found.</p>;

  return (
    <>
      <Header />
      
      <div className={styles.mainContainer}>
        <div className={styles.details}>
          <TourDetailComponent 
            id={tour.id}
              url_image={tour.url_image}
              city={tour.city}
              country={tour.country}
              title={tour.title}
              averageRating={tour.averageRating}
              userRatings={tour.userRatings}
              initial_date={tour.initial_date}
              final_date={tour.final_date}
              initial_price={tour.initial_price} 
              max_people={tour.max_people} 
              min_age={tour.min_age} 
              tour_type={tour.tour_type} 
              overview_city={tour.overview_city} 
              overview_curiosities={tour.overview_curiosities} 
              latitude={tour.latitude} 
              longitude={tour.longitude} 
              category={{
                id: tour.category.id,
                title: tour.category.title,
                tour_quantity: tour.category.tour_quantity,
                price: tour.category.price
              }}              
           />
        </div>
        <div className={styles.alsoLike}>
          <h1>You may also like...</h1>
          <div className={styles.swiperWrapper}>
            <div className={styles.popularToursCarousel}>
              <Swiper
                spaceBetween={0}
                slidesPerView={4}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className={styles.swiperContainer}
              >
              {tours.map((tour) => (
                <SwiperSlide key={Number(tour.id)}>
                  <PopularToursComponent
                    id={tour.id}
                    url_image={tour.url_image}
                    city={tour.city}
                    country={tour.country}
                    title={tour.title}
                    averageRating={tour.averageRating}
                    userRatings={tour.userRatings}
                    initial_date={tour.initial_date}
                    final_date={tour.final_date}
                    initial_price={tour.initial_price} 
                    max_people={tour.max_people} 
                    min_age={tour.min_age} 
                    tour_type={tour.tour_type} 
                    overview_city={tour.overview_city} 
                    overview_curiosities={tour.overview_curiosities} 
                    latitude={tour.latitude} 
                    longitude={tour.longitude} 
                    category={{
                      id: tour.category.id,
                      title: tour.category.title,
                      tour_quantity: tour.category.tour_quantity,
                      price: tour.category.price
                    }}                
                  />
              </SwiperSlide>
              ))}

              </Swiper>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}

export default TourDetails