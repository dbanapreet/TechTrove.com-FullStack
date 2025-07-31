import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';



const App = () => {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') { 
      setMode('dark');
      document.body.style.backgroundColor = '#2B3A47'; // Dark mode background color
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'; // Light mode background color
    }
  };

  return (
    <div>
      <Navbar title="TechTrove.com" mode={mode} toggleMode={toggleMode} />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;

