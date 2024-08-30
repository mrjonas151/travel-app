import { Link, useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css';
import { FaUser, FaLock } from 'react-icons/fa';
import facebook_login from '../../assets/facebook_login.png';
import google_login from '../../assets/google_login.png';
import handleGoogleSignIn from '../../hooks/handleGoogleSignIn';
import handleFacebookSignIn from '../../hooks/handleFacebookSignIn';
import handleSignIn from '../../hooks/handleSignIn';
import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && user) {
            navigate('/home'); 
        }
    }, [user, loading, navigate]);

    const onSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await handleSignIn({ email, password });
            navigate('/tour-package'); 
        } catch (error) {
            console.error("Error during sign in", error);
        }
    };

    const goToHome = () => {
        navigate('/home');
    }

    return (
        <main className={styles.mainContainer}>
            <div className={styles.wrapper}>
                <form onSubmit={onSignIn}>
                    <h1>Login</h1>
                    
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
                    
                    <button type='submit' className={styles.loginButton}>
                        Login
                    </button>
                    
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
                        <p>
                            Don't have an account? <Link to='/sign-up'>Register</Link>
                        </p>
                    </div>
                    <div className={styles.anonymousContainer}>
                        <p>or</p>
                        <h2 onClick={goToHome}>Sign in as anonymous</h2>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default LoginForm;
