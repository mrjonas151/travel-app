import styles from './TravelGuideComponent.module.css'

export interface TravelGuideComponentProps {
    id: string;
    url_image: string;
    month: string;
    day: string;
    year: string;
    title: string;  
}

const TravelGuideComponent = ({url_image, month, day, year, title}:TravelGuideComponentProps) => {
  return (
    <div className={styles.container}>
        <div className={styles.imageWrapper}>
            <img src={url_image} alt="Guide photo" />
        </div>
        <div className={styles.textContainer}>
            <div className={styles.date}>
                <p>{month}, {day}, {year}</p>
                <ul><li>Admin</li></ul>
            </div>
            <div className={styles.titleContainer}>
                <h2>{title}</h2>
            </div>
        </div>
    </div>
  )
}

export default TravelGuideComponent