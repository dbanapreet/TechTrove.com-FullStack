import React from 'react';
import { useState } from 'react';
import web from '../components/Images/img-3.png';
import RegistrationForm from '../components/RegistrationForm';

const Contact = () => {
  const [regOpen, setRegOpen] = useState(false);

  const handleCloseRegistrationForm = () => {
    setRegOpen(false); // Set regOpen state to false to close the RegistrationForm
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

  };

  return (
    <div>
      <h1 style={{ marginLeft: '870px', marginTop: '35px' }}>Contact Us</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px', marginLeft: '250PX' }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <h3 htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </h3>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ width: '350px' }} />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <h3 htmlFor="exampleInputPassword1" className="form-label">
              Password
            </h3>
            <input type="password" className="form-control" id="exampleInputPassword1" style={{ width: '350px' }} />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>

          <p className="yk-2">Don't have Account. Register</p>
          <div className="mt-3">
            <button
              className="btn-get-started2"
              style={{ backgroundColor: 'rgb(3, 133, 24)' }}
              onClick={() => setRegOpen(true)}
            >
              Register
            </button>

          </div>

          <div className="col-lg-6 order-1 order-lg-2 header-img" style={{ marginLeft: '550px', marginTop: '-450px' }}>
            <img src={web} className="img-fluid animated" alt="home img " style={{ width: '1400px', height: '480px' }} />
          </div>
        </form>

        {regOpen && <RegistrationForm onClose={handleCloseRegistrationForm} />}
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
        margin: '60px auto 0 auto', // Adds top margin
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

    </div>
  );
};

export default Contact;


