import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../assets/index.css";
import "../../assets/navbar.css";
import "../../assets/login.css";
import "../../App.css";
import Logo from "../../images/logo.png";

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
    <nav className="navbar">
      <div className="container-fluid">
        <div className="row col">
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
            <img
              className="w-5"
              src={Logo}
              alt="AQ initials for Activity quest brand name."
            />
            <a className="navbar-brand brand p-4" href="/">
              Activity Quest
            </a>
          </div>
          <div className="nav-elements row mt-2">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/Account">Account</Link>
              </li>
              <li>
                <Link to="/Search">Activity Search</Link>
              </li>
              <li className="nav-item">
                <Link to="/Favorites">Favorites</Link>
              </li>
              <li className="nav-item">
                <Link to="/Login">Sign-Up</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/Login">Sign-Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
