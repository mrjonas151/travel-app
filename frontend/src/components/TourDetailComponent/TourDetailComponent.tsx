import styles from './TourDetailComponent.module.css'
import Share_tourDetail from '../../assets/Share_tourDetail.png'
import Heart_tourDetail from '../../assets/Heart_tourDetail.png'
import Location_tourDetail from '../../assets/Location_tourDetail.png'
import { FaVideo, FaImage } from 'react-icons/fa'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import BookingForm from '../BookingForm/BookingForm'
import ReviewForm from '../ReviewForm/ReviewForm'
import white_star from '../../assets/white_star.png'
import RatingCard from '../RatingCard/RatingCard'
import { toast } from 'react-toastify'
import user_icon from '../../assets/user_icon.png'

export interface TourDetailComponentProps {
  id: string;
  url_image: string;
  title: string;
  city: string;
  initial_date: string;
  final_date: string;
  initial_price: number;
  max_people: number;
  min_age: number;
  tour_type: string;
  overview_city: string;
  overview_curiosities: string;
  latitude: number;
  longitude: number;
  averageRating: number;
  userRatings: {
    id: string;
    idTour: string;
    idUser: string;
    user_name: string;
    user_email: string;
    services: number;
    locations: number;
    amentities: number;
    prices: number;
    comfort: number;
    comment: string;
    createdAt: string;
  }[];
  category: {
    id: string;
    title: string;
    tour_quantity: number;
    price: number;
  };
    country: {
    id: string;
    name: string;
    travelers_quantity: number;
    url_image: string;
    latitude: number;
    longitude: number;
    min_weather: number;
    max_weather: number;
  };
}

const TourDetailComponent = ({ id, url_image, city, country, title, averageRating, userRatings, initial_date, final_date, initial_price, max_people, min_age, tour_type, overview_city, overview_curiosities, latitude, longitude, category}:TourDetailComponentProps) => {

  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY || '',
  })

  const scrollToMap = () => {
    window.scrollBy({
      top: 700,
      behavior: 'smooth'
    });
  };

  const copyToClipboard = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url); 
      toast.success('URL copied successfully!'); 
    } catch (error) {
      toast.error('Failed to copy URL!'); 
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.rowBook}>
        <div className={styles.imageContainer}>
          <img src={url_image} className={styles.image} alt="Booking" />
          <div className={styles.buttonContainer}>
            <button className={styles.button}>Video<FaVideo className={styles.buttonIcon}/></button>
            <button className={styles.button}>Gallery<FaImage className={styles.buttonIcon}/></button>
          </div>
        </div>
        <div className={styles.bookComponent}>
                <BookingForm price={initial_price} />
            </div>
      </div>
      
      <div className={styles.placeDetails}>
        <div className={styles.locate}>
          <img src={Location_tourDetail} className={styles.icon} alt="Location" />
          <span>{city}, {country.name}</span>
          <p onClick={scrollToMap} style={{ cursor: 'pointer' }}>View on map</p>
        </div>
        <div className={styles.share}>
          <img src={Share_tourDetail} className={styles.icon} alt="Share" onClick={copyToClipboard} />
          <img src={Heart_tourDetail} className={styles.icon} alt="Heart" />
        </div>
      </div>
      <h1 className={styles.titleH1}>{title}</h1>
      <div className={styles.horizontalLine}></div>
      <div>
        <div className={styles.rowItems}>
          <span>From</span>
          <span>Duration</span>
          <span>Max People</span>
          <span>Min Age</span>
          <span>Tour Type</span>
          <span>Reviews</span>
        </div>
        <div className={styles.rowItems}>
          <strong className={styles.priceColor}>${initial_price}</strong>   
          <strong>7 days</strong>     
          <strong>{max_people}</strong>      
          <strong>{min_age}+</strong>     
          <strong>{category.title}</strong>      
          <strong><span className={styles.starPink}>★</span>{averageRating} ({userRatings.length} Reviews)</strong>
        </div>
        <div className={styles.OverviewContainer}>
          <h2>Overview</h2>
          <p>{overview_city}.</p>
          <p>{overview_curiosities}.</p>
        </div>
          <div className={styles.mapContainer}>
            <h2>Map</h2>
            <div className={styles.maps}>
              {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{width: '1145px', height: '100%'}}
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
        </div>
        <div className={styles.reviewsContainer}>
            <h2>Average Reviews</h2>
          <div className={styles.mainRate}>
            <RatingCard
              rating={userRatings.length > 0 
              ? parseFloat((userRatings.reduce((sum, rating) => sum + (rating.services + rating.prices + rating.locations + rating.comfort + rating.amentities) / 5, 0) / userRatings.length).toFixed(1))
              : "-"}
              categories={[
                { name: 'Services', score: parseFloat((userRatings.reduce((sum, rating) => sum + rating.services, 0) / userRatings.length).toFixed(1)) || "-"},
                { name: 'Prices', score: parseFloat((userRatings.reduce((sum, rating) => sum + rating.prices, 0) / userRatings.length).toFixed(1)) || "-"},
                { name: 'Locations', score: parseFloat((userRatings.reduce((sum, rating) => sum + rating.locations, 0) / userRatings.length).toFixed(1)) || "-"},
                { name: 'Comfort', score: parseFloat((userRatings.reduce((sum, rating) => sum + rating.comfort, 0) / userRatings.length).toFixed(1)) || "-"},
                { name: 'Amenities', score: parseFloat((userRatings.reduce((sum, rating) => sum + rating.amentities, 0) / userRatings.length).toFixed(1)) || "-"},
              ]}
            />
            </div>
            <div>
              <div className={styles.showingNumber}>
                <h3>Showing {userRatings.length} reviews</h3>
              </div>
              <div className={styles.mainCommentContainer}>
                {userRatings.map((rating, index) => (
                  <div key={index} className={styles.comment}>
                    <img src={user_icon} alt="User profile" className={styles.profilePic} />
                    <div className={styles.commentContent}>
                      <span className={styles.commentDate}>
                        {new Date(rating.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      <strong className={styles.commentAuthor}>{rating.user_name}</strong>
                      <div className={styles.firstReview}>
                        <div className={styles.stars}>
                          <img src={white_star} alt="Rating Star" />
                          <p>{rating.services.toFixed(1)}</p>
                        </div>
                        <p className={styles.reviewP}>1 Reviews</p>
                      </div>
                      <p className={styles.commentText}>{rating.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.reviewForm}>
                <ReviewForm tourId={id} />
              </div>
            </div>  
        </div>
      </div>
    </div>
  )
}

export default TourDetailComponent
