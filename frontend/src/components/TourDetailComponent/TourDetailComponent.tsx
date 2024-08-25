import styles from './TourDetailComponent.module.css'
import Booking_image from '../../assets/Booking_image.jpg'
import Share_tourDetail from '../../assets/Share_tourDetail.png'
import Heart_tourDetail from '../../assets/Heart_tourDetail.png'
import Location_tourDetail from '../../assets/Location_tourDetail.png'
import { FaVideo, FaImage } from 'react-icons/fa'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import BookingForm from '../BookingForm/BookingForm'
import ReviewForm from '../ReviewForm/ReviewForm'
import person from '../../assets/person.jpg'
import white_star from '../../assets/white_star.png'
import RatingCard from '../RatingCard/RatingCard'

const TourDetailComponent = () => {

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

  return (
    <div className={styles.mainContainer}>
      <div className={styles.rowBook}>
        <div className={styles.imageContainer}>
          <img src={Booking_image} className={styles.image} alt="Booking" />
          <div className={styles.buttonContainer}>
            <button className={styles.button}>Video<FaVideo className={styles.buttonIcon}/></button>
            <button className={styles.button}>Gallery<FaImage className={styles.buttonIcon}/></button>
          </div>
        </div>
        <div className={styles.bookComponent}>
                <BookingForm />
            </div>
      </div>
      
      <div className={styles.placeDetails}>
        <div className={styles.locate}>
          <img src={Location_tourDetail} className={styles.icon} alt="Location" />
          <span>Budapest, Hungary</span>
          <p onClick={scrollToMap} style={{ cursor: 'pointer' }}>View on map</p>
        </div>
        <div className={styles.share}>
          <img src={Share_tourDetail} className={styles.icon} alt="Share" />
          <img src={Heart_tourDetail} className={styles.icon} alt="Heart" />
        </div>
      </div>
      <h1 className={styles.titleH1}>Wonders of the West Coast & Kimberly</h1>
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
          <strong className={styles.priceColor}>$104</strong>   
          <strong>7 days</strong>     
          <strong>25</strong>      
          <strong>12+</strong>     
          <strong>Adventure, Beaches</strong>      
          <strong><span className={styles.starPink}>★</span>4.8 (15 Reviews)</strong>
        </div>
        <div className={styles.OverviewContainer}>
          <h2>Overview</h2>
          <p>Istanbul, the vibrant and historic city straddling the continents of Europe and Asia, offers an energizing blend of cultures, sights, and experiences that captivate every traveler’s heart. As Turkey’s cultural and economic hub, Istanbul seamlessly fuses its rich heritage with modernity, creating an unforgettable journey for visitors.</p>
          <p>The city is home to some of the world’s most iconic landmarks, including the awe-inspiring Hagia Sophia, the majestic Blue Mosque, and the grand Topkapi Palace, each bearing witness to Istanbul’s illustrious past. Wandering through the bustling streets, you’ll find an array of delightful bazaars, where you can haggle for unique souvenirs, immerse yourself in the aromatic spices, and savor traditional Turkish delights.</p>
        </div>
          <div className={styles.mapContainer}>
            <h2>Map</h2>
            <div className={styles.maps}>
              {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{width: '1145px', height: '100%'}}
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
        </div>
        <div className={styles.reviewsContainer}>
            <h2>Average Reviews</h2>
            <div className={styles.mainRate}>
              <RatingCard rating={4.8} categories={[
                { name: 'Services', score: 3.2 },
                { name: 'Prices', score: 4.7 },
                { name: 'Locations', score: 2.1 },
                { name: 'Food', score: 4.8 },
                { name: 'Amenities', score: 4.6 },
                { name: 'Room comfort and quality', score: 4.7 }
              ]} />
            </div>
            <div>
              <div className={styles.showingNumber}>
                <h3>Showing 1 review</h3>
              </div>
              <div className={styles.mainCommentContainer}>
                <div className={styles.comment}>
                  <img src={person} alt="User profile" className={styles.profilePic} />
                  <div className={styles.commentContent}>
                    <span className={styles.commentDate}>March 20, 2022</span>
                    <strong className={styles.commentAuthor}>Sindy Simmons</strong>
                    <div className={styles.firstReview}>
                        <div className={styles.stars}>
                            <img src={white_star} />
                            <p>4.8</p>
                        </div>
                        <p className={styles.reviewP}>15 reviews</p>
                    </div>
                    <p className={styles.commentText}>This tour was absolutely amazing! The guide was knowledgeable and the sights were breathtaking. I highly recommend it to anyone looking to explore the beauty of the West Coast.</p>
                  </div>
                </div>
              </div>
              <div className={styles.reviewForm}>
                <ReviewForm />
              </div>
            </div>  
        </div>
      </div>
    </div>
  )
}

export default TourDetailComponent
