import React, { useState } from 'react';
import styles from './ReviewForm.module.css';
import { toast } from 'react-toastify';
import api from '../../services/api';

interface ReviewFormProps {
    tourId: string;
    onNewReview: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({tourId, onNewReview}:ReviewFormProps) => {
  const [servicesRating, setServicesRating] = useState(0);
  const [locationRating, setLocationRating] = useState(0);
  const [amentitiesRating, setAmentitiesRating] = useState(0);
  const [pricesRating, setPricesRating] = useState(0);
  const [comfortRating, setComfortRating] = useState(0);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleRatingClick = (setRating: React.Dispatch<React.SetStateAction<number>>, rating: number) => {
    setRating(rating);
  };

  const handleSubmitReview = async () => {
    if (!name || !email || !comment) {
      toast.error('Please fill all fields');
      return;
    }

    if(servicesRating === 0 || locationRating === 0 || amentitiesRating === 0 || pricesRating === 0 || comfortRating === 0) {
        toast.error('Please rate all categories');
        return;
    }

    const review = {
        user_id: "zG33jAlgVZZloiwIUyvLrkIVjPr2",
        user_name: name,
        user_email: email,
        services: servicesRating,
        locations: locationRating,
        amentities: amentitiesRating,
        prices: pricesRating,
        comfort: comfortRating,
        comment: comment,
    };

    try {
      await api.post(`/tourDetails/${tourId}/review`, review);
      toast.success('Review submitted successfully');
      setName('');
      setEmail('');
      setComment('');
      setServicesRating(0);
      setLocationRating(0);
      setAmentitiesRating(0);
      setPricesRating(0);
      setComfortRating(0);
      onNewReview();
    } catch (error) {
      toast.error('Failed to submit review. Please try again.');
    }
  }

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
                onClick={() => handleRatingClick(setAmentitiesRating, i + 1)}
                className={amentitiesRating > i ? styles.starSelected : styles.star}
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
        <button className={styles.submitButton} onClick={handleSubmitReview}>Submit review</button>
        </div>
  );
};

export default ReviewForm;
