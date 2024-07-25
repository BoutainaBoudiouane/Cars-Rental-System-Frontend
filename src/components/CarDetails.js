/* import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function CarDetail() {
  const { carId } = useParams();
  const [car, setCar] = useState(null);
  const [isRented, setIsRented] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/cars/${carId}`)
      .then(response => {
        setCar(response.data);
        setIsRented(true);
      })
      .catch(error => {
        console.error(error);
      });
  }, [carId]);

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Car Details</h2>
      <h4>{car.brand}</h4>
      <p>{car.model}</p>
      <p>Year: {car.year}</p>
      <p>Color: {car.color}</p>
      <p>Rental Price: {car.rental_price}</p>
      <p>Availability: {car.available ? 'Available' : 'Not Available'}</p>
      <img src={car.image} alt="Car" />
      {isRented ? (
        <p>This car is already rented.</p>
      ) : (
        <Button variant="primary" onClick={handleRent}>
          Rent Car
        </Button>
      )}
    </div>
  );
}

export default CarDetail;
 */
import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs';
import axios from 'axios';
import '../Style/CarDetails.css'

function CarDetail() {
  const { carId } = useParams();
  const [car, setCar] = useState(null);
  const [isRented, setIsRented] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/cars/${carId}`)
      .then(response => {
        setCar(response.data);
        setIsRented(response.data.isRented);
      })
      .catch(error => {
        console.error(error);
      });
  }, [carId]);

  const handleRent = () => {
    axios.post(`http://localhost:8000/api/v1/rentals`, {
      user_id:localStorage.getItem("user"),
      carId: car.id,
      rental_start_date: '2022-05-01',
      rental_end_date: '2023-05-07'
    })
      .then(response => {
        setIsRented(true);
        console.log(response)
        navigate('/rentals'); // Redirect to rentals page after successful rental
      })
      .catch(error => {
        console.error(error);
      });
  };

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className="car-detail-container">
      <h2 className="car-detail-title">Car Details</h2>
      <div className="car-detail-card">
        <div className="car-detail-info">
          <h4 className="car-detail-brand">{car.brand}</h4>
          <p className="car-detail-model">{car.model}</p>
          <p className="car-detail-year">Year: {car.year}</p>
          <p className="car-detail-color">Color: {car.color}</p>
          <p className="car-detail-price">Rental Price: {car.rental_price}</p>
          <p className="car-detail-availability">
          Availability: {car.available ? <BsCheckCircleFill className="text-success" /> : <BsXCircleFill className="text-danger" />}
          </p>
          {isRented ? (
            <p className="car-detail-rented">
              This car is already rented. <BsCheckCircleFill /> <BsXCircleFill className="cancel-icon" />
            </p>
          ) : (
            <div className="car-detail-actions">
              
              
            </div>
          )}<Button variant="primary" onClick={handleRent}>
                Rent Car
              </Button>
        </div>
        <div className="car-detail-image">
          <img  src={`http://localhost:8000/api/${encodeURIComponent(car.image)}`} alt="Car" />
        </div>
      </div>
    </div>
  );
}

export default CarDetail;


//<img variant="top" src={`http://localhost:8000/api/${encodeURIComponent(car.image)}`} alt="Car" />