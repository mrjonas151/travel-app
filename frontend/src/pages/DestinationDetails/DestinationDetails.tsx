import { useParams } from "react-router-dom"
import BackgroundComponent from "../../components/BackgroundComponent/BackgroundComponent"
import DestinationDetailComponent from "../../components/DestinationDetailComponent/DestinationDetailComponent"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import styles from "./DestinationDetails.module.css"
import Error from "../Error/Error"

const DestinationDetails = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Error />;
  }
  
  return (
    <>
      <Header />
      <BackgroundComponent />
      <div className={styles.destinationComponent}>
        <DestinationDetailComponent destinationId={id} />
      </div>
      <Footer />
    </>
  )
}

export default DestinationDetails