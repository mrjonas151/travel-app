import styles from './DestinationDetailComponent.module.css';
import maldives from '../../assets/maldives.jpg';

const DestinationDetailComponent = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.rowContent}>
        <div>
          <img src={maldives} className={styles.bigImage}/>
          <div className={styles.otherImages}> 
            <img src={maldives} className={styles.smallImage}/>
            <img src={maldives} className={styles.smallImage}/>
            <img src={maldives} className={styles.smallImage}/>
            <img src={maldives} className={styles.smallImage}/>
          </div>
        
        </div>
        <div className={styles.map}>
          <h2>City map</h2>
        </div>
      </div>
      <h2>About UK</h2>
      <p>Istanbul, the vibrant and historic city straddling the continents of Europe and Asia, offers an energizing blend of cultures, sights, and experiences that captivate every traveler’s heart. As Turkey’s cultural and economic hub, Istanbul seamlessly fuses its rich heritage with modernity, creating an unforgettable journey for visitors.</p>
      <p>The city is home to some of the world’s most iconic landmarks, including the awe-inspiring Hagia Sophia, the majestic Blue Mosque, and the grand Topkapi Palace, each bearing witness to Istanbul’s illustrious past. Wandering through bustling streets, you’ll find an array of delightful bazaars where you can haggle for unique souvenirs, immerse yourself in aromatic spices, and savor traditional Turkish delights. As the sun sets, head to the banks of the Bosphorus strait and savor the view of Istanbul’s skyline, a true testament to its allure as both a crossroads between Europe and Asia. Prepare your taste buds for an unforgettable gastronomic adventure in Istanbul, where a delightful fusion of flavors awaits you at every turn.</p>
      <h2>Basic Information</h2>
    </div>
  )
}

export default DestinationDetailComponent