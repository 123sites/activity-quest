import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar/navbar.js";
import "../assets/index.css";
import "../assets/home.css";
import { ThemeContext } from "../Theme/themeContext";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = ({ handlePageChange }) => {
  const [currentPath, setCurrentPath] = useState("");
  console.log(currentPath);

  useEffect(() => {
    console.log(currentPath);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { toggleTheme, theme } = useContext(ThemeContext);
    setCurrentPath(window.location.pathname);
  }, [currentPath]);

  return (
    <div className="container-fluid">
      <Navbar />
      <div>
        <h1 className="text-center home-title m-5">
          Welcome to Activity Quest!
        </h1>
        <h4 className="text-center home-text mb-5">
          Your one-stop App that helps you find fun activities in your area!
        </h4>
      </div>
      <div id="carouselExample" className="carousel slide m-5">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../images/img1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/img2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
        </div>
        <div className="text-center">
          <button
            className="carousel-control-prev btn-light p-2 m-2"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next btn-light p-2"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
