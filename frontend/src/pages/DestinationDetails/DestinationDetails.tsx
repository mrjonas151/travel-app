import { useParams } from "react-router-dom"
import BackgroundComponent from "../../components/BackgroundComponent/BackgroundComponent"
import DestinationDetailComponent from "../../components/DestinationDetailComponent/DestinationDetailComponent"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import styles from "./DestinationDetails.module.css"
import Error from "../Error/Error"
import { useEffect, useState } from "react"
import { CountryDetailProps } from "../../components/DestinationDetailComponent/DestinationDetailComponent"
import api from "../../services/api"

const DestinationDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [country, setCountry] = useState<CountryDetailProps | null>(null);

  if (!id) {
    return <Error />;
  }

  const getCountryDetails = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/tourDetails/countries/${id}`);
      setCountry(response.data);  
    } catch (err) {
      setError('Error searching for tours');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountryDetails();
  }, [id]);

  if (loading) return <p>Waiting...</p>;
  if (error) return <p>{error}</p>;
  if(!country) return <p>Country not found</p>;
  
  return (
    <>
      <Header />
      <BackgroundComponent country={country.name} image={country.url_image} />
      <div className={styles.destinationComponent}>
        <DestinationDetailComponent id={country.id} name={country.name} travelers_quantity={country.travelers_quantity} url_image={country.url_image} latitude={country.latitude} longitude={country.longitude} min_weather={country.min_weather} max_weather={country.max_weather} overview_country={country.overview_country} overview_country_curiosities={country.overview_country_curiosities} language={country.language} currency={country.currency} area={country.area} population={country.population} time_zone={country.time_zone} time_to_travel={country.time_to_travel} capital={country.capital} />
      </div>
      <Footer />
    </>
  )
}

export default DestinationDetails