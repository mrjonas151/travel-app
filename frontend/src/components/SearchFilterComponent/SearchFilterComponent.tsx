import { FaSearch } from 'react-icons/fa'
import styles from './SearchFilterComponent.module.css'

type SearchFilterComponentProps = {
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchFilterComponent: React.FC<SearchFilterComponentProps> = ({ onSearchChange }) => {
  return (
    <div className={styles.mainContainer}>
        <h2>Search</h2>
        <div className={styles.searchContainer}>
            <input type="text" placeholder="Type anything..." className={styles.searchInput} onChange={onSearchChange} />
            <FaSearch className={styles.searchIcon} />
        </div>
    </div>
  )
}

export default SearchFilterComponent