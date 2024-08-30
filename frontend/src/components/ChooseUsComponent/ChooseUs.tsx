import styles from './ChooseUs.module.css'
import { FaPlay, FaCheck } from 'react-icons/fa'

const ChooseUs = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageWrapper}>
            <img
          src="https://firebasestorage.googleapis.com/v0/b/travel-app-d9bdb.appspot.com/o/ChooseUs_2.jpg?alt=media&token=728b97a3-9e13-4edd-8263-aeb2f356cd8c"
          alt="Image 1 Choose Us" 
          className={styles.imageNormal}
            />
            <img
            src="https://firebasestorage.googleapis.com/v0/b/travel-app-d9bdb.appspot.com/o/ChooseUs_1.jpg?alt=media&token=b6e76081-629d-45ad-821b-6d9e5e6e871a"
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