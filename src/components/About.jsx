import React from 'react';
import web from "../components/Images/img-2.png";
import { Link } from 'react-router-dom';

const Home = (props) => {
  const keyframesStyle = `
    @keyframes poppin {
      0% {
        opacity: 0;
        transform: scale(0.9);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
  `;

  return (
    <div>
      {/* Injecting keyframes directly */}
      <style>{keyframesStyle}</style>

      <section id="header">
        <div className='container-fluid nav_bg'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className="row d-flex align-items-center" style={{ marginTop: '100px' }}>

                {/* Left Column */}
                <div className={`col-md-6 order-2 order-lg-1 text-${props.mode === 'light' ? 'dark' : 'dark'}`}>
                  <h1>
                    Welcome to About Page <strong className='brand-name'>TechTrove.com</strong>
                  </h1>

                  <h5 className='mt-3'>
                    We are the team of talented and passionate Web developers
                  </h5>

                  <div className='mt-3'>
                    <Link className="btn-get-started" to="/contact">Contact Now</Link>
                  </div>

                  {/* Animated Paragraph */}
                  <h5
                    className="mt-5"
                    style={{
                      maxWidth: '800px',
                      marginTop: '60px',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      paddingLeft: '10px', // Added slight left padding to balance the visual start
                      textAlign: 'justify',
                      textIndent: '40px', // Increased indent for clearer visual impact
                      color: 'rgb(83, 251, 89)',
                      fontSize: '1.05rem',
                      lineHeight: '1.6',
                      animation: 'poppin 0.7s ease-out forwards',
                      animationDelay: '0.2s',
                      animationFillMode: 'forwards',
                      opacity: 1,
                      transform: 'scale(1)'
                    }}
                  >
                    We are a passionate group of tech professionals committed to empowering unskilled individuals and college students by providing practical, industry-focused training in cutting-edge fields like Web Development, Android App Development, Artificial Intelligence & Machine Learning, Data Science, and Prompt Engineering. Our mission is to bridge the gap between education and employability by equipping learners with hands-on experience, real-world projects, and mentorship from experts. Whether you're a beginner seeking direction or a student aiming to enhance your career prospects, we provide the skills, support, and confidence needed to thrive in today’s tech-driven world.
                  </h5>
                </div>
                {/* Right Column - Image */}
                <div className="col-md-6 order-1 order-lg-2 header-img text-center">
                  <img
                    src={web}
                    className='img-fluid animated'
                    alt="home"
                    style={{ height: '460px' }}
                  />
                </div>
              </div>

              {/* Hero Section */}
                 <div style={{
                height: '500px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgb(243, 251, 83)',
                textShadow: '0 2px 10px rgba(0,0,0,0.6)',
                overflow: 'hidden'
              }}>
                <h1 className="popping-text" style={{ fontSize: '4.5rem', fontWeight: '900' }}>
                  Empowering the Future with AI
                </h1>
              </div>

              {/* Footer */}
             
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

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
