import styles from './FilterByComponent.module.css';
import { useState } from 'react';

interface FilterByComponentProps {
  onPriceChange: (price: number) => void;
}

const FilterByComponent: React.FC<FilterByComponentProps> = ({ onPriceChange }) => {
  const [price, setPrice] = useState(100000);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setPrice(value);
    const percentage = (value / 100000) * 100;
    event.target.style.background = `linear-gradient(to right, #f84d50 ${percentage}%, #ddd ${percentage}%)`;
  };

  const handleSubmit = () => {
    onPriceChange(price/100);
    console.log(price/100);
  };

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.filterHeader}>Filter By</h2>
      <div className={styles.sliderContainer}>
        <input
          type="range"
          min="0"
          max="100000"
          step="500"
          value={price}
          onChange={handleSliderChange}
          className={styles.slider}
        />
      </div>
      <div className={styles.priceRange}>
        <span>$0.00</span>
        <strong>${(price / 100).toFixed(2)}</strong>
      </div>
      <button className={styles.submitButton} onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FilterByComponent;