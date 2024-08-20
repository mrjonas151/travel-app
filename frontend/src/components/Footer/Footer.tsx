import styles from './Footer.module.css'
import logo_footer from "../../assets/logo_footer.png"
import facebook_footer from "../../assets/facebook_footer.png"
import twitter_footer from "../../assets/twitter_footer.png"
import linkedin_footer from "../../assets/linkedin_footer.png"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import telegrama from "../../assets/telegrama.png"

const Footer = () => {
  const navigate = useNavigate(); 

  const handleCityClick = () => {
    navigate('/error'); 
  };

  return (
    <footer className={styles.mainContainer}>
      <div className={styles.firstSection}>
        <Link to="/home"><img src={logo_footer} alt="logo-travel" className={styles.logo} /></Link>
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
          <Link to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={facebook_footer} alt="twitter" /></Link>
          <Link to="https://x.com/?lang=pt-br" target="_blank" rel="noopener noreferrer"><img src={twitter_footer} alt="linkedin" /></Link>
          <Link to="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><img src={linkedin_footer} alt="google" /></Link>
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
            <img src={telegrama} alt="telegrama" />
            <input type="text" placeholder="Enter email..." />
          </div>
          
            <button>Submit</button>
          <p className={styles.rights}>© 2023 Trisog All Right Reserved</p>
        </div>
    </footer>
  )
}

export default Footer