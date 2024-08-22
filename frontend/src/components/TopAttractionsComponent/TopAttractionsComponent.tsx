import styles from './TopAttractionsComponent.module.css'
import air_balloon from '../../assets/air_balloon.png'

const TopAttractionsComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={air_balloon} alt="Air Balloon" width={240} height={215} />
        <div className={styles.textOverlay}>
          <p>174,688 Travelers</p>
          <h3>United Kingdom</h3>
        </div>
      </div>
    </div>
  )
}

export default TopAttractionsComponent
