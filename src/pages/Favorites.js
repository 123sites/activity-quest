import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/navbar.js";
import "../components/Footer/footer.js";
import "../assets/index.css";
import "../App.css";
import "../assets/navbar.css";
import "../index.css";
import "../components/Motion/styles.css";

const Favorites = ({ handlePageChange }) => {
  const [currentPath, setCurrentPath] = useState("");
  console.log(currentPath);

  useEffect(() => {
    console.log(currentPath);
    setCurrentPath(window.location.pathname);
  }, [currentPath]);

  return <div className="container-fluid"></div>;
};

export default Favorites;
