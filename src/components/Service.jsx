import React, { useState, useEffect, useRef } from 'react';
import web from '../components/Images/webDev.jpg';
import web2 from '../components/Images/AndroidD.jpg';
import web3 from '../components/Images/Ai-ml.png';
import web4 from '../components/Images/Ds.jpg';
import web5 from '../components/Images/Prompt.png';

const servicesData = [
  {
    title: 'Web Development',
    image: web,
    description: 'Web development is the process of building and maintaining websites or web applications. It involves everything from creating simple static web pages to complex dynamic applications, e-commerce platforms, and social networks'},
  {
    title: 'Android Development',
    image: web2,
    description: 'Android development is the process of creating applications for devices running the Android operating system. It involves designing and building user-friendly, feature-rich mobile apps that can run on smartphones, tablets, TVs, and wearable devices.'
  },
  {
    title: 'Machine Learning and AI',
    image: web3,
    description: 'Artificial Intelligence (AI) is the broader concept of machines being able to carry out tasks in a smart way, while Machine Learning (ML) is a subset of AI that enables systems to learn from data and improve automatically without explicit programming.'
  },
  {
    title: 'Data Science',
    image: web4,
    description: 'Data Science is an interdisciplinary field that uses statistical analysis, machine learning, and data visualization to extract meaningful insights and drive decisions from large and complex datasets.'
  },
  {
    title: 'Prompt Engineering',
    image: web5,
    description: '**Prompt Engineering** is the practice of designing and refining inputs (prompts) to effectively communicate with AI models, like ChatGPT, in order to generate accurate, relevant, and useful outputs for a wide range of tasks.'
  }
];

const Service = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);
  const sliderRef = useRef(null);

  const toggleDescription = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: 360, behavior: 'smooth' });
        if (
          sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >=
          sliderRef.current.scrollWidth
        ) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 className="text-center" style={{ marginTop: '40px', fontWeight: 'bold' }}>Our Services</h1>
      
      {/* Slider Container */}
      <div
        ref={sliderRef}
        style={{
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          padding: '40px 20px',
          marginTop: '40px',
          borderRadius: '20px',
          height: '500px',
          scrollBehavior: 'smooth',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          overflowY: 'hidden'
        }}
        onWheel={(e) => {
          e.preventDefault();
          sliderRef.current.scrollLeft += e.deltaY;
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            gap: '30px'
          }}
        >
          {servicesData.map((service, index) => (
            <div
              key={index}
              style={{
                width: '350px',
                border: '1px solid #ddd',
                borderRadius: '15px',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
                display: 'inline-block',
                whiteSpace: 'normal',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                height: '100%'
              }}
            >
              <img
                src={service.image}
                alt="service"
                style={{
                  width: '100%',
                  height: '220px',
                  objectFit: 'cover',
                  borderTopLeftRadius: '15px',
                  borderTopRightRadius: '15px'
                }}
              />
              <div style={{ padding: '20px' , color: 'rgba(42, 245, 6, 0.88)'}}>
                <h5 style={{ fontWeight: 'bold' }}>{service.title}</h5>
                {visibleIndex === index && (
                  <p style={{ fontSize: '14px', marginTop: '10px' }}>
                    {service.description}
                  </p>
                )}
                <button
                  onClick={() => toggleDescription(index)}
                  style={{
                    marginTop: '10px',
                    padding: '10px 14px',
                    backgroundColor: 'rgba(42, 245, 6, 0.88)',
                    color: 'black',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                >
                  {visibleIndex === index ? 'Hide Description' : 'Show Description'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Banner Section */}
      <div>
        <div
          style={{
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
          }}
        >
          <h1 className="popping-text" style={{ fontSize: '4.5rem', fontWeight: '900' }}>
            Enroll Now to Get Our Exclusive Courses
          </h1>
        </div>
      </div>

      {/* Footer Section */}
      
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

    </>
  );
};

export default Service;
