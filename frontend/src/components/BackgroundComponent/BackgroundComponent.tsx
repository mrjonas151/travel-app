import styles from './BackgroundComponent.module.css'
import TextBackgroundComponent from '../TextBackgroundComponent/TextBackgroundComponent'
import maldives from '../../assets/maldives.jpg'

const BackgroundComponent = () => {
  return (
    <div>
        <div className={styles.imageContainer}>
          <img src={maldives} alt="Air Balloon" />
          <div className={styles.textOverlay}>
            <TextBackgroundComponent title={'Tour Package'} country={'United Kingdom'}/>
          </div>
        </div>
    </div>
  )
}

export default BackgroundComponent