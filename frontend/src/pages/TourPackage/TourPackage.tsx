import BackgroundComponent from "../../components/BackgroundComponent/BackgroundComponent"
import CategoriesComponent from "../../components/CategoriesComponent/CategoriesComponent"
import DestinationsFilterComponent from "../../components/DestinationsFilterComponent/DestinationsFilterComponent"
import FilterByComponent from "../../components/FilterByComponent/FilterByComponent"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import ReviewFilterComponent from "../../components/ReviewFilterComponent/ReviewFilterComponent"
import SearchFilterComponent from "../../components/SearchFilterComponent/SearchFilterComponent"
import SearchTravel from "../../components/SearchTravel/SearchTravel"
import styles from './TourPackage.module.css'

const TourPackage = () => {
  return (
    <>
      <Header />
      <BackgroundComponent />
      <div className={styles.searchContainer}>
          <SearchTravel />
      </div>
      <div className={styles.content}>
        <SearchFilterComponent />
        <FilterByComponent />
        <CategoriesComponent />
        <DestinationsFilterComponent />
        <ReviewFilterComponent />
      </div>
      <Footer />
    </>
  )
}

export default TourPackage