import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import styles from './TourDetails.module.css'
import PopularToursComponent from "../../components/PopularToursComponent/PopularToursComponent"
import TourDetailComponent from "../../components/TourDetailComponent/TourDetailComponent"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const TourDetails = () => {
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
              <SwiperSlide><PopularToursComponent /></SwiperSlide>
              <SwiperSlide><PopularToursComponent /></SwiperSlide>
              <SwiperSlide><PopularToursComponent /></SwiperSlide>
              <SwiperSlide><PopularToursComponent /></SwiperSlide>
              <SwiperSlide><PopularToursComponent /></SwiperSlide>
              <SwiperSlide><PopularToursComponent /></SwiperSlide>

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