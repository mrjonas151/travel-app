import BackgroundComponent from "../../components/BackgroundComponent/BackgroundComponent"
import DestinationDetailComponent from "../../components/DestinationDetailComponent/DestinationDetailComponent"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import styles from "./DestinationDetails.module.css"

const DestinationDetails = () => {
  return (
    <>
      <Header />
      <BackgroundComponent />
      <div className={styles.destinationComponent}>
        <DestinationDetailComponent />
      </div>
      <Footer />
    </>
  )
}

export default DestinationDetails