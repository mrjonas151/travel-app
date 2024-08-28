import styles from './CategoriesComponent.module.css';
import { useState, useEffect } from 'react';
import api from '../../services/api';

interface Category {
  id: string;
  title: string;
  tour_quantity: number;
  price: number;
  tours: Tour[];
}

interface Tour {
  id: string;
  title: string;
}

interface CategoriesComponentProps {
  onCategoryChange: (selectedCategories: string[]) => void;
}

const CategoriesComponent = ({ onCategoryChange }: CategoriesComponentProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [error, setError] = useState('');

    const fetchCategories = async () => {
    try {
      const response = await api.get('/categories'); 
      setCategories(response.data); 
    } catch (err) {
      setError('Failed to bring categories');
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedCategories((prev) => {
      const newSelection = prev.includes(value)
        ? prev.filter((category) => category !== value)
        : [...prev, value];

      onCategoryChange(newSelection);
      return newSelection;
    });
  };

  if (error) return <p>{error}</p>;

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.categoriesHeader}>Categories</h2>
      <ul className={styles.categoriesList}>
        {categories.map((category) => (
          <li key={category.id} className={styles.categoryItem}>
            <label>
              <input
                type="checkbox"
                value={category.title}
                checked={selectedCategories.includes(category.title)}
                onChange={handleCheckboxChange}
                className={styles.checkbox}
              />
              {category.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesComponent;
