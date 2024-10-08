import React from 'react';
import styles from './RatingCard.module.css';

interface RatingCardProps {
  rating: number;
  categories: {
    name: string;
    score: number;
  }[];
}

const getRatingLabel = (rating: number): string => {
  if (rating >= 4.5) return 'Excellent';
  if (rating >= 3.5) return 'Good';
  if (rating >= 2.5) return 'Ok';
  if (rating >= 1.5) return 'Bad';
  if (rating >= 0) return 'Really Bad';
  return 'No Rating yet';
};

const RatingCard: React.FC<RatingCardProps> = ({ rating, categories }) => {
  return (
    <div className={styles.ratingCard}>
      <div className={styles.mainRating}>
        <div>
          <div className={styles.ratingNumber}>{rating}</div>
          <div className={styles.ratingLabel}>★ {getRatingLabel(rating)}</div>
        </div>
      </div>
      <div className={styles.categories}>
        {categories.map((category, index) => (
          <div className={styles.category} key={index}>
            <span className={styles.categoryName}>{category.name}</span>
            <div className={styles.rowItems}>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{ width: `${(category.score / 5) * 100}%` }}
                ></div>
              </div>
              <span className={styles.categoryScore}>{category.score}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingCard;
