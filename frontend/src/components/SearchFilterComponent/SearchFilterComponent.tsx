import { FaSearch } from 'react-icons/fa'
import styles from './SearchFilterComponent.module.css'


const SearchFilterComponent = () => {
  return (
    <div className={styles.mainContainer}>
        <h2>Search</h2>
        <div className={styles.searchContainer}>
            <input type="text" placeholder="Type anything..." className={styles.searchInput} />
            <FaSearch className={styles.searchIcon} />
        </div>
    </div>
  )
}

export default SearchFilterComponent