import styles from "./TourTypeComponent.module.css"
import { MdBackpack } from 'react-icons/md';
import { useNavigate } from "react-router-dom";

export interface TourTypeComponentProps {
  id: string;
  title: string;
  tour_quantity: number;
  price: number;
}

  const TourTypeComponent = ({title, tour_quantity, price}:TourTypeComponentProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`/tour-package?filter=${encodeURIComponent(title)}`);
    };

  return (
    <div className={styles.mainContainer} onClick={handleClick}>
        <div className={styles.content}>
            <div className={styles.overlay}></div>
            <MdBackpack size={50} className={styles.icon} />
            <div>
              <h2>{title}</h2>
              <p>{tour_quantity} Tours+</p>
            </div>
        </div>
        <div className={styles.price}>
            <p>From</p>
            <strong>${price}</strong>
        </div>
    </div>
  )
}

export default TourTypeComponent