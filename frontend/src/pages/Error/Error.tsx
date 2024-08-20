import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import planeError from "../../assets/planeError.gif"
import styles from "./Error.module.css"

const Error = () => {
  return (
    <>
      <Header /> 
      <img src={planeError} alt="planeError" className={styles.gif}/>
      <Footer />
    </>
  )
}

export default Error