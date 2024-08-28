import InputComponent from '../InputComponent/InputComponent'
import styles from './SearchTravel.module.css'
import telegrama from '../../assets/telegrama.png'
import flag from '../../assets/flag.png'
import calendar from '../../assets/calendar.png'
import guests from '../../assets/guests.png'

const SearchTravel = () => {
  return (
    <>
        <div className={styles.mainContainer}>
            <div className={styles.rowComponents}>
                <div className={styles.columnComponents}>
                    <h2>Destination</h2>
                    <InputComponent type="text" imgSrc={telegrama} imgAlt='Telegrama logo' placeholder='Where to go?'/>
                </div>
                <div className={styles.columnComponents}>
                    <h2>Type</h2>
                    <InputComponent type="text" imgSrc={flag} imgAlt='Flag logo' placeholder='Activity' />
                </div>
                <div className={styles.columnComponents}>
                    <h2>When</h2>
                    <InputComponent type="date" imgSrc={calendar} imgAlt='Calendar logo' placeholder='Date' />
                </div>
                <div className={styles.columnComponents}>
                    <h2>Guests</h2>
                    <InputComponent type="number" imgSrc={guests} imgAlt='Guests logo' placeholder='0' min={0}/>
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