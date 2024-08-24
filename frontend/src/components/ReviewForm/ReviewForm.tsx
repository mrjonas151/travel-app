import React, { useState } from 'react';
import styles from './ReviewForm.module.css';

const ReviewForm: React.FC = () => {
  const [servicesRating, setServicesRating] = useState(0);
  const [locationRating, setLocationRating] = useState(0);
  const [amenitiesRating, setAmenitiesRating] = useState(0);
  const [pricesRating, setPricesRating] = useState(0);
  const [comfortRating, setComfortRating] = useState(0);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleRatingClick = (setRating: React.Dispatch<React.SetStateAction<number>>, rating: number) => {
    setRating(rating);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add a review</h2>
      
      <div className={styles.rowReview}>
        <div className={styles.ratingGroup}>
            <label>Services</label>
            <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
                <span 
                key={i} 
                onClick={() => handleRatingClick(setServicesRating, i + 1)}
                className={servicesRating > i ? styles.starSelected : styles.star}
                >★</span>
            ))}
            </div>
        </div>
        <div className={styles.ratingGroup}>
            <label>Locations</label>
            <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
                <span 
                key={i} 
                onClick={() => handleRatingClick(setLocationRating, i + 1)}
                className={locationRating > i ? styles.starSelected : styles.star}
                >★</span>
            ))}
            </div>
        </div>
        <div className={styles.ratingGroup}>
            <label>Amenities</label>
            <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
                <span 
                key={i} 
                onClick={() => handleRatingClick(setAmenitiesRating, i + 1)}
                className={amenitiesRating > i ? styles.starSelected : styles.star}
                >★</span>
            ))}
            </div>
        </div>
        <div className={styles.ratingGroup}>
            <label>Prices</label>
            <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
                <span 
                key={i} 
                onClick={() => handleRatingClick(setPricesRating, i + 1)}
                className={pricesRating > i ? styles.starSelected : styles.star}
                >★</span>
            ))}
            </div>
        </div>
        </div>
        <div className={styles.ratingGroup}>
            <label>Room comfort and quality</label>
            <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
                <span 
                key={i} 
                onClick={() => handleRatingClick(setComfortRating, i + 1)}
                className={comfortRating > i ? styles.starSelected : styles.star}
                >★</span>
            ))}
            </div>
        </div>
        <div className={styles.inputGroup}>
            <input 
            type="text" 
            placeholder="Your name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className={styles.input} 
            />
            <input 
            type="email" 
            placeholder="Email address" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className={styles.input} 
            />
        </div>
        <div className={styles.inputGroup}>
            <textarea 
            placeholder="Write your comment" 
            value={comment} 
            onChange={(e) => setComment(e.target.value)} 
            className={styles.textarea}
            style={{ resize: 'none' }}
            />
        </div>
        <button className={styles.submitButton}>Submit review</button>
        </div>
  );
};

export default ReviewForm;
