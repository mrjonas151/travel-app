import styles from './ChooseUs.module.css'
import ChooseUs_1 from '../../assets/ChooseUs_1.jpg'
import ChooseUs_2 from '../../assets/ChooseUs_2.jpg'
import { FaPlay, FaCheck } from 'react-icons/fa'

const ChooseUs = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageWrapper}>
            <img
          src={ChooseUs_2}
          alt="Image 1 Choose Us" 
          className={styles.imageNormal}
            />
            <img
            src={ChooseUs_1} 
            alt="Image 2 Choose Us"
            className={styles.imageTilted}
            />
            <button className={styles.button}><FaPlay className={styles.icon} />Watch Now</button>
        </div>
        <div className={styles.textWrapper}>
            <h2>Why Choose Us</h2>
            <h1>Our Experiences Meet High Quality Standards</h1>
            <p>Holisticly optimize proactive stategic theme areas rather than effective manufactured products create.</p>
            <div className={styles.checkList}>
                <div>
                    <strong><FaCheck className={styles.checkIcon} />Travel Plan</strong>
                    <strong><FaCheck className={styles.checkIcon} />Hand-picked Tour</strong>
                </div>
                <div>
                    <strong><FaCheck className={styles.checkIcon} />Cheap Rates</strong>
                    <strong><FaCheck className={styles.checkIcon} />Private Guide</strong>
                </div>   
            </div>
            <button className={styles.contactButton}>Contact Us</button>
        </div>
        
    </div>
  )
}

export default ChooseUs