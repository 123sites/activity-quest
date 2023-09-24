import React, { useState, useEffect } from "react";
import { useContext } from "react";
import "../components/Footer/footer.js";
import "../assets/index.css";
import "../assets/home.css";
import "../App.css";
import "../assets/navbar.css";
import "../index.css";
import { ThemeContext } from "../components/Theme/themeContext";
import "../components/Motion/styles.css";
import { motion } from "framer-motion";
import "../images/genealogists.png";
import "../images/img1.jpg";
import "../images/img3.jpg";

const Home = ({ handlePageChange }) => {
  const { theme } = useContext(ThemeContext);
  const [currentPath, setCurrentPath] = useState("");
  console.log(currentPath);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    console.log(currentPath);
    setCurrentPath(window.location.pathname);
  }, [currentPath]);

  return (
    <div className="container-fluid">
      <div>
        <h1 className={`htitle-${theme} m-3 text-center`}>
          Welcome to Activity Quest!
        </h1>
        <h4 className={`htext-${theme} text-center`}>
          Your one-stop App that helps you find fun activities in your area!
        </h4>
      </div>
      <div className="carousel-container row justify-center">
        <motion.div className={`carousel-${theme}`}>
          <iframe
            src="https://happier-confidence-222439.framer.app/"
            title="Images of events."
            allowFullScreen
            className="slider col data-framer-iframe"
          ></iframe>
        </motion.div>
      </div>

      <div
        id="bootstrapCarousel"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="../images/img1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="../images/carousel-item" data-bs-interval="2000">
            <img
              src="..images/genealogists.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img src="../images/img3.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className={`carouselPrevious-${theme}`}
          type="button"
          data-bs-target="#bootstrapCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className={`carouselPrevious-${theme}`}
          type="button"
          data-bs-target="#bootstrapCarousel"
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
  );
};

export default Home;
