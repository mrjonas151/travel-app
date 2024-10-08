import styles from './DestinationDetailComponent.module.css';
import { FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import PopularToursComponent from '../PopularToursComponent/PopularToursComponent';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { TourDetailComponentProps } from '../TourDetailComponent/TourDetailComponent';
import api from '../../services/api';

export interface CountryDetailProps {
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
  capital?: string;
}

interface WeatherForecast {
  dt: number; 
  main: {
    temp: number;
    temp_min: number; 
    temp_max: number; 
  };
  weather: {
    description: string; 
    icon: string; 
  }[];
  dt_txt: string;
}

interface ForecastResponse {
  list: WeatherForecast[]; 
}

const DestinationDetailComponent = ({id, name, travelers_quantity, url_image, latitude, longitude, min_weather, max_weather, overview_country, overview_country_curiosities, language, currency, area, population, time_zone, time_to_travel, capital}:CountryDetailProps) => {
  const [tours, setTours] = useState<TourDetailComponentProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [forecast, setForecast] = useState<WeatherForecast[]>([]);
  const city = capital;

  const getAllTours = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/tourDetails/countries/${id}`);
      setTours(response.data.tours); 
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
    getWeatherData();
  }, [id, city]);

  const handleRedirectAllTours = () => {
    const formattedName = name.replace(/\s+/g, '-').toLowerCase();
    window.location.href = `/tour-package?country=${formattedName}`;
  };

  const getWeatherData = async () => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_APP_OPEN_WEATHER_API_KEY}&units=metric`;

    try {
      const res = await fetch(apiWeatherURL);
      const data: ForecastResponse = await res.json();

      const dailyForecastMap = data.list.reduce((acc, forecast) => {
        const date = new Date(forecast.dt * 1000).toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric',
        });

        if (!acc[date]) {
          acc[date] = [];
        }

        acc[date].push(forecast);
        return acc;
      }, {} as Record<string, WeatherForecast[]>);

      const dailyForecast = Object.values(dailyForecastMap).map((forecasts) => {
        const minTemp = Math.min(...forecasts.map((f) => f.main.temp_min));
        const maxTemp = Math.max(...forecasts.map((f) => f.main.temp_max));

        const { dt, weather, dt_txt } = forecasts[0];

        return {
          dt,
          main: {
            temp_min: minTemp,
            temp_max: maxTemp,
            temp: (minTemp + maxTemp) / 2,
          },
          weather,
          dt_txt, 
        };
      });

      setForecast(dailyForecast.slice(0, 5));
    } catch (error) {
      console.error('Error searching weather data:', error);
    }
  };


  if (loading) return <p>Waiting...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.rowContent}>
        <div>
          <img src={url_image} className={styles.bigImage}/>
          <div className={styles.otherImages}> 
            <img src={url_image} className={styles.smallImage}/>
            <img src={url_image} className={styles.smallImage}/>
            <img src={url_image} className={styles.smallImage}/>
            <img src={url_image} className={styles.smallImage}/>
          </div>
        
        </div>
        <div className={styles.mapAndWeather}>
          <h2>City map</h2>
          <div className={styles.map}>
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{width: '405px', height: '100%'}}
                center={{
                  lat: latitude,
                  lng: longitude
                }}
                zoom={15}
              >
                <Marker 
                  position={{ lat: latitude, lng: longitude }}
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
            <div>
              {forecast.map((day, index) => (
                <div key={index} className={styles.rowItemsWeather}>
                  <span>{new Date(day.dt * 1000).toLocaleDateString('en-US', {
                        weekday: 'short',
                        day: 'numeric',
                        month: 'long', 
                      })}:
                  </span>
                  <p>{Math.round(day.main.temp_min)}°C <strong>|</strong> {Math.round(day.main.temp_max)}°C</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutContainer}>
        <h2>About {name}</h2>
        <p>{overview_country}.</p>
        <p>{overview_country_curiosities}.</p>
      </div>
      <div className={styles.basicContainer}>
        <h2>Basic Information</h2>
        <div className={styles.infos}>
          <div className={styles.rowItems}>
            <p>Country</p>
            <strong>{name}</strong>
          </div>
          <div className={styles.rowItems}>
            <p>Language</p>
            <strong>{language}</strong>
          </div>
          <div className={styles.rowItems}>
            <p>Currency</p>
            <strong>{currency}</strong>
          </div>
          <div className={styles.rowItems}>
            <p>Area</p>
            <strong>{area}</strong>
          </div>
          <div className={styles.rowItems}>
            <p>Population</p>
            <strong>{population}</strong>
          </div>
          <div className={styles.rowItems}>
            <p>Time Zone</p>
            <strong>{time_zone}</strong>
          </div>
          <div className={styles.rowItems}>
            <p>Time to Travel</p>
            <strong>{time_to_travel}</strong>
          </div>
        </div>
      </div>
      
      <div className={styles.seeAll}>
        <h1>Popular Tours in {name}</h1>
        <button onClick={handleRedirectAllTours}>See All<FaArrowRight className={styles.icon}/></button>
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
                <SwiperSlide key={tour.id}>
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
                      category={tour.category}
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