import React, { useState, useEffect } from "react";
import "../App.css";
import "../index.css";
import "./Navbar";

const Home = ({ handlePageChange }) => {
  const [currentPath, setCurrentPath] = useState("");
  console.log(currentPath);

  useEffect(() => {
    console.log(currentPath);
    setCurrentPath(window.location.pathname);
  }, []);

  return <div className="container-fluid"></div>;
};

export default Home;
