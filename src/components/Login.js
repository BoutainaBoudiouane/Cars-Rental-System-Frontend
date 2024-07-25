import React, { useState } from 'react';
import { AiFillMail, AiFillLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import'../Style/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate ();


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   /*  const {data} =await axios.get('http://localhost:8000/api/v1/token').then(rsp =>{
      
    })
    console.log(data) */
    try {
      const response = await axios.post('http://localhost:8000/api/v1/login', {
        email,
        password,
      });
      // Check if response.data is defined
      if (response.data && response.data.token) {
        // Handle successful login, e.g., store token in local storage
        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user',response.data.user)
        setLoginSuccess(true);
        setLoginError(false);
        navigate('/userDashboard');
      
      } else {
        // Handle unexpected response format
        console.error('Invalid response format');
        console.error('Invalid response format');
      }
    } catch (error) {
      // Handle error, e.g., display error message
      console.error(error.response.data.message);
      setLoginSuccess(false);
      setLoginError(true);
      navigate('/Register')
    }

    
  };

  return (
    <div className="glass-background">
      <div className="container">
        <div className="login-wrapper">
          <h2 style={{ color: "#E759AC" }}>Welcome Back!</h2>
          <p>Login to your account</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">
                <AiFillMail /> Email:
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
                <AiFillLock /> Password:
              </label>
              <div className="password-input">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
              </div>
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-primary" value="Login" />
            </div>
            {loginSuccess && (
              <div className="alert alert-success mt-3" role="alert">
                Login successful!
              </div>
            )}
            {loginError && (
              <div className="alert alert-danger mt-3" role="alert">
                Invalid email or password. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
