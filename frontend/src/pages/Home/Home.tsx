import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import SearchTravel from "../../components/SearchTravel/SearchTravel"
import styles from './Home.module.css'
import air_balloon from '../../assets/air_balloon.png'
import TextHome from "../../components/TextHome/TextHome"

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
        <div className={styles.content}>
          <h1>Resto do conteúdo etc, mais coisas aqui idk what will have here</h1>
          <h1>Resto do conteúdo etc, mais coisas aqui idk what will have here</h1>
          <h1>Resto do conteúdo etc, mais coisas aqui idk what will have here</h1>
          <h1>Resto do conteúdo etc, mais coisas aqui idk what will have here</h1>
          <h1>Resto do conteúdo etc, mais coisas aqui idk what will have here</h1>
          <h1>Resto do conteúdo etc, mais coisas aqui idk what will have here</h1>
        </div>
        <Footer />
    </>
  )
}

export default Home