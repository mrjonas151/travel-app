import { useEffect, useState } from "react"
import BackgroundComponent from "../../components/BackgroundComponent/BackgroundComponent"
import CategoriesComponent from "../../components/CategoriesComponent/CategoriesComponent"
import DestinationsFilterComponent from "../../components/DestinationsFilterComponent/DestinationsFilterComponent"
import FilterByComponent from "../../components/FilterByComponent/FilterByComponent"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import PopularToursComponent, { PopularToursComponentProps } from "../../components/PopularToursComponent/PopularToursComponent"
import ReviewFilterComponent from "../../components/ReviewFilterComponent/ReviewFilterComponent"
import SearchFilterComponent from "../../components/SearchFilterComponent/SearchFilterComponent"
import SearchTravel from "../../components/SearchTravel/SearchTravel"
import styles from './TourPackage.module.css'
import api from "../../services/api"

const TourPackage = () => {
  const [tours, setTours] = useState<PopularToursComponentProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getAllTours = async () => {
    try {
      const response = await api.get('/popularTours');
      setTours(response.data);  
    } catch (err) {
      setError('Error searching for tours');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllTours();
  }, []);

  if (loading) return <p>Waiting...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />
      <BackgroundComponent />
      <div className={styles.searchContainer}>
          <SearchTravel />
      </div>
      <div className={styles.mainPage}>
        <div className={styles.content}>
          <div className={styles.rowContent}>
            <SearchFilterComponent />
            <div className={styles.rowFilters}>
              <p>{tours.length} Tours</p>
              <div>
                <span>Sort by</span>
                <select>
                  <option>Popularity</option>
                  <option>Price</option>
                  <option>Rating</option>
                </select>
              </div>
            </div>
            
          </div>
          
          <FilterByComponent />
          <CategoriesComponent />
          <DestinationsFilterComponent />
          <ReviewFilterComponent />
        </div>
        <div className={styles.allTours}>
            {tours.map((tour) => (
              <div key={tour.id} className={styles.popularTourItem}>
                <PopularToursComponent
                  id={tour.id}
                  url_image={tour.url_image}
                  city={tour.city}
                  country={tour.country}
                  title={tour.title}
                  stars={tour.stars}
                  reviews={tour.reviews}
                  days={tour.days}
                  price={tour.price}
                />
              </div>
            ))}
        </div>
        <div className={styles.space}>
          <h1>Teste</h1>
        </div>
      </div>
      
      <Footer />
    </>
  )
}

export default TourPackage