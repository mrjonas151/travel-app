import { Link, useNavigate } from "react-router-dom"
import styles from "./Header.module.css"
import logo from "../../assets/logo.png"
import twitter from "../../assets/twitter.png"
import linkedin from "../../assets/linkedin.png"
import google from "../../assets/google.png"
import pinterest from "../../assets/pinterest.png"
import lupa from "../../assets/lupa.png"
import userr from "../../assets/userr.png"
import { useState } from "react"
import { useAuth } from "../../contexts/AuthContext";


const Header = () => {
  const [showInput, setShowInput] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSearch = () => {
    setShowInput(!showInput);
  }

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "Enter") {
       navigate(`/tour-package?search=${encodeURIComponent(search)}`);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contactInfo}>
        <div className={styles.number}>
          <p>(000)999-898-999</p>
          <p>|</p>
          <p>info@trisog.com</p>
        </div>

        <div className={styles.socialContainer}>

          <Link to="https://x.com/?lang=pt-br" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" /></Link>
          <Link to="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" /></Link>
          <Link to="https://www.google.com/" target="_blank" rel="noopener noreferrer"><img src={google} alt="google" /></Link>
          <Link to="https://br.pinterest.com/" target="_blank" rel="noopener noreferrer"><img src={pinterest} alt="pinterest" /></Link>
          <p>|</p>
          <p>EUR</p>
        </div>
      </div>
      
      <nav className={styles.navbar}>
        <div className={styles.space}>
          <Link to="/home"><img src={logo} alt="logo-travel" className={styles.logo} /></Link>
          <ul className={styles.list}>
              <li className={styles.item}><Link to="/home">Home</Link></li>
              <li className={styles.item}><Link to="/about">About</Link></li>
              <li className={styles.item}><Link to="/tour-package">Tours</Link></li>
              <li className={styles.item}><Link to="/destination">Destination</Link></li>
              <li className={styles.item}><Link to="/blog">Blog</Link></li>
              <li className={styles.item}><Link to="/pages">Pages</Link></li>
              <li className={styles.item}><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        

        <div className={styles.searchContainer}>
          {showInput && <input className={styles.input} placeholder="Search destination..." onChange={(e) => setSearch(e.target.value)} onKeyPress={handleKeyPress} />}
          <img onClick={handleSearch} src={lupa} alt="search" className={styles.lupa} />
          {user ? (
            <div className={styles.userContainer}>
              <p className={styles.welcome}><img src={userr} alt="user" className={styles.userImg}/> {user.displayName || user.email ||'User'}</p>
              <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
            </div>
          ) : (
            <div>
              <img src={userr} alt="user" className={styles.userImg} />
              <Link to="/" className={styles.loginLink}>Login / SignUp</Link>
            </div>
          )}
        </div>
      </nav>
    </div>
    
  )
}

export default Header