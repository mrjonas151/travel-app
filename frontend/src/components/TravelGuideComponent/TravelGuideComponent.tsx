import styles from './TravelGuideComponent.module.css'
import tourist_photographer3 from '../../assets/tourist_photographer3.jpg'

const TravelGuideComponent = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageWrapper}>
            <img src={tourist_photographer3} alt="Tourist Photographer" />
        </div>
        <div className={styles.textContainer}>
            <div className={styles.date}>
                <p>July, 13, 2023</p>
                <ul><li>Admin</li></ul>
            </div>
            <div className={styles.titleContainer}>
                <h2>The Impact of Covid-19 on travel & tourism industry</h2>
            </div>
        </div>
    </div>
  )
}

export default TravelGuideComponent