/* import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom-blue container-fluid">
    <div className="container">
      <Link to="/" className="navbar-brand">
      <img src="/vrom.png" className="logo" alt="Logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cars" className="nav-link">
              Cars
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/rentals" className="nav-link">
              Rentals
            </Link>
          </li>
        </ul>
        <div className="navbar-right-links">
          <Link to="/login" className="nav-link login-link">
            Login
          </Link>
          <Link to="/register" className="nav-link register-link">
            Register
          </Link>
        </div>
      </div>
    </div>
  </nav>
);
};

export default Navbar;
 */
import React, { useState } from "react";
import '../Style/Navbar.css'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  React.useEffect(() => {
    const navToggle = document.querySelector(".nav__toggle");
    const navWrapper = document.querySelector(".nav__wrapper");

    const toggleNav = () => {
      if (navWrapper.classList.contains("active")) {
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "menu");
        navWrapper.classList.remove("active");
      } else {
        navWrapper.classList.add("active");
        navToggle.setAttribute("aria-label", "close menu");
        navToggle.setAttribute("aria-expanded", "true");
      }
    };

    navToggle.addEventListener("click", toggleNav);

    return () => {
      navToggle.removeEventListener("click", toggleNav);
    };
  }, []);

  return (
    <header className="site-header">
      <div className=" site-header__wrapper">
        <div className="site-header__start">
          <a href="/" className="brand">
          <img src="/vrom.png" className="logo" alt="Logo" />
          </a>
        </div>
        <div className="site-header__middle">
          <nav className={`nav ${isNavOpen ? "active" : ""}`}>
            <button
              className="nav__toggle"
              id="pink-button"
              aria-expanded={isNavOpen ? "true" : "false"}
              type="button"
              onClick={handleNavToggle}
            >
              menu
            </button>
            <ul className="nav__wrapper">
              <li className="nav__item">
                <a href="/">Home</a>
              </li>
              <li className="nav__item">
                <a href="/Cars">Cars</a>
              </li>
              <li className="nav__item">
                <a href="/Rentals">Rentals</a>
              </li>
              <li className="nav__item">
                <a href="/UserDashboard">UserDashboard</a>
              </li>
              <li className="nav__item">
                <a href="/Login">Login</a>
              </li>
              <li className="nav__item">
                <a href="/Logout">Logout</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="site-header__end">
  <a href="/register" className="pink-button">Sign in</a>
</div>

      </div>
    </header>
  );
};



export default Navbar;
