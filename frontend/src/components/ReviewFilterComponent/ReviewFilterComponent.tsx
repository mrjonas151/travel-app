import { useState } from 'react';
import styles from './ReviewFilterComponent.module.css';

const categories = [
  "5 Stars",
  "4 Stars & Up",
  "3 Stars & Up",
  "2 Stars & Up",
  "1 Stars & Up"
];

interface ReviewFilterComponentProps {
  onReviewFilterChange: (selectedCategories: string[]) => void;
}

const ReviewFilterComponent: React.FC<ReviewFilterComponentProps> = ({ onReviewFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const updatedCategories = selectedCategories.includes(value)
      ? selectedCategories.filter((category) => category !== value)
      : [...selectedCategories, value];

    setSelectedCategories(updatedCategories);
    onReviewFilterChange(updatedCategories);
  };

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.categoriesHeader}>Reviews</h2>
      <ul className={styles.categoriesList}>
        {categories.map((category) => (
          <li key={category} className={styles.categoryItem}>
            <label>
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={handleCheckboxChange}
                className={styles.checkbox}
              />
              {category}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewFilterComponent;
