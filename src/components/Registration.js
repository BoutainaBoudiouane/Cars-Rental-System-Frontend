import React, { useState } from 'react';
import axios from 'axios';
import { BsPerson, BsEnvelope, BsLock } from 'react-icons/bs';
import '../Style/Registration.css'

const Registration = () => {
  // State variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the user object
    const user = {
      name: name,
      email: email,
      password: password,
    };

    // Make an API request to register the user
    axios.post('http://localhost:8000/api/v1/register', user)
      .then((response) => {
        // Handle success response
        console.log(response.data);
        // Reset form fields
        setName('');
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        // Handle error response
        console.error(error.response.data);
      });
  };

  return (
    <div className="glass-background">
      <div className="container">
        <div className="registration-wrapper">
          <h2>Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                <BsPerson /> Name:
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <BsEnvelope /> Email:
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <BsLock /> Password:
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );  
};

export default Registration;
