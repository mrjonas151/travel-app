import styles from './TourDetailComponent.module.css'
import Booking_image from '../../assets/Booking_image.jpg'
import Share_tourDetail from '../../assets/Share_tourDetail.png'
import Heart_tourDetail from '../../assets/Heart_tourDetail.png'
import Location_tourDetail from '../../assets/Location_tourDetail.png'

const TourDetailComponent = () => {
  return (
    <div className={styles.mainContainer}>
        <img src={Booking_image} className={styles.image} />
        <div className={styles.placeDetails}>
          <div className={styles.locate}>
            <img src={Location_tourDetail} className={styles.icon} />
            <span>Budapest, Hungary</span>
            <p>View on map</p>
          </div>
          <div className={styles.share}>
            <img src={Share_tourDetail} className={styles.icon} />
            <img src={Heart_tourDetail} className={styles.icon} />
          </div>
        </div>
        <h1>Wonders of the West Coast & Kimberly</h1>
        <div>------------------------------</div>
        <div>
          <span>From</span>
          <strong>$104</strong>
          <span>Duration</span>
          <strong>7 days</strong>
          <span>Max People</span>
          <strong>25</strong>
          <span>Min Age</span>
          <strong>12+</strong>
          <span>Tour Type</span>
          <strong>Adventure, Beaches</strong>
          <span>Reviews</span>
          <strong>S4.8 (15 Reviews)</strong>
          <h2>Overview</h2>
          <p>Istanbul, the vibrant and historic city straddling the continents of Europe and Asia, offers an energizing blend of cultures, sights, and experiences that captivate every traveler’s heart. As Turkey’s cultural and economic hub, Istanbul seamlessly fuses its rich heritage with modernity, creating an unforgettable journey for visitors.</p>
          <h2>Map</h2>
        </div>
    </div>
  )
}

export default TourDetailComponent