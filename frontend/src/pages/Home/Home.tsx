import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import SearchTravel from "../../components/SearchTravel/SearchTravel"
import styles from './Home.module.css'
import TextHome from "../../components/TextHome/TextHome"
import PopularToursComponent from "../../components/PopularToursComponent/PopularToursComponent"
import StatisticsComponent from "../../components/StatisticsComponent/StatisticsComponent"
import TopAttractionsComponent from "../../components/TopAttractionsComponent/TopAttractionsComponent"
import ChooseUs from "../../components/ChooseUsComponent/ChooseUs"
import TourTypeComponent from "../../components/TourTypeComponent/TourTypeComponent"
import TestimonialsComponent, { TestimonialComponentProps } from "../../components/TestimonialsComponent/TestimonialsComponent"
import TravelGuideComponent from "../../components/TravelGuideComponent/TravelGuideComponent"
import IconsComponent from "../../components/IconsComponent/IconsComponent"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { useEffect, useState } from "react"

import { TourTypeComponentProps } from "../../components/TourTypeComponent/TourTypeComponent"
import { TravelGuideComponentProps } from "../../components/TravelGuideComponent/TravelGuideComponent"
import { TourDetailComponentProps } from "../../components/TourDetailComponent/TourDetailComponent"
import api from "../../services/api"
import Error from "../Error/Error"

const Home = () => {
  const [tours, setTours] = useState<TourDetailComponentProps[]>([]);
  const [travelGuides, setTravelGuides] = useState<TravelGuideComponentProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [testimonials, setTestimonials] = useState<TestimonialComponentProps[]>([]);
  const [categories, setCategories] = useState<TourTypeComponentProps[]>([]);

  const getAllCategories = async () => {
    try {
      const response = await api.get('/categories');
      setCategories(response.data);
    } catch (err) {
      setError('Error searching categories');
    } finally {
      setLoading(false);
    }
  }

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

  const getAllTestimonials = async () => {
    try {
      const response = await api.get('/testimonials');
      setTestimonials(response.data);
    } catch (err) {
      setError('Error fetching testimonials');
    } finally {
      setLoading(false);
    }
  }

    const getTravelGuides = async () => {
    try {
      setLoading(true);
      const response = await api.get('/travelGuides');
      setTravelGuides(response.data.slice(0, 4));
    } catch (err) {
      setError('Error fetching travel guides');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllTours();
    getTravelGuides();
    getAllTestimonials();
    getAllCategories();
  }, []);

  if (loading) return <p></p>;
  if (error) return <Error />;


  return (
    <>
        <Header />
        <div className={styles.imageContainer}>
          <img src="https://firebasestorage.googleapis.com/v0/b/travel-app-d9bdb.appspot.com/o/air_balloon.png?alt=media&token=c8528a37-d3a3-4b5b-9c79-76aff69fdaa2" alt="Air Balloon" />
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
                  <TopAttractionsComponent quantity={6} />
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
              {categories.map((category) => (
                <SwiperSlide key={category.id}>
                  <TourTypeComponent
                    id={category.id}
                    title={category.title}
                    tour_quantity={category.tour_quantity}
                    price={category.price}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
          <div className="swiper-pagination"></div>
        </div>
        <div className={styles.testimonials}>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true}}
              modules={[Pagination]}
              className={styles.swiperContainerTesminonials}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <TestimonialsComponent
                    id={testimonial.id}
                    url_image1={testimonial.url_image1}
                    url_image2={testimonial.url_image2}
                    url_image3={testimonial.url_image3}
                    comment={testimonial.comment}
                    name={testimonial.name}
                    profession={testimonial.profession}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        <div >
          <div className={styles.popularTours}>
            <h2>Updates</h2>
            <h1>Latest Travel Guide</h1>
          </div>
          <div className={styles.travelGuideContainer}>
            {travelGuides.map(guide => (
                <TravelGuideComponent
                  key={guide.id}
                  id={guide.id}
                  url_image={guide.url_image}
                  day={guide.day}
                  month={guide.month}
                  year={guide.year}
                  title={guide.title}
                />
            ))}
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