import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import BookingComponent from "../../components/BookingComponent/BookingComponent"
import styles from './TourDetails.module.css'
import PopularToursComponent from "../../components/PopularToursComponent/PopularToursComponent"

const TourDetails = () => {
  return (
    <>
      <Header />
      <BookingComponent />
      <div className={styles.mainContainer}>
        
        <div className={styles.alsoLike}>
          <h1>You may also like...</h1>
          <div className={styles.tours}>
            <PopularToursComponent />
            <PopularToursComponent />
            <PopularToursComponent />
            <PopularToursComponent />
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}

export default TourDetails