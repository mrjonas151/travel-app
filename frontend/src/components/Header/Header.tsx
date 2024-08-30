import { Link, useNavigate } from "react-router-dom"
import styles from "./Header.module.css"
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

          <Link to="https://x.com/?lang=pt-br" target="_blank" rel="noopener noreferrer"><img src="https://firebasestorage.googleapis.com/v0/b/travel-app-d9bdb.appspot.com/o/twitter.png?alt=media&token=bb26feaa-c057-474e-a8fa-9dd139a91173" alt="twitter" /></Link>
          <Link to="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src="https://firebasestorage.googleapis.com/v0/b/travel-app-d9bdb.appspot.com/o/linkedin.png?alt=media&token=eea3b41a-40d3-4195-ba75-67cab7e0467c" alt="linkedin" /></Link>
          <Link to="https://www.google.com/" target="_blank" rel="noopener noreferrer"><img src="https://firebasestorage.googleapis.com/v0/b/travel-app-d9bdb.appspot.com/o/google.png?alt=media&token=78b9c2b2-7ed6-4247-a9bd-5d8c460f09ce" alt="google" /></Link>
          <Link to="https://br.pinterest.com/" target="_blank" rel="noopener noreferrer"><img src="https://firebasestorage.googleapis.com/v0/b/travel-app-d9bdb.appspot.com/o/pinterest.png?alt=media&token=1f2ae048-8372-4daf-b109-8416870eab26" alt="pinterest" /></Link>
          <p>|</p>
          <p>EUR</p>
        </div>
      </div>
      
      <nav className={styles.navbar}>
        <div className={styles.space}>
          <Link to="/home"><img src="https://firebasestorage.googleapis.com/v0/b/travel-app-d9bdb.appspot.com/o/logo.png?alt=media&token=c38f5619-c7ff-4797-974d-201f2956aabb" alt="logo-travel" className={styles.logo} /></Link>
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
          <img onClick={handleSearch} src="https://firebasestorage.googleapis.com/v0/b/travel-app-d9bdb.appspot.com/o/lupa.png?alt=media&token=4c42cd51-7bbf-4662-aa05-a3cd5c44a7fc" alt="search" className={styles.lupa} />
          {user ? (
            <div className={styles.userContainer}>
              <p className={styles.welcome}><img src="https://firebasestorage.googleapis.com/v0/b/travel-app-d9bdb.appspot.com/o/userr.png?alt=media&token=a83ea118-3efc-4496-821c-d1361c548f60" alt="user" className={styles.userImg}/> {user.displayName || user.email ||'User'}</p>
              <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
            </div>
          ) : (
            <div>
              <img src="https://firebasestorage.googleapis.com/v0/b/travel-app-d9bdb.appspot.com/o/userr.png?alt=media&token=a83ea118-3efc-4496-821c-d1361c548f60" alt="user" className={styles.userImg} />
              <Link to="/" className={styles.loginLink}>Login / SignUp</Link>
            </div>
          )}
        </div>
      </nav>
    </div>
    
  )
}

export default Header