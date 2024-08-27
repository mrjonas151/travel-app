import styles from './BackgroundComponent.module.css'
import TextBackgroundComponent from '../TextBackgroundComponent/TextBackgroundComponent'
import maldives from '../../assets/maldives.jpg'

interface BackgroundProps {
  country?: string;
}

const BackgroundComponent = ({country}:BackgroundProps) => {
  return (
    <div>
        <div className={styles.imageContainer}>
          <img src={maldives} alt="Air Balloon" />
          <div className={styles.textOverlay}>
            <TextBackgroundComponent title={'Tour Package'} country={country || ''}/>
          </div>
        </div>
    </div>
  )
}

export default BackgroundComponent