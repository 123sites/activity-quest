import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import Logo from "../../images/logo.jpg";
import { ThemeContext } from "../Theme/themeContext";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/index.css";
import "../../assets/navbar.css";
import "../../App.css";

const Navbar = ({ handlePageChange }) => {
  const [currentPath, setCurrentPath] = useState("");
  const { toggleTheme, theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(currentPath);
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg sticky-top brand-${theme}`}>
      <div className="container-fluid">
        <div className="row col">
          <div className="col">
            <Link
              className={`nav-link ${theme} text-center d-inline-flex`}
              to="/home"
            >
              {/* <img src={Logo} className="logo" alt="Activity Quest Logo" /> */}

              <div
                className={`name-${theme} navbar-brand navbar-expand-lg mt-2 ml-4 fw-bold mb-0`}
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
                    className={`nav-link link-${theme} text-center link ml-3 fw-bolder`}
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-link fw-boldest">
                  <Link
                    className={`nav-link link-${theme} text-center link fw-bolder`}
                    to="/account"
                  >
                    Account
                  </Link>
                </li>
                <li className="nav-link fw-boldest">
                  <Link
                    className={`nav-link ${theme} text-center link fw-bolder`}
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
                    className={`nav-link link-${theme} text-center link fw-bolder`}
                    to="/signup"
                  >
                    Sign-up
                  </Link>
                </li>
                <li className="nav-link fw-boldest">
                  <Link
                    className={`nav-link link-${theme} text-center link fw-bolder`}
                    to="/login"
                  >
                    Log-in
                  </Link>
                </li>
                <li className="nav-link fw-boldest">
                  <Link
                    className={`nav-link link-${theme} text-center link fw-bolder`}
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
