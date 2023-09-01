import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import { ThemeContext } from "../Theme/themeContext";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/index.css";
import "../../assets/navbar.css";
import "../../App.css";
import { AnimatePresence } from "framer-motion";

const Navbar = ({ handlePageChange }) => {
  const [currentPath, setCurrentPath] = useState("");
  const { toggleTheme, theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(currentPath);
    setCurrentPath(window.location.pathname);
  }, [currentPath]);

  return (
    <nav className={`navbar navbar-expand-lg sticky-lg-top top-${theme}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Link
              className="nav-link row d-inline-flex navbar-container ml-4 mt-1 justify-content-center"
              to="/home"
            >
              <div className="col-3">
                <img
                  src={Logo}
                  className="logo mr-0 col-8"
                  alt="Activity Quest Logo"
                />
              </div>
              <div
                className={`brand-${theme} row ml-0 mr-1 navbar-brand navbar-expand-lg`}
              >
                Activity Quest
              </div>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ></button>
          </div>
          <div className="nav-elements row">
            <div className="col">
              <ul className="navbar-nav d-flex mb-2 ml-4 mb-lg-0">
                <li className="nav-link">
                  <Link
                    className={`nav-link link-${theme} text-center link ml-4`}
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-link fw-boldest">
                  <Link
                    className={`nav-link link-${theme} text-center link`}
                    to="/account"
                  >
                    Account
                  </Link>
                </li>
                <li className="nav-link fw-boldest">
                  <Link
                    className={`nav-link link-${theme} text-center link`}
                    to="/favorites"
                  >
                    Favorites
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul className="navbar-nav d-flex mb-2 ml-4 mb-lg-0">
                <li className="nav-link fw-boldest">
                  <Link
                    className={`nav-link link-${theme} text-center link`}
                    to="/signup"
                  >
                    Sign-up
                  </Link>
                </li>
                <li className="nav-link fw-boldest">
                  <AnimatePresence>
                    <Link
                      className={`nav-link link-${theme} text-center link`}
                      to="/login"
                    >
                      Log-in
                    </Link>
                  </AnimatePresence>
                </li>
                <li className="nav-link fw-boldest">
                  <Link
                    className={`nav-link link-${theme} text-center link`}
                    to="/logout"
                  >
                    Log-out
                  </Link>
                </li>
              </ul>
            </div>
            <div className="ml-3 mt-2 sun-moon">
              {/* // eslint-disable-next-line no-undef */}
              <button onClick={toggleTheme}>
                {theme === "light" ? (
                  <FontAwesomeIcon icon={faMoon} className="m-1 sun-moon" />
                ) : (
                  <FontAwesomeIcon icon={faSun} className="m-1 sun-moon" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
