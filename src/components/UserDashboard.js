import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import '../Style/UserDashboard.css'
const UserDashboard = () => {
  const [rentedCars, setRentedCars] = useState([]);
  const navigate = useNavigate('');

  useEffect(() => {
    const fetchRentedCars = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/user/rented-cars/${localStorage.getItem("user")}`);
        setRentedCars(response.data.rentedCars);
        console.log(response.data.rentedCars)
      } catch (error) {
        console.error(error);
        navigate('/login');
      }
    };

    fetchRentedCars();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="title" style={{color:"#E759AC"}}>Dashboard</h2>
        </Col>
      </Row>
      <Row className="dashboard">
        {rentedCars.map((car) => (
          <Col key={car.id} className="car-card">
            <div className="car-image-container">
              <img className="car-image" src={`http://localhost:8000/api/${encodeURIComponent(car.image)}`} alt="Car" />
            </div>
            <div className="car-details">
              <p className="car-brand">{car.brand}</p>
              <p className="car-model">{car.model}</p>
              <p className="car-year">Year: {car.year}</p>
              <p className="car-color">Color: {car.color}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserDashboard;

