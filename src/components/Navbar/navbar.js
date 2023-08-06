import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../assets/index.css";
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
    <nav className="navbar navbar-inverse">
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
          <a className="navbar-brand" href="/">
            Logo
          </a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav fw-boldeset text-center">
            <Link
              className={`nav-link text-center letter-spacing-sm`}
              to="/Home"
            >
              Home
            </Link>
            <Link
              className={`nav-link text-center letter-spacing-sm`}
              to="/Search"
            >
              Activity Search
            </Link>
            <Link
              className={`nav-link text-center letter-spacing-sm`}
              to="/Account"
            >
              Account
            </Link>
            <Link
              className={`nav-link text-center letter-spacing-sm`}
              to="/Favorites"
            >
              Favorites
            </Link>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <Link className={`nav-link text-end btn-light`} to="Login">
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
