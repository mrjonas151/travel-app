import styles from './DestinationDetailComponent.module.css';
import { FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import PopularToursComponent from '../PopularToursComponent/PopularToursComponent';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { TourDetailComponentProps } from '../TourDetailComponent/TourDetailComponent';
import api from '../../services/api';

interface DestinationDetailComponentProps {
  destinationId: string;
}

interface CountryDetailProps {
  id: string;
  name: string;
  travelers_quantity: number;
  url_image: string;
  latitude: number;
  longitude: number;
  min_weather: number;  
  max_weather: number;  
  overview_country: string;
  overview_country_curiosities: string;
  language: string;
  currency: string;
  area: string;  
  population: string;
  time_zone: string;
  time_to_travel: string;
}

const DestinationDetailComponent = ({destinationId}:DestinationDetailComponentProps) => {
  const [tours, setTours] = useState<TourDetailComponentProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [country, setCountry] = useState<CountryDetailProps | null>(null);

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

  const getCountryDetails = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/tourDetails/countries/${destinationId}`);
      setCountry(response.data);  
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
    getCountryDetails();
  }, [destinationId]);

  if (loading) return <p>Waiting...</p>;
  if (error) return <p>{error}</p>;
  if(!country) return <p>Country not found</p>;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.rowContent}>
        <div>
          <img src={country.url_image} className={styles.bigImage}/>
          <div className={styles.otherImages}> 
            <img src={country.url_image} className={styles.smallImage}/>
            <img src={country.url_image} className={styles.smallImage}/>
            <img src={country.url_image} className={styles.smallImage}/>
            <img src={country.url_image} className={styles.smallImage}/>
          </div>
        
        </div>
        <div className={styles.mapAndWeather}>
          <h2>City map</h2>
          <div className={styles.map}>
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{width: '405px', height: '100%'}}
                center={{
                  lat: country.latitude,
                  lng: country.longitude
                }}
                zoom={15}
              >
                <Marker 
                  position={{ lat: country.latitude, lng: country.longitude }}
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
        <h2>About {country.name}</h2>
        <p>{country.overview_country}.</p>
        <p>{country.overview_country_curiosities}.</p>
      </div>
      <div className={styles.basicContainer}>
        <h2>Basic Information</h2>
        <div className={styles.infos}>
          <div className={styles.rowItems}>
            <p>Country</p>
            <strong>{country.name}</strong>
          </div>
          <div className={styles.rowItems}>
            <p>Language</p>
            <strong>{country.language}</strong>
          </div>
          <div className={styles.rowItems}>
            <p>Currency</p>
            <strong>{country.currency}</strong>
          </div>
          <div className={styles.rowItems}>
            <p>Area</p>
            <strong>{country.area}</strong>
          </div>
          <div className={styles.rowItems}>
            <p>Population</p>
            <strong>{country.population}</strong>
          </div>
          <div className={styles.rowItems}>
            <p>Time Zone</p>
            <strong>{country.time_zone}</strong>
          </div>
          <div className={styles.rowItems}>
            <p>Time to Travel</p>
            <strong>{country.time_to_travel}</strong>
          </div>
        </div>
      </div>
      
      <div className={styles.seeAll}>
        <h1>Popular Tours in {country.name}</h1>
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