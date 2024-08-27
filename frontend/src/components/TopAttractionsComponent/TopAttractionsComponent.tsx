import styles from "./TopAttractionsComponent.module.css";
import api from "../../services/api";
import { useEffect, useState } from "react";

interface TopAttractionsComponentProps {
  id: string;
  name: string;
  travelers_quantity: number;
  url_image: string;
  latitude: number;
  longitude: number;
  min_weather: number;
  max_weather: number;
}

interface quantityProps {
  quantity: number;
}

const TopAttractionsComponent = ({quantity}:quantityProps) => {
  const [topAttractions, setTopAttractions] = useState<TopAttractionsComponentProps[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const getTopAttractions = async () => {
    try {
      setLoading(true);
      const response = await api.get("/tourDetails/popular");
      const startIndex = quantity === 6 ? 0 : 6;
      const endIndex = quantity === 6 ? 6 : 12;

      setTopAttractions(response.data.slice(startIndex, endIndex));
    } catch (err) {
      setError("Error searching for top attractions");
    }finally{
      setLoading(false);
    }
  };

  const redirectCountry = (id: string) => {
    window.location.href = `/destination-details/${id}`;
  }

  useEffect(() => {
    getTopAttractions();
  }, []);

  if (loading) return <p>Waiting...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.cityGrid}>
      <div className={styles.cityCard1} onClick={() => redirectCountry(topAttractions[0].id)}>
        <img
          className={styles.cityImage}
          src={topAttractions[0].url_image}
          alt="Country image"
        />
        <div className={styles.cityInfo}>
          <p>{topAttractions[0].travelers_quantity} Travelers</p>
          <h2>{topAttractions[0].name}</h2>
        </div>
      </div>

      <div className={styles.cityCard2} onClick={() => redirectCountry(topAttractions[1].id)}>
        <img className={styles.cityImage} src={topAttractions[1].url_image} alt="Country image" />
        <div className={styles.cityInfo}>
          <p>{topAttractions[1].travelers_quantity} Travelers</p>
          <h2>{topAttractions[1].name}</h2>
        </div>
      </div>

      <div className={styles.cityCard3} onClick={() => redirectCountry(topAttractions[2].id)}>
        <img className={styles.cityImage} src={topAttractions[2].url_image} alt="Country image" />
        <div className={styles.cityInfo}>
          <p>{topAttractions[2].travelers_quantity} Travelers</p>
          <h2>{topAttractions[2].name}</h2>
        </div>
      </div>

      <div className={styles.cityCard4} onClick={() => redirectCountry(topAttractions[3].id)}>
        <img className={styles.cityImage} src={topAttractions[3].url_image} alt="Country image" />
        <div className={styles.cityInfo}>
          <p>{topAttractions[3].travelers_quantity} Travelers</p>
          <h2>{topAttractions[3].name}</h2>
        </div>
      </div>

      <div className={styles.cityCard5} onClick={() => redirectCountry(topAttractions[4].id)}>
        <img className={styles.cityImage} src={topAttractions[4].url_image} alt="Country image" />
        <div className={styles.cityInfo}>
          <p>{topAttractions[4].travelers_quantity} Travelers</p>
          <h2>{topAttractions[4].name}</h2>
        </div>
      </div>

      <div className={styles.cityCard6} onClick={() => redirectCountry(topAttractions[5].id)}>
        <img className={styles.cityImage} src={topAttractions[5].url_image} alt="Country image" />
        <div className={styles.cityInfo}>
          <p>{topAttractions[5].travelers_quantity} Travelers</p>
          <h2>{topAttractions[5].name}</h2>
        </div>
      </div>
    </div>
  );
};

export default TopAttractionsComponent;
