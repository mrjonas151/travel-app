import styles from "./TestimonialsComponent.module.css"
import { FaQuoteRight } from 'react-icons/fa';

export interface TestimonialComponentProps {
  id: string;
  url_image1: string;
  url_image2: string;
  url_image3: string;
  comment: string;
  name: string;
  profession: string;
}

const TestimonialsComponent = ({url_image1, url_image2, url_image3, comment, name, profession}:TestimonialComponentProps) => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.images}>
            <img src={url_image1} alt="Tourist Photo" className={styles.img1} />
            <img src={url_image2} alt="Tourist Photo" className={styles.img2} />
            <img src={url_image3} alt="Tourist Photo" className={styles.img3} />
        </div>
        <div className={styles.text}>
            <h2>Testimonials</h2>
            <h1>What Travelers Say</h1>
            <FaQuoteRight className={styles.icon} />
            <p>"{comment}."</p>
            <strong>-By {name}, {profession}</strong>
        </div>
    </div>
  )
}

export default TestimonialsComponent