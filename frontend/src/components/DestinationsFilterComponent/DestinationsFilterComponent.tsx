import { useEffect, useState } from 'react';
import styles from './DestinationsFilterComponent.module.css';
import api from '../../services/api';

interface Country {
  id: string;
  name: string;
}

interface Destination {
  id: string;
  name: string;
  countries: Country[];
}

interface DestinationsFilterComponentProps {
  onDestinationChange: (selectedDestinations: string[]) => void;
}

const DestinationsFilterComponent: React.FC<DestinationsFilterComponentProps> = ({ onDestinationChange }) => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await api.get('/tourDetails/continents'); 
        setDestinations(response.data);
      } catch (err) {
        setError('Failed searching destinations');
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const updatedDestinations = selectedDestinations.includes(value)
      ? selectedDestinations.filter((destination) => destination !== value)
      : [...selectedDestinations, value];
    
    setSelectedDestinations(updatedDestinations);
    onDestinationChange(updatedDestinations); 
  };

  if (loading) return <p>Loading destinations...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.header}>Destinations</h2>
      {destinations.map((continent) => (
        <div key={continent.id} className={styles.continentContainer}>
          <h3 className={styles.continentHeader}>{continent.name}</h3>
          <ul className={styles.countriesList}>
            {continent.countries.map((country) => (
              <li key={country.id} className={styles.countryItem}>
                <label>
                  <input
                    type="checkbox"
                    value={country.name}
                    checked={selectedDestinations.includes(country.name)}
                    onChange={handleCheckboxChange}
                    className={styles.checkbox}
                  />
                  {country.name}
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
