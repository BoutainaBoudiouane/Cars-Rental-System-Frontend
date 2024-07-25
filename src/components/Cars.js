import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsFillEyeFill, BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import '../Style/Cars.css'

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch cars data from the API
    const fetchCars = async () => {
      try {
        // Replace with your actual authentication token
        const response = await axios.get('http://localhost:8000/api/v1/cars', {
        });

        if (Array.isArray(response.data.cars)) {
          setCars(response.data.cars);
        } else {
          console.error('Invalid response format. Expected an array.');
        }
      } catch (error) {
        console.error(error.response.data.cars);
      }
    };

    fetchCars();
  }, []);
  return (
    <Container>
      <h1 style={{color:"#E759AC"}}>Cars</h1>
      <Row>
          <Col md={6}>
            <h2  style={{color:"#E3319D"}}>Welcome to Our Car Rental Service</h2>
          </Col>
        </Row>
      <Row>
        {cars.map((car) => (
          <Col sm={6} md={4} lg={3} key={car.id}>
            <Card className="mb-4"><div className="image-container">
        <Card.Img variant="top" src={`http://localhost:8000/api/${encodeURIComponent(car.image)}`} alt="Car" />
      </div>
              <Card.Body>
                <Card.Title>{car.brand}</Card.Title>
                <Card.Text>Rental Price: {car.rental_price}</Card.Text>
                <Card.Text>
                  Availability: {car.available ? <BsCheckCircleFill className="text-success" /> : <BsXCircleFill className="text-danger" />}
                </Card.Text>
                <Button variant="primary" as={Link} to={`/cars/${car.id}`} className="mr-2">
                  <BsFillEyeFill /> View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cars;
