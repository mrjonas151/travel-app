import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import logo from "../../assets/logo.png"
import twitter from "../../assets/twitter.png"
import linkedin from "../../assets/linkedin.png"
import google from "../../assets/google.png"
import pinterest from "../../assets/pinterest.png"

const Header = () => {
  return (
    <div>
      <div>
        <div>
          <p>(000)999-898-999</p>
          <p>|</p>
          <p>info@trisog.com</p>
        </div>

        <div>
          <img src={twitter} alt="twitter" />
          <img src={linkedin} alt="linkedin" />
          <img src={google} alt="google" />
          <img src={pinterest} alt="pinterest" />
          <p>|</p>
          <p>EUR</p>
        </div>
      </div>
      
      <nav className={styles.navbar}>
        <Link to="/home"><img src={logo} alt="logo-travel" className={styles.logo} /></Link>
        <ul className={styles.list}>
            <li className={styles.item}><Link to="/home">Home</Link></li>
            <li className={styles.item}><Link to="/about">About</Link></li>
            <li className={styles.item}><Link to="/tour-packages">Tours</Link></li>
            <li className={styles.item}><Link to="/destination">Destination</Link></li>
            <li className={styles.item}><Link to="/blog">Blog</Link></li>
            <li className={styles.item}><Link to="/pages">Pages</Link></li>
            <li className={styles.item}><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
    
  )
}

export default Header