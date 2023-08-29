import React, { useState, useEffect } from "react";
import { useContext } from "react";
import "../components/Footer/footer.js";
import "../assets/index.css";
import "../assets/home.css";
import "../App.css";
import "../assets/navbar.css";
import "../index.css";
import { ThemeContext } from "../components/Theme/themeContext";
import img1 from "../images/img1.jpg";
import genealogists from "../images/genealogists.png";
import img3 from "../images/img3.jpg";

const Home = ({ handlePageChange }) => {
  const { theme } = useContext(ThemeContext);
  const [currentPath, setCurrentPath] = useState("");
  console.log(currentPath);

  useEffect(() => {
    console.log(currentPath);
    setCurrentPath(window.location.pathname);
  }, [currentPath]);

  return (
    <div className="container-fluid">
      <div>
        <h1 className={`text-center htitle-${theme} m-5`}>
          Welcome to Activity Quest!
        </h1>
        <h4 className={`text-center htext-${theme} m-5`}>
          Your one-stop App that helps you find fun activities in your area!
        </h4>
      </div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-ride="carousel">
            <img src={img1} className="active d-block w-100" alt="..." />
          </div>

          <div className="carousel-item active" data-bs-ride="carousel">
            <img src={genealogists} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item active" data-bs-ride="carousel">
            <img src={img3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <div className="text-center">
          <button
            className="carousel-control-prev m-3 btn-light"
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
            className="carousel-control-next btn-light"
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
