import { Link } from 'react-router-dom'
import styles from './LoginForm.module.css'
import { FaUser, FaLock } from 'react-icons/fa'
import facebook_login from '../../assets/facebook_login.png'
import google_login from '../../assets/google_login.png'

const LoginForm = () => {
  return (
    <main className={styles.mainContainer}>
        <div className={styles.wrapper}>
        
            <form action=''>
                <h1>Login</h1>
                <div className={styles.inputBox}>
                    <input type='text' placeholder='Email...' required />
                    <FaUser className={styles.icon} />
                </div>
                <div className={styles.inputBox}>
                    <input type='password' placeholder='Password...' required />
                    <FaLock className={styles.icon} />
                </div>
                <button className={styles.loginButton}>Login</button> 
                <div className={styles.firebaseLogin}>
                    <button className={styles.facebook}><img src={facebook_login}></img>Login with Facebook</button>
                    <button className={styles.google}><img src={google_login}></img>Login with Google</button>
                </div>
                <div className={styles.registerLink}>
                    <p>Don't have an account? <Link to='/sign-up'>Register</Link></p>
                </div>
            </form>
        </div>
    </main>
    
  )
}

export default LoginForm