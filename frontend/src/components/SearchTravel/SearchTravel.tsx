import InputComponent from '../InputComponent/InputComponent'
import styles from './SearchTravel.module.css'

const SearchTravel = () => {
  return (
    <>
        <div className={styles.mainContainer}>
            <div className={styles.rowComponents}>
                <div className={styles.columnComponents}>
                    <h2>Destination</h2>
                    <InputComponent />
                </div>
                <div>
                    <h2>Type</h2>
                    <InputComponent />
                </div>
                <div>
                    <h2>When</h2>
                    <InputComponent />
                </div>
                <div>
                    <h2>Guests</h2>
                    <InputComponent />
                </div>
                <div>
                    <button className={styles.button}>Search</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default SearchTravel