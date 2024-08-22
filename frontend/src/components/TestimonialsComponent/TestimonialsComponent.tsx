import styles from "./TestimonialsComponent.module.css"
import { FaQuoteRight } from 'react-icons/fa';
import tourist_photographer1 from '../../assets/tourist_photographer1.jpg'
import tourist_photographer2 from '../../assets/tourist_photographer2.jpg'
import tourist_photographer3 from '../../assets/tourist_photographer3.jpg'

const TestimonialsComponent = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.images}>
            <img src={tourist_photographer1} alt="Tourist Photographer" className={styles.img1} />
            <img src={tourist_photographer2} alt="Tourist Photographer" className={styles.img2} />
            <img src={tourist_photographer3} alt="Tourist Photographer" className={styles.img3} />
        </div>
        <div className={styles.text}>
            <h2>Testimonials</h2>
            <h1>What Travelers Say</h1>
            <FaQuoteRight className={styles.icon} />
            <p>"The UI designs he crafted are top-notch, and the design system he integrated allows for straight forward fixes and bulk updates throughout almost every area of the app."</p>
            <strong>-By Molie Rosa, Photographer</strong>
        </div>
    </div>
  )
}

export default TestimonialsComponent