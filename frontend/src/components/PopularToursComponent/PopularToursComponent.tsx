import styles from './PopularToursComponent.module.css'
import tourist_camera from '../../assets/tourist_camera.jpg'
import white_star from '../../assets/white_star.png'
import clock from '../../assets/clock.png'

const PopularToursComponent = () => {
  return (
    <div className={styles.mainContainer}>
        <img src={tourist_camera} alt='Tourist camera' />
        <div className={styles.textsContainer}>
            <p className={styles.country}>Budapest, Hungary</p>
            
            <div className={styles.titleContainer}>
                <h2>Wonders of the West Coast & Kimberley</h2>
            </div>
            <div className={styles.reviews}>
                <div className={styles.firstReview}>
                    <div className={styles.stars}>
                        <img src={white_star} />
                        <p>4.8</p>
                    </div>
                    <p className={styles.reviewP}>15 reviews</p>
                </div>
                <div className={styles.days}>
                    <img src={clock} alt='clock logo'/>
                    <p className={styles.reviewQ}>7 days</p>
                </div>
            </div>
            <div className={styles.horizontalLine}></div>
            <div className={styles.price}>
                <p>Starting from</p>
                <strong>$520</strong>
            </div>
        </div>
    </div>
  )
}

export default PopularToursComponent