import { Link } from 'react-router-dom';
import styles from './RegisterForm.module.css';
import { FaUser, FaLock, FaPencilAlt } from 'react-icons/fa';
import facebook_login from '../../assets/facebook_login.png';
import google_login from '../../assets/google_login.png';
import handleGoogleSignIn from '../../hooks/handleGoogleSignIn';
import handleFacebookSignIn from '../../hooks/handleFacebookSignIn';
import handleSignUp from '../../hooks/handleSignUp';
import { useState } from 'react';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await handleSignUp({ firstName, lastName, email, password });
    };

    return (
        <main className={styles.mainContainer}>
            <div className={styles.wrapper}>
                <form onSubmit={onSignUp}>
                    <h1>Register</h1>
                    <div>
                        <div className={styles.inputBox}>
                            <input
                                type='text'
                                placeholder='First Name...'
                                required
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <FaPencilAlt className={styles.icon} />
                        </div>
                        <div className={styles.inputBox}>
                            <input
                                type='text'
                                placeholder='Last Name...'
                                required
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <FaPencilAlt className={styles.icon} />
                        </div>
                    </div>
                    
                    <div className={styles.inputBox}>
                        <input
                            type='text'
                            placeholder='Email...'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FaUser className={styles.icon} />
                    </div>
                    <div className={styles.inputBox}>
                        <input
                            type='password'
                            placeholder='Password...'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FaLock className={styles.icon} />
                    </div>
                    <button type='submit' className={styles.loginButton}>Register</button>
                    <div className={styles.firebaseLogin}>
                        <button
                            type='button'
                            className={styles.facebook}
                            onClick={handleFacebookSignIn}
                        >
                            <img src={facebook_login} alt='Facebook logo' />
                            Login with Facebook
                        </button>
                        <button
                            type='button'
                            className={styles.google}
                            onClick={handleGoogleSignIn}
                        >
                            <img src={google_login} alt='Google logo' />
                            Login with Google
                        </button>
                    </div>
                    <div className={styles.registerLink}>
                        <p>Already have an account? <Link to='/'>Login</Link></p>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default RegisterForm;
