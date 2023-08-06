import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/navbar.js";
import "../assets/index.css";

const Favorites = ({ handlePageChange }) => {
  const [currentPath, setCurrentPath] = useState("");
  console.log(currentPath);

  useEffect(() => {
    console.log(currentPath);
    setCurrentPath(window.location.pathname);
  }, [currentPath]);

  return (
    <div className="container-fluid">
      <Navbar />
    </div>
  );
};

export default Favorites;
