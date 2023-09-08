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
        <h1 className={`htitle-${theme} m-5 text-center`}>
          Welcome to Activity Quest!
        </h1>
        <h4 className={`htext-${theme} mx-5 text-center`}>
          Your one-stop App that helps you find fun activities in your area!
        </h4>
      </div>
      <div className="d-block carousel-container row justify-center">
        <motion.div className={`carousel-${theme} col`}>
          <iframe
            src="https://happier-confidence-222439.framer.app/"
            title="Images of events."
            allowFullScreen
            className="slider col data-framer-iframe"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
