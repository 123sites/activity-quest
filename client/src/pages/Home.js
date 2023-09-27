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
import { getRecentEvents } from "../api/events.js";
import { motion, AnimatePresence } from "framer-motion";

const Home = ({ handlePageChange }) => {
  const { theme } = useContext(ThemeContext);
  const [currentPath, setCurrentPath] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    console.log(currentPath);
    setCurrentPath(window.location.pathname);
  }, [currentPath]);

  useEffect(() => {
    (async () => {
      // Get recent events near the user's current location
      navigator.geolocation.getCurrentPosition(async (position) => {
        setEvents(
          await getRecentEvents(
            position.coords.latitude,
            position.coords.longitude
          )
        );
      });
    })();
  }, []);

  return (
    <AnimatePresence>
      <div className="container">
        <div>
          <h1 className={`htitle-${theme} m-3 text-center`}>
            Welcome to Activity Quest!
          </h1>
          <h4 className={`htext-${theme} text-center`}>
            Your one-stop App that helps you find fun activities in your area!
          </h4>
        </div>
        <span className="border border-4 border-black">
          <div
            id="bootstrapCarousel"
            className="carousel slide text-center"
            data-bs-ride="carousel"
          >
            <div className={`carousel-inner carousel-${theme} mt-3`}>
              {events.map((event, i) => {
                return (
                  <a href={event.url} target="_blank" rel="noreferrer">
                    <figure
                      className={`carousel-item ${i === 0 ? "active" : ""}`}
                      data-bs-interval="5000"
                    >
                      <img
                        src={event.images[5].url}
                        className="d-block w-100"
                        alt="Images of events in your area."
                      />
                      <figcaption>{event.name}</figcaption>
                    </figure>
                  </a>
                );
              })}
            </div>
            <motion.button
              className={`carouselPrevious-${theme} m-3`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 500 }}
              style={{ cursor: "pointer" }}
              type="button"
              data-bs-target="#bootstrapCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </motion.button>
            <motion.button
              className={`carouselNext-${theme}`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 500 }}
              style={{ cursor: "pointer" }}
              type="button"
              data-bs-target="#bootstrapCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </motion.button>
          </div>
        </span>
      </div>
    </AnimatePresence>
  );
};

export default Home;
