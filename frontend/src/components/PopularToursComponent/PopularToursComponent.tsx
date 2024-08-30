import styles from './PopularToursComponent.module.css'
import white_star from '../../assets/white_star.png'
import clock from '../../assets/clock.png'
import { TourDetailComponentProps } from '../TourDetailComponent/TourDetailComponent'
import { FaRegHeart } from 'react-icons/fa' 
import { toast } from 'react-toastify'

const PopularToursComponent = ({ id, url_image, city, country, title, averageRating, userRatings, initial_date, final_date, initial_price }:TourDetailComponentProps) => {
    
    const handleClick = () => {
        window.location.href = `/tour-details/${id}`;
    };

    const calculateDays = (startDate: Date, endDate: Date): number => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays;
  };

    const duration = calculateDays(new Date(initial_date), new Date(final_date));

    const handleFavoriteTrip = (event: React.MouseEvent) => {
        event.stopPropagation();
        toast.success("Added to favorites!");
    }

    return (
    <div className={styles.mainContainer} onClick={handleClick}>
        <img src={url_image} alt='Place image' />
        <div className={styles.overlayText}><FaRegHeart className={styles.iconFavorite} onClick={handleFavoriteTrip}/></div>
        <div className={styles.textsContainer}>
            <p className={styles.country}>{city}, {country.name}</p>
            
            <div className={styles.titleContainer}>
                <h2>{title}</h2>
            </div>
            <div className={styles.reviews}>
                <div className={styles.firstReview}>
                    <div className={styles.stars}>
                        <img src={white_star} />
                        <p>{averageRating}</p>
                    </div>
                    <p className={styles.reviewP}>{userRatings.length} reviews</p>
                </div>
                <div className={styles.days}>
                    <img src={clock} alt='clock logo'/>
                    <p className={styles.reviewQ}>{duration} days</p>
                </div>
            </div>
            <div className={styles.horizontalLine}></div>
            <div className={styles.price}>
                <p>Starting from</p>
                <strong>${initial_price}</strong>
            </div>
        </div>
    </div>
  )
}

export default PopularToursComponent