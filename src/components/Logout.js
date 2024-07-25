import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai';
import axios from 'axios';

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
  
      // Check if the token exists
      if (!token) {
        console.error('No access token found');
        return;
      }
      console.log(token)
      // Make a request to the logout endpoint
      await axios.post(
        'http://localhost:8000/api/v1/logout',
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      // Clear the token from local storage
      localStorage.removeItem('token'); 
      localStorage.removeItem('user');
      navigate('/login');
  
      // Redirect to the login page or any other desired route
      
    } catch (error) {
      // Handle error
      console.log(error)
      
    }
  };

  return (
    <Button variant="primary" onClick={handleLogout}>
      <AiOutlineLogout className="mr-2" /> Logout
    </Button>
  );
};

export default Logout;
