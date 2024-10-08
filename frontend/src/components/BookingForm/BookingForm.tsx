import React, { useState } from 'react';
import styles from './BookingForm.module.css';
import { toast } from 'react-toastify';

interface BookingFormProps {
  price: number;
}

const BookingForm: React.FC<BookingFormProps> = ({price}) => {
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);
  const [children, setChildren] = useState(0);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const total = price * (adults + kids + children);

    const handleBooking = () => {
    if (!date) {
      toast.error('Please select a date.');
      return;
    }
    if (!time) {
      toast.error('Please select a time.');
      return;
    }
    if (total === 0) {
      toast.error('Number of people should be more than 0.');
      return;
    }
    toast.success('Booking successful!');
    setAdults(0);
    setKids(0);
    setChildren(0);
    setDate('');
    setTime('');
  };

  return (
    <div className={styles.container}>
        <div className={styles.price}>
            <strong>${price}</strong>
            <span>/ per person</span>
        </div> 
        <div className={styles.horizontalLine}></div>
      <div className={styles.formGroup}>
        <strong>Date</strong>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          className={styles.input} 
        />
      </div>
      
      <div className={styles.formGroup}>
        <strong>Time</strong>
        <select 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
          className={styles.select}
        >
          <option value="">Select</option>
          <option value="08:00">08:00</option>
          <option value="12:00">12:00</option>
          <option value="16:00">16:00</option>
        </select>
      </div>

      <div className={styles.ticketTitle}>
        <h3>Ticket</h3>
      </div>
      
      <div className={styles.formGroup}>
            <div className={styles.rowFormGroup}>
                <label>Adults (18+ years)</label>
                <div className={styles.counter}>
                <button onClick={() => setAdults(Math.max(0, adults - 1))}>-</button>
                <span>{adults}</span>
                <button onClick={() => setAdults(adults + 1)}>+</button>
            </div>
        </div>
        
      </div>
      
      <div className={styles.formGroup}>
        <div className={styles.rowFormGroup}>
            <label>Kids (12+ years)</label>
            <div className={styles.counter}>
            <button onClick={() => setKids(Math.max(0, kids - 1))}>-</button>
            <span>{kids}</span>
            <button onClick={() => setKids(kids + 1)}>+</button>
            </div>
        </div>
      </div>
      
      <div className={styles.formGroup}>
        <div className={styles.rowFormGroup}>
            <label>Children (3+ years)</label>
            <div className={styles.counter}>
            <button onClick={() => setChildren(Math.max(0, children - 1))}>-</button>
            <span>{children}</span>
            <button onClick={() => setChildren(children + 1)}>+</button>
            </div>
        </div>
      </div>
      <div className={styles.horizontalLine}></div>
      <div className={styles.total}>
        Total: <span>${total}</span>
      </div>
      
      <button className={styles.bookButton} onClick={handleBooking}>Book now</button>
    </div>
  );
};

export default BookingForm;
