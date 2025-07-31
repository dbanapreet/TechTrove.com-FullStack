import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = ({ onClose }) => {
  const handleClose = () => {
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    password: ""
  });

  const { name, username, email, phone, website, password } = user;

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/register", {
        name,
        username,
        email,
        phone,
        password
      });

      console.log(response.data);
      alert("Registration successful!");

      // Reset form
      setUser({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
        password: ""
      });

      // Optionally close or redirect
      // onClose();
    } catch (err) {
      console.error(err);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <div className="container">
        <form className="registration-form" onSubmit={handleSubmit}>
          <h2>User Registration</h2>
          <p className='close' onClick={handleClose}>&times;</p>

          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter your Name" value={name} onChange={onInputChange} required />
          </div>

          <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" placeholder="Enter your Username" value={username} onChange={onInputChange} required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your Email" value={email} onChange={onInputChange} required />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input type="number" name="phone" placeholder="Enter your Phone Number" value={phone} onChange={onInputChange} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter Password" value={password} onChange={onInputChange} required />
          </div>

          <button className='btnreg' type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
