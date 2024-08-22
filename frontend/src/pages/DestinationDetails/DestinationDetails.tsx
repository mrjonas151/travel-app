import BackgroundComponent from "../../components/BackgroundComponent/BackgroundComponent"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import SearchTravel from "../../components/SearchTravel/SearchTravel"
import styles from './DestinationDetails.module.css'

const DestinationDetails = () => {
  return (
    <>
      <Header />
      <BackgroundComponent />
      <div className={styles.searchContainer}>
          <SearchTravel />
      </div>
      <div className={styles.content}>
        <h1>Content</h1>
      </div>
      <Footer />
    </>
  )
}

export default DestinationDetails