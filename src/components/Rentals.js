import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCar, faCalendar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import '../Style/Rentals.css';
import { Element } from 'react-scroll';


const Rentals = () => {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    // Fetch rentals data from the API
    const fetchRentals = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/rentals');
        setRentals(response.data.rentals);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    fetchRentals();
  }, []);

  return (
    <Element name="rentals" className="rentals-container">
    <h2 className="title" style={{ color: "#E759AC", textAlign: "center" }}>Rentals</h2>
    {rentals.map((rental) => (
      <div key={rental.id} className="rental-item">
        <h4>
          <FontAwesomeIcon icon={faUser} /> User ID: {rental.user_id}
        </h4>
        <p>
          <FontAwesomeIcon icon={faCar} /> Car ID: {rental.car_id}
        </p>
        <p>
          <FontAwesomeIcon icon={faCalendar} /> Start Date: {rental.rental_start_date}
        </p>
        <p>
          <FontAwesomeIcon icon={faCalendar} /> End Date: {rental.rental_end_date}
        </p>
        {/* Display other rental details as needed */}
      </div>
    ))}
  </Element>
);
  
};

export default Rentals;
