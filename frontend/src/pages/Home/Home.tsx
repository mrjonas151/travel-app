import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import SearchTravel from "../../components/SearchTravel/SearchTravel"
import styles from './Home.module.css'

const Home = () => {
  return (
    <>
        <Header />
        <div className={styles.searchContainer}>
          <SearchTravel />
        </div>
        <Footer />
    </>
  )
}

export default Home