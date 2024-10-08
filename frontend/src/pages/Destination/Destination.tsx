import BackgroundComponent from "../../components/BackgroundComponent/BackgroundComponent"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import SearchTravel from "../../components/SearchTravel/SearchTravel"
import TopAttractionsComponent from "../../components/TopAttractionsComponent/TopAttractionsComponent"
import styles from './Destination.module.css'

const Destination = () => {
  return (
    <>
      <Header />
      <BackgroundComponent />
      <div className={styles.searchContainer}>
          <SearchTravel />
      </div>
      <div className={styles.content}>
        <TopAttractionsComponent quantity={6} />
        <div className={`${styles.secondContent} ${styles.reversedContent}`}>
          <TopAttractionsComponent quantity={12} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Destination