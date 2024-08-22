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
          <h2>Tours</h2>
          <h1>Most Popular Tours</h1>
        </div>
        <div className={styles.places}>
          <PopularToursComponent />
          <PopularToursComponent />
          <PopularToursComponent />
          <PopularToursComponent />
          <PopularToursComponent />
        </div>
        <div className={styles.statistics}>
          <StatisticsComponent number={"120+"} text={"Total Destination"} />
          <StatisticsComponent number={"500+"} text={"Travel Packages"} />
          <StatisticsComponent number={"12k+"} text={"Total Travelers"} />
          <StatisticsComponent number={"7k+"} text={"Positive Reviews"} />
        </div>
        <div className={styles.popularTours}>
          <h2>Destination</h2>
          <h1>Top Attractions Destination</h1>
        </div>
        <div className={styles.topAttractionsContainer}>
          <TopAttractionsComponent />
          <TopAttractionsComponent />
          <TopAttractionsComponent />
          <TopAttractionsComponent />
          <TopAttractionsComponent />
          <TopAttractionsComponent />
        </div>
        <div className={styles.chooseUs}>
          <ChooseUs />
        </div>
        <div className={styles.popularTours}>
          <h2>Browse By Category</h2>
          <h1>Pick A Tour Type</h1>
        </div>
        <div className={styles.tourTypes}>
          <TourTypeComponent />
          <TourTypeComponent />
          <TourTypeComponent />
          <TourTypeComponent />
          <TourTypeComponent />
          <TourTypeComponent />
        </div>
        <div className={styles.testimonials}>
          <TestimonialsComponent />
        </div>
        <Footer />
    </>
  )
}

export default Home