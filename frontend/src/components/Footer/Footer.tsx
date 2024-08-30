import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');

  const handleCityClick = () => {
    navigate('/error'); 
  };

  const handleSubmitEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      toast.success('You have been subscribed. Thanks!');
      setEmail('');
    } else {
      toast.error('Please enter a valid email address.');
    }
  };

  return (
    <footer className={styles.mainContainer}>
      <div className={styles.firstSection}>
        <Link to="/home"><img src="https://firebasestorage.googleapis.com/v0/b/travel-app-d9bdb.appspot.com/o/logo_footer.png?alt=media&token=4f87ff7a-2d2e-4aed-98ab-7917d0f57d91" alt="logo-travel" className={styles.logo} /></Link>
        <div className={styles.helpContainer}>
          <p>Need any help?</p>
          <strong className={styles.call}>Call Us:</strong>
          <strong className={styles.phone}> (888)1234 5678</strong>
        </div>
        <div className={styles.addressContainer}>
          <p>Love Street, Muscat, Oman</p>
          <p>exaample@trisog.com</p>
        </div>
        <div className={styles.socialContainer}>
          <Link to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src="https://firebasestorage.googleapis.com/v0/b/travel-app-d9bdb.appspot.com/o/facebook_footer.png?alt=media&token=0d5819cc-9494-4c47-b278-035c9e6a3843" alt="facebook" /></Link>
          <Link to="https://x.com/?lang=pt-br" target="_blank" rel="noopener noreferrer"><img src="https://firebasestorage.googleapis.com/v0/b/travel-app-d9bdb.appspot.com/o/twitter_footer.png?alt=media&token=f5f9b4a7-086b-4509-880f-35fb0011bfaa" alt="twitter" /></Link>
          <Link to="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><img src="https://firebasestorage.googleapis.com/v0/b/travel-app-d9bdb.appspot.com/o/linkedin_footer.png?alt=media&token=a1a8207c-f379-4fe9-b06b-f0ed09fe5699" alt="linkedin" /></Link>
        </div>
      </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.company}>
          <strong>Company</strong>
          <Link to="/error" className={styles.noUnderlineLink}><p>About Us</p></Link>
          <Link to="/error" className={styles.noUnderlineLink}><p>Contact Us</p></Link>
          <Link to="/error" className={styles.noUnderlineLink}><p>Travel Guides</p></Link>
          <Link to="/error" className={styles.noUnderlineLink}><p>Data Policy</p></Link>
        </div>
        <div className={styles.topDestination}>
          <strong>Top Destination</strong>
          <div className={styles.topDestinationCities}>
            <p onClick={handleCityClick}>Las Vegas</p>
            <p onClick={handleCityClick}>New York City</p>
            <p onClick={handleCityClick}>San Francisco</p>
            <p onClick={handleCityClick}>Hawaii</p>
            <p onClick={handleCityClick}>Tokyo</p>
            <p onClick={handleCityClick}>Sydney</p>
            <p onClick={handleCityClick}>Melbourne</p>
            <p onClick={handleCityClick}>Dubai</p>
          </div>  
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.newsletterContainer}>
          <p className={styles.newsletter}>Sign up Newsletter</p>
          <div className={styles.inputContainer}>
            <img src="https://firebasestorage.googleapis.com/v0/b/travel-app-d9bdb.appspot.com/o/telegrama.png?alt=media&token=d5e75db0-3d85-4f4c-ba1b-5a11d1503471" alt="telegrama" />
            <input type="text" placeholder="Enter email..." value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          
            <button onClick={handleSubmitEmail}>Submit</button>
          <p className={styles.rights}>© 2023 Trisog All Right Reserved</p>
        </div>
    </footer>
  )
}

export default Footer