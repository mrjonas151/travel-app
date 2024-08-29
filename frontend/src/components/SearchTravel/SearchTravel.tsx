import InputComponent from '../InputComponent/InputComponent'
import styles from './SearchTravel.module.css'
import telegrama from '../../assets/telegrama.png'
import flag from '../../assets/flag.png'
import calendar from '../../assets/calendar.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import guestsl from '../../assets/guests.png'
import { toast } from 'react-toastify'

const SearchTravel = () => {
  const [destination, setDestination] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!destination || !type || !date || !guests) {
      toast.error('Error, all fields must be filled');
      return;
    }

    const searchParams = new URLSearchParams({
      search: destination,
      type
    }).toString();

    navigate(`/tour-package?${searchParams}`);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.rowComponents}>
          <div className={styles.columnComponents}>
            <h2>Destination</h2>
            <InputComponent
              type="text"
              imgSrc={telegrama}
              imgAlt="Telegrama logo"
              placeholder="Where to go?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className={styles.columnComponents}>
            <h2>Type</h2>
            <InputComponent
              type="text"
              imgSrc={flag}
              imgAlt="Flag logo"
              placeholder="Activity"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <div className={styles.columnComponents}>
            <h2>When</h2>
            <InputComponent
              type="date"
              imgSrc={calendar}
              imgAlt="Calendar logo"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className={styles.columnComponents}>
            <h2>Guests</h2>
            <InputComponent
              type="number"
              imgSrc={guestsl}
              imgAlt="Guests logo"
              placeholder="0"
              min={0}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
          <div>
            <button className={styles.button} onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchTravel;