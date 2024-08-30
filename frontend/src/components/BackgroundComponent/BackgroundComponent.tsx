import styles from './BackgroundComponent.module.css'
import TextBackgroundComponent from '../TextBackgroundComponent/TextBackgroundComponent'

interface BackgroundProps {
  country?: string;
}

const BackgroundComponent = ({country}:BackgroundProps) => {
  return (
    <div>
        <div className={styles.imageContainer}>
          <img src="https://firebasestorage.googleapis.com/v0/b/travel-app-d9bdb.appspot.com/o/maldives.jpg?alt=media&token=3a94bac7-eb1b-4883-a6fa-1b19902a9ab5" alt="Air Balloon" />
          <div className={styles.textOverlay}>
            <TextBackgroundComponent title={'Tour Package'} country={country || ''}/>
          </div>
        </div>
    </div>
  )
}

export default BackgroundComponent