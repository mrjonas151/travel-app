import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import styles from './TourDetails.module.css'
import PopularToursComponent, { PopularToursComponentProps } from "../../components/PopularToursComponent/PopularToursComponent"
import TourDetailComponent from "../../components/TourDetailComponent/TourDetailComponent"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from "react"
import api from "../../services/api"

const TourDetails = () => {
  const [tours, setTours] = useState<PopularToursComponentProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getAllTours = async () => {
    try {
      const response = await api.get('/popularTours');
      setTours(response.data);  
    } catch (err) {
      setError('Error searching for tours');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllTours();
  }, []);

  if (loading) return <p>Waiting...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />
      
      <div className={styles.mainContainer}>
        <div className={styles.details}>
          <TourDetailComponent />
        </div>
        <div className={styles.alsoLike}>
          <h1>You may also like...</h1>
          <div className={styles.swiperWrapper}>
            <div className={styles.popularToursCarousel}>
              <Swiper
                spaceBetween={30}
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
                    stars={tour.stars}
                    reviews={tour.reviews}
                    days={tour.days}
                    price={tour.price}
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