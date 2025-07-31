import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import web from "../components/Images/img1.png";

const Home = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const now = Date.now();
    const expiry = localStorage.getItem('loginExpiry');

    if (expiry && now < parseInt(expiry)) {
      setIsLoggedIn(true);
    }

    const timer = setTimeout(() => {
      if (!expiry || now > parseInt(expiry)) {
        setShowPopup(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loginExpiry');
    setIsLoggedIn(false);
    setSuccessMessage("You have been logged out.");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setLoginError('Password must be at least 6 characters.');
      return;
    }

    axios.post('http://localhost:8000/login', { username, password })
      .then(res => {
        if (res.data === "Success") {
          const expiry = Date.now() + 30 * 60 * 1000; // 30 minutes in ms
          localStorage.setItem('loginExpiry', expiry.toString());

          setShowPopup(false);
          setLoginError('');
          setSuccessMessage("You are logged in successfully");
          setIsLoggedIn(true);

          setTimeout(() => setSuccessMessage(''), 3000);
          navigate('/');
        } else {
          setLoginError('Incorrect username or password');
        }
      })
      .catch(err => {
        console.error(err);
        setLoginError('Login failed. Please try again later.');
      });
  };

  return (
    <div>
      {/* Logout button */}
      {isLoggedIn && (
        <button
          onClick={handleLogout}
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            backgroundColor: '#ff4d4d',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 20px',
            cursor: 'pointer',
            zIndex: 1001,
            fontWeight: 'bold',
            boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
          }}
        >
          Logout
        </button>
      )}

      <section id="header">
        <div className='container-fluid nav_bg'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className={`col-md-7 pt-9 pt-lg-0 order-2 order-lg-1-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ marginTop: '190px' }}>
                <h1>
                  Grow your business with <strong className='brand-name'>TechTrove.com</strong>
                </h1>
                <h5 className='mt-3'>
                  We are the team of talented and passionate Web & Android developers
                </h5>
                <div className='mt-3'>
                  <Link className="btn-get-started" to="/service">Get Started</Link>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2 header-img" style={{ marginLeft: '750px', marginTop: '-210px', borderRadius: 30 }}>
                <img src={web} className='img-fluid animated' alt="home img" />
              </div>

              <div style={{
                height: '500px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgb(83, 251, 89)',
                textShadow: '0 2px 10px rgba(0,0,0,0.6)',
                overflow: 'hidden'
              }}>
                <h1 className="popping-text" style={{ fontSize: '4.5rem', fontWeight: '900' }}>
                  Empowering the Future with AI
                </h1>
              </div>

              <footer style={{
                width: '100vw',
                background: 'rgba(0, 0, 0, 0.7)',
                color: '#fff',
                padding: '60px 20px',
                textAlign: 'center',
                backdropFilter: 'blur(12px)',
                borderTop: '2px solid rgba(255,255,255,0.2)',
                borderRadius: '20px 20px 0 0',
                margin: '0 auto',
                position: 'relative',
                left: '50%',
                transform: 'translateX(-50%)',
              }}>
                <h2 style={{ marginBottom: '16px', fontWeight: 'bold', fontSize: '2rem', color: '#90EE90' }}>
                  TechTrove.com
                </h2>
                <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
                  Built with ❤️ by passionate developers | © 2025 All Rights Reserved
                </p>
                <p style={{ fontSize: '0.9rem', opacity: 0.75, marginBottom: '10px' }}>
                  Terms of Service • Privacy Policy • Contact
                </p>
                <div style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                  <p>📞 Contact: <a href="tel:+917479305378" style={{ color: '#90EE90', textDecoration: 'none' }}>+91 74793 05378</a></p>
                  <p>📧 Email: <a href="mailto:bldasvishal@gmail.com" style={{ color: '#90EE90', textDecoration: 'none' }}>bldasvishal@gmail.com</a></p>
                  <p>📍 Location: Siliguri, West Bengal (IND)</p>
                </div>
              </footer>


              {successMessage && (
                <div style={{
                  position: 'fixed',
                  top: '20px',
                  right: isLoggedIn ? '150px' : '20px',
                  backgroundColor: 'rgb(83, 251, 89)',
                  color: '#000',
                  fontWeight: 'bold',
                  padding: '15px 20px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  zIndex: 9999
                }}>
                  {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {showPopup && (
        <div style={styles.overlay}>
          <div style={styles.popup}>
            <h2 style={styles.heading}>Login</h2>
            <form style={styles.form} onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Username"
                style={styles.input}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                style={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" style={styles.submitBtn}>Login</button>
              {loginError && <p style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>{loginError}</p>}
              <div style={{ marginTop: '10px', textAlign: 'center' }}>
                <span>Don't have an account? </span>
                <NavLink to="/contact" style={{ color: 'green', cursor: 'pointer' }}>
                  Register
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw', height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 1000,
  },
  popup: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0 0 15px rgba(0,0,0,0.4)',
    width: '350px',
    position: 'relative',
    animation: 'fadeIn 0.4s ease-in-out',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontWeight: 'bold',
    fontSize: '1.8rem',
    color: '#007BFF'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    margin: '8px 0',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  submitBtn: {
    padding: '10px',
    marginTop: '10px',
    backgroundColor: 'rgb(83, 251, 89)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem'
  }
};

export default Home;
