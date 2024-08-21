import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import SearchTravel from "../../components/SearchTravel/SearchTravel"
import styles from './Home.module.css'
import air_balloon from '../../assets/air_balloon.png'
import TextHome from "../../components/TextHome/TextHome"
import PopularToursComponent from "../../components/PopularToursComponent/PopularToursComponent"

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
        <Footer />
    </>
  )
}

export default Home