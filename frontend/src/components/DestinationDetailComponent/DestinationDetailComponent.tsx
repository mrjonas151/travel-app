import styles from './DestinationDetailComponent.module.css';
import maldives from '../../assets/maldives.jpg';
import { FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import PopularToursComponent from '../PopularToursComponent/PopularToursComponent';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { TourDetailComponentProps } from '../TourDetailComponent/TourDetailComponent';
import api from '../../services/api';

const DestinationDetailComponent = () => {
  const [tours, setTours] = useState<TourDetailComponentProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getAllTours = async () => {
    try {
      setLoading(true);
      const response = await api.get('/tourDetails');
      setTours(response.data);  
    } catch (err) {
      setError('Error searching for tours');
    } finally {
      setLoading(false);
    }
  };

  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY || '',
  })

  useEffect(() => {
    getAllTours();
  }, []);

  if (loading) return <p>Waiting...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.rowContent}>
        <div>
          <img src={maldives} className={styles.bigImage}/>
          <div className={styles.otherImages}> 
            <img src={maldives} className={styles.smallImage}/>
            <img src={maldives} className={styles.smallImage}/>
            <img src={maldives} className={styles.smallImage}/>
            <img src={maldives} className={styles.smallImage}/>
          </div>
        
        </div>
        <div className={styles.mapAndWeather}>
          <h2>City map</h2>
          <div className={styles.map}>
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{width: '405px', height: '100%'}}
                center={{
                  lat: -27.590824,
                  lng: -48.551262
                }}
                zoom={15}
              >
                <Marker 
                  position={{ lat: -27.590824, lng: -48.551262 }}
                  options={{ 
                    icon: {
                      url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
                    }
                  }}
                />
              </GoogleMap>
            ) : (
              <></>
            )}
          </div>
          <div className={styles.weather}>
            <h2>Weather</h2>
            <div className={styles.rowItemsWeather}>
              <span>Jan-Feb</span>
              <p>12°-18°C</p>
            </div>
            <div className={styles.horizontalLine}></div>
            <div className={styles.rowItemsWeather}>
              <span>Mar-Apr</span>
              <p>12°-18°C</p>
            </div>
            <div className={styles.horizontalLine}></div>
            <div className={styles.rowItemsWeather}>
              <span>May-Jun</span>
              <p>12°-18°C</p>
            </div>
            <div className={styles.horizontalLine}></div>
            <div className={styles.rowItemsWeather}>
              <span>Jul-Aug</span>
              <p>12°-18°C</p>
            </div>
            <div className={styles.horizontalLine}></div>
            <div className={styles.rowItemsWeather}>
              <span>Sep-Oct</span>
              <p>12°-18°C</p>
            </div>
            <div className={styles.horizontalLine}></div>
            <div className={styles.rowItemsWeather}>
              <span>Nov-Dec</span>
              <p>12°-18°C</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutContainer}>
        <h2>About UK</h2>
        <p>Istanbul, the vibrant and historic city straddling the continents of Europe and Asia, offers an energizing blend of cultures, sights, and experiences that captivate every traveler’s heart. As Turkey’s cultural and economic hub, Istanbul seamlessly fuses its rich heritage with modernity, creating an unforgettable journey for visitors.</p>
        <p>The city is home to some of the world’s most iconic landmarks, including the awe-inspiring Hagia Sophia, the majestic Blue Mosque, and the grand Topkapi Palace, each bearing witness to Istanbul’s illustrious past. Wandering through bustling streets, you’ll find an array of delightful bazaars where you can haggle for unique souvenirs, immerse yourself in aromatic spices, and savor traditional Turkish delights. As the sun sets, head to the banks of the Bosphorus strait and savor the view of Istanbul’s skyline, a true testament to its allure as both a crossroads between Europe and Asia. Prepare your taste buds for an unforgettable gastronomic adventure in Istanbul, where a delightful fusion of flavors awaits you at every turn.</p>
      </div>
      <div className={styles.basicContainer}>
        <h2>Basic Information</h2>
        <div className={styles.infos}>
          <div className={styles.rowItems}>
            <p>Country</p>
            <strong>Turkey</strong>
          </div>
          <div className={styles.rowItems}>
            <p>Language</p>
            <strong>Turkish, Kurdish, Arabic, Zaza</strong>
          </div>
          <div className={styles.rowItems}>
            <p>Currency</p>
            <strong>Turkish, Lira</strong>
          </div>
          <div className={styles.rowItems}>
            <p>Area</p>
            <strong>2,036 Square Miles</strong>
          </div>
          <div className={styles.rowItems}>
            <p>Population</p>
            <strong>15M</strong>
          </div>
          <div className={styles.rowItems}>
            <p>Time Zone</p>
            <strong>UTC+2</strong>
          </div>
          <div className={styles.rowItems}>
            <p>Time to Travel</p>
            <strong>May, June, July, August</strong>
          </div>
        </div>
      </div>
      
      <div className={styles.seeAll}>
        <h1>Popular Tours in UK</h1>
        <button>See All<FaArrowRight className={styles.icon}/></button>
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
  )
}

export default DestinationDetailComponent