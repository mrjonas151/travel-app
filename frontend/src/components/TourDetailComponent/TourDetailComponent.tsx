import styles from './TourDetailComponent.module.css'
import Booking_image from '../../assets/Booking_image.jpg'
import Share_tourDetail from '../../assets/Share_tourDetail.png'
import Heart_tourDetail from '../../assets/Heart_tourDetail.png'
import Location_tourDetail from '../../assets/Location_tourDetail.png'
import { FaVideo, FaImage } from 'react-icons/fa'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

const TourDetailComponent = () => {

  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY || '',
  })


  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <img src={Booking_image} className={styles.image} alt="Booking" />
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Video<FaVideo className={styles.buttonIcon}/></button>
          <button className={styles.button}>Gallery<FaImage className={styles.buttonIcon}/></button>
        </div>
      </div>
      <div className={styles.placeDetails}>
        <div className={styles.locate}>
          <img src={Location_tourDetail} className={styles.icon} alt="Location" />
          <span>Budapest, Hungary</span>
          <p>View on map</p>
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
          <strong>4.8 (15 Reviews)</strong>
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
                mapContainerStyle={{width: '100%', height: '100%'}}
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
            
        </div>
      </div>
    </div>
  )
}

export default TourDetailComponent
