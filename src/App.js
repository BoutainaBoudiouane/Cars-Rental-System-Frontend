/* import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/users')
  .then(response => {
    const usersData = response.data.users; // Extract the user data from the response
    setUsers(usersData); // Set the user data in the state
  })
  .catch(error => console.error(error));


  }, []);
  console.log(users)

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
 */
import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UserDashboard from './components/UserDashboard';
import Cars from './components/Cars';
import Rentals from './components/Rentals';
import Registration from './components/Registration';
import CarDetail from './components/CarDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="background-image">
         <Navbar />
        <Container className="mt-5">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/Userdashboard" element={<UserDashboard />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/cars/:carId" element={<CarDetail />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;

