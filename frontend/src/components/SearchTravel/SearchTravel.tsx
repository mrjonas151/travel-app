import InputComponent from '../InputComponent/InputComponent'
import styles from './SearchTravel.module.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
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
      type,
      date: date.toString()
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
              imgSrc="https://firebasestorage.googleapis.com/v0/b/travel-app-d9bdb.appspot.com/o/telegrama.png?alt=media&token=d5e75db0-3d85-4f4c-ba1b-5a11d1503471"
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
              imgSrc="https://firebasestorage.googleapis.com/v0/b/travel-app-d9bdb.appspot.com/o/flag.png?alt=media&token=1751cb2d-4e86-427d-bd9b-5cfbb9a1dd20"
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
              imgSrc="https://firebasestorage.googleapis.com/v0/b/travel-app-d9bdb.appspot.com/o/calendar.png?alt=media&token=8416cdcf-1e3b-46cf-8462-55dbabd5ebea"
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
              imgSrc="https://firebasestorage.googleapis.com/v0/b/travel-app-d9bdb.appspot.com/o/guests.png?alt=media&token=a3f5d4e0-f5e1-4615-80dc-23b1dd554d39"
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