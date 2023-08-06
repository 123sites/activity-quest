import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../assets/index.css";
import "../../assets/navbar.css";
import "../../assets/login.css";
import "../../App.css";

import { ThemeContext } from "../Theme/themeContext";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ handlePageChange }) => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    console.log(currentPath);
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <nav className="navbar navbar-inverse p-3 top sticky-lg-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand p-2" href="/">
            Activity Quest
          </a>
        </div>
        <div className="collapse navbar-collapse row" id="myNavbar">
          <ul className="nav navbar-nav text-center col">
            <Link className={`nav-link text-center`} to="/Home">
              Home
            </Link>
            <Link className={`nav-link text-center`} to="/Search">
              Activity Search
            </Link>
            <Link className={`nav-link text-center`} to="/Account">
              Account
            </Link>
            <Link className={`nav-link text-center`} to="/Favorites">
              Favorites
            </Link>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <Link className={`nav-link text-end`} to="Login">
              Login
            </Link>
            <button className="col p-2 m-3 logout fw-boldest"></button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
