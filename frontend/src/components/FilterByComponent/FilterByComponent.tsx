import styles from './FilterByComponent.module.css'
import { useState } from 'react';

const FilterByComponent = () => {

    const [price, setPrice] = useState(0);

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        setPrice(value);
        const percentage = (value / 100000) * 100;

        event.target.style.background = `linear-gradient(to right, #f84d50 ${percentage}%, #ddd ${percentage}%)`;
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
            onInput={handleSliderChange}
            className={styles.slider}
            />
        </div>
        <div className={styles.priceRange}>
            <span>$0.00</span>
            <strong>${(price / 100).toFixed(2)}</strong>
        </div>
        <button className={styles.submitButton}>Submit</button>
        </div>
    )
}

export default FilterByComponent;