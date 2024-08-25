import styles from './PopularToursComponent.module.css'
import white_star from '../../assets/white_star.png'
import clock from '../../assets/clock.png'

export interface PopularToursComponentProps {
    id: string;
    url_image: string;
    city: string;
    country: string;
    title: string;
    stars: number;
    reviews: number;
    days: number;
    price: number;
}

const PopularToursComponent = ({ url_image, city, country, title, stars, reviews, days, price }:PopularToursComponentProps) => {
  return (
    <div className={styles.mainContainer}>
        <img src={url_image} alt='Place image' />
        <div className={styles.textsContainer}>
            <p className={styles.country}>{city}, {country}</p>
            
            <div className={styles.titleContainer}>
                <h2>{title}</h2>
            </div>
            <div className={styles.reviews}>
                <div className={styles.firstReview}>
                    <div className={styles.stars}>
                        <img src={white_star} />
                        <p>{stars}</p>
                    </div>
                    <p className={styles.reviewP}>{reviews} reviews</p>
                </div>
                <div className={styles.days}>
                    <img src={clock} alt='clock logo'/>
                    <p className={styles.reviewQ}>{days} days</p>
                </div>
            </div>
            <div className={styles.horizontalLine}></div>
            <div className={styles.price}>
                <p>Starting from</p>
                <strong>${price}</strong>
            </div>
        </div>
    </div>
  )
}

export default PopularToursComponent