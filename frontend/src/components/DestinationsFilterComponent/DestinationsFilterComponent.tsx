import { useState } from 'react';
import styles from './DestinationsFilterComponent.module.css';

const destinations = {
  Africa: ["Morocco", "Tanzania"],
  Americas: ["Argentina", "Canada", "Colombia", "Costa Rica"],
  Asia: ["Cambodia", "Japan", "Nepal", "Thailand", "Viet Nam"],
  Europe: ["France", "Greece"]
};

const DestinationsFilterComponent = () => {
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedDestinations((prev) =>
      prev.includes(value)
        ? prev.filter((destination) => destination !== value)
        : [...prev, value]
    );
  };

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.header}>Destinations</h2>
      {Object.entries(destinations).map(([continent, countries]) => (
        <div key={continent} className={styles.continentContainer}>
          <h3 className={styles.continentHeader}>{continent}</h3>
          <ul className={styles.countriesList}>
            {countries.map((country) => (
              <li key={country} className={styles.countryItem}>
                <label>
                  <input
                    type="checkbox"
                    value={country}
                    checked={selectedDestinations.includes(country)}
                    onChange={handleCheckboxChange}
                    className={styles.checkbox}
                  />
                  {country}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DestinationsFilterComponent;
