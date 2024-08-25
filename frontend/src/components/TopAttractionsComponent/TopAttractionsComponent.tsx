import styles from "./TopAttractionsComponent.module.css";
import airBalloon from "../../assets/air_balloon.png";

const TopAttractionsComponent = () => {
  return (
    <div className={styles.cityGrid}>
      <div className={styles.cityCard1}>
        <img
          className={styles.cityImage}
          src={airBalloon}
          alt="United Kingdom"
        />
        <div className={styles.cityInfo}>
          <p>174,688 Travelers</p>
          <h2>United Kingdom</h2>
        </div>
      </div>

      <div className={styles.cityCard2}>
        <img className={styles.cityImage} src={airBalloon} alt="Turkey" />
        <div className={styles.cityInfo}>
          <p>174,688 Travelers</p>
          <h2>Turkey</h2>
        </div>
      </div>

      <div className={styles.cityCard3}>
        <img className={styles.cityImage} src={airBalloon} alt="Switzerland" />
        <div className={styles.cityInfo}>
          <p>174,688 Travelers</p>
          <h2>Switzerland</h2>
        </div>
      </div>

      <div className={styles.cityCard4}>
        <img className={styles.cityImage} src={airBalloon} alt="Thailand" />
        <div className={styles.cityInfo}>
          <p>174,688 Travelers</p>
          <h2>Thailand</h2>
        </div>
      </div>

      <div className={styles.cityCard5}>
        <img className={styles.cityImage} src={airBalloon} alt="Australia" />
        <div className={styles.cityInfo}>
          <p>174,688 Travelers</p>
          <h2>Australia</h2>
        </div>
      </div>

      <div className={styles.cityCard6}>
        <img className={styles.cityImage} src={airBalloon} alt="France" />
        <div className={styles.cityInfo}>
          <p>174,688 Travelers</p>
          <h2>France</h2>
        </div>
      </div>
    </div>
  );
};

export default TopAttractionsComponent;
