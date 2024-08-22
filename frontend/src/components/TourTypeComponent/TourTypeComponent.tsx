import styles from "./TourTypeComponent.module.css"
import { MdBackpack } from 'react-icons/md';

const TourTypeComponent = () => {
  return (
    <div>
        <div className={styles.content}>
            <div className={styles.overlay}></div>
            <MdBackpack size={50} className={styles.icon} />
            <h2>Adventure</h2>
            <p>10 Tours+</p>
        </div>
        <div className={styles.price}>
            <p>From</p>
            <strong>$250</strong>
        </div>
        
    </div>
  )
}

export default TourTypeComponent