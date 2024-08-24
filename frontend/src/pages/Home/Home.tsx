import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import SearchTravel from "../../components/SearchTravel/SearchTravel"
import styles from './Home.module.css'
import air_balloon from '../../assets/air_balloon.png'
import TextHome from "../../components/TextHome/TextHome"
import PopularToursComponent from "../../components/PopularToursComponent/PopularToursComponent"
import StatisticsComponent from "../../components/StatisticsComponent/StatisticsComponent"
import TopAttractionsComponent from "../../components/TopAttractionsComponent/TopAttractionsComponent"
import ChooseUs from "../../components/ChooseUsComponent/ChooseUs"
import TourTypeComponent from "../../components/TourTypeComponent/TourTypeComponent"
import TestimonialsComponent from "../../components/TestimonialsComponent/TestimonialsComponent"
import TravelGuideComponent from "../../components/TravelGuideComponent/TravelGuideComponent"
import IconsComponent from "../../components/IconsComponent/IconsComponent"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const Home = () => {

  return (
    <>
        <Header />
        <div className={styles.imageContainer}>
          <img src={air_balloon} alt="Air Balloon" />
          <div className={styles.textOverlay}>
            <TextHome />
          </div>
        </div>
        <div className={styles.searchContainer}>
          <SearchTravel />
        </div>
        <div className={styles.popularTours}>
          <div className={styles.rowLine}>
            <div className={styles.horizontalLineTexts}></div>
            <h2>Tours</h2>
            <div className={styles.horizontalLineTexts}></div>
          </div>
          <h1>Most Popular Tours</h1>
        </div>
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
        <div className={styles.horizontalLine}></div>
        <div className={styles.statistics}>
          <StatisticsComponent number={"120+"} text={"Total Destination"} />
          <StatisticsComponent number={"500+"} text={"Travel Packages"} />
          <StatisticsComponent number={"12k+"} text={"Total Travelers"} />
          <StatisticsComponent number={"7k+"} text={"Positive Reviews"} />
        </div>
        <div className={styles.topDestinationContainer}>
            <div className={styles.mainPopular}>
              <div className={styles.popularTours}>
                <div className={styles.rowLine}>
                  <div className={styles.horizontalLineTexts}></div>
                  <h2>Destination</h2>
                  <div className={styles.horizontalLineTexts}></div>
                </div>
                  <h1>Top Attractions Destination</h1>
                </div>
                <div className={styles.topAttractionsContainer}>
                  <div className={styles.item1}><TopAttractionsComponent /></div>
                  <div className={styles.item2}><TopAttractionsComponent /></div>
                  <div className={styles.item3}><TopAttractionsComponent /></div>
                  <div className={styles.item4}><TopAttractionsComponent /></div>
                  <div className={styles.item5}><TopAttractionsComponent /></div>
                  <div className={styles.item6}><TopAttractionsComponent /></div>
                </div>
            </div>
        </div>
        
        <div className={styles.chooseUs}>
          <ChooseUs />
        </div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.popularTours}>
          <div className={styles.rowLine}>
            <div className={styles.horizontalLineTexts}></div>
            <h2>Browse By Category</h2>
            <div className={styles.horizontalLineTexts}></div>
          </div>
          <h1>Pick A Tour Type</h1>
        </div>
        <div className={styles.swiperWrapperTourType}>
          <div className={styles.TourTypeCarousel}>
            <Swiper
              spaceBetween={30}
              slidesPerView={6}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className={styles.swiperContainer}
            >
              <SwiperSlide><TourTypeComponent /></SwiperSlide>
              <SwiperSlide><TourTypeComponent /></SwiperSlide>
              <SwiperSlide><TourTypeComponent /></SwiperSlide>
              <SwiperSlide><TourTypeComponent /></SwiperSlide>
              <SwiperSlide><TourTypeComponent /></SwiperSlide>
              <SwiperSlide><TourTypeComponent /></SwiperSlide>
              <SwiperSlide><TourTypeComponent /></SwiperSlide>
              <SwiperSlide><TourTypeComponent /></SwiperSlide>
            </Swiper>
            </div>
          <div className="swiper-pagination"></div>
        </div>
        <div className={styles.testimonials}>
          <TestimonialsComponent />
        </div>
        <div >
          <div className={styles.popularTours}>
            <h2>Updates</h2>
            <h1>Latest Travel Guide</h1>
          </div>
          <div className={styles.travelGuideContainer}>
            <TravelGuideComponent />
            <TravelGuideComponent />
            <TravelGuideComponent />
            <TravelGuideComponent />
          </div>
          <div className={styles.iconsComponent}>
            <IconsComponent />
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Home