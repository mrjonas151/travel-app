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

const TopAttractionsComponent = () => {
  const [topAttractions, setTopAttractions] = useState<TopAttractionsComponentProps[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const getTopAttractions = async () => {
    try {
      setLoading(true);
      const response = await api.get("/tourDetails/popular");
      setTopAttractions(response.data.slice(0, 6));
    } catch (err) {
      setError("Error searching for top attractions");
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    getTopAttractions();
  }, []);

  if (loading) return <p>Waiting...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.cityGrid}>
      <div className={styles.cityCard1}>
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

      <div className={styles.cityCard2}>
        <img className={styles.cityImage} src={topAttractions[1].url_image} alt="Country image" />
        <div className={styles.cityInfo}>
          <p>{topAttractions[1].travelers_quantity} Travelers</p>
          <h2>{topAttractions[1].name}</h2>
        </div>
      </div>

      <div className={styles.cityCard3}>
        <img className={styles.cityImage} src={topAttractions[2].url_image} alt="Country image" />
        <div className={styles.cityInfo}>
          <p>{topAttractions[2].travelers_quantity} Travelers</p>
          <h2>{topAttractions[2].name}</h2>
        </div>
      </div>

      <div className={styles.cityCard4}>
        <img className={styles.cityImage} src={topAttractions[3].url_image} alt="Country image" />
        <div className={styles.cityInfo}>
          <p>{topAttractions[3].travelers_quantity} Travelers</p>
          <h2>{topAttractions[3].name}</h2>
        </div>
      </div>

      <div className={styles.cityCard5}>
        <img className={styles.cityImage} src={topAttractions[4].url_image} alt="Country image" />
        <div className={styles.cityInfo}>
          <p>{topAttractions[4].travelers_quantity} Travelers</p>
          <h2>{topAttractions[4].name}</h2>
        </div>
      </div>

      <div className={styles.cityCard6}>
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
