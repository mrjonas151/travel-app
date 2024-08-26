import styles from "./TourTypeComponent.module.css"
import { MdBackpack } from 'react-icons/md';

export interface TourTypeComponentProps {
  id: string;
  title: string;
  tour_quantity: number;
  price: number;
}

const TourTypeComponent = ({title, tour_quantity, price}:TourTypeComponentProps) => {
  return (
    <div className={styles.mainContainer}>
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