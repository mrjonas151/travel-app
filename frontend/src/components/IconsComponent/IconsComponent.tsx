import styles from './IconsComponent.module.css'
import mountains from '../../assets/mountains.png'
import Palm_Summer from '../../assets/Palm_Summer.png'
import start_travel from '../../assets/start_travel.png'
import yes_summer from '../../assets/yes_summer.png'
import lets_go from '../../assets/lets_go.png'

const IconsComponent = () => {
  return (
    <div>
        <div className={styles.images}>
            <img src={Palm_Summer} alt="Palm Summer" />
            <img src={start_travel} alt="Start Travel" />
            <img src={mountains} alt="Mountains" />
            <img src={yes_summer} alt="Yes Summer" />
            <img src={lets_go} alt="Lets Go" />
        </div>
    </div>
  )
}

export default IconsComponent