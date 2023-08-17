import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/AQ.png";
import { ThemeContext } from "../Theme/themeContext";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/index.css";
import "../../assets/navbar.css";
import "../../assets/login.css";
import "../../App.css";

const Navbar = ({ handlePageChange }) => {
  const [currentPath, setCurrentPath] = useState("");
  const { toggleTheme, theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(currentPath);
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg header sticky-lg-top top-${theme}`}
    >
      {/* <nav className="navbar navbar-expand-lg sticky-lg-top"> */}
      <div className="container-fluid">
        {/* DIV 1 */}
        <div className="row">
          <div className="col">
            <Link
              className={`nav-link ${theme} text-center fw-bolder col`}
              to="/home"
            >
              {/* <img src={Logo} className="logo" alt="AQ Logo" /> */}
              <div
                className={`name-${theme} navbar-brand navbar-expand-lg mt-2 ml-4 fw-bold mb-0`}
              >
                Activity Quest
              </div>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="nav-elements row">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-link">
                <li className="nav-link">
                  <Link
                    className={`nav-link ${theme} text-center link fw-bolder`}
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
              </li>
              <li className="nav-link fw-boldest">
                <Link
                  className={`nav-link ${theme} text-center link fw-bolder`}
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
              <li className="nav-link fw-boldest">
                <Link
                  className={`nav-link ${theme} text-center link fw-bolder`}
                  to="/signup"
                >
                  Sign-up
                </Link>
              </li>
              <li className="nav-link fw-boldest">
                <Link
                  className={`nav-link ${theme} text-center link fw-bolder`}
                  to="/login"
                >
                  Log-in
                </Link>
              </li>
              <li className="nav-link fw-boldest">
                <Link
                  className={`nav-link ${theme} text-center link fw-bolder`}
                  to="/logout"
                >
                  Log-out
                </Link>
              </li>
            </ul>
          </div>
          <div className="ml-5">
            {/* // eslint-disable-next-line no-undef */}
            <button onClick={toggleTheme}>
              {theme === "light" ? (
                <FontAwesomeIcon icon={faMoon} />
              ) : (
                <FontAwesomeIcon icon={faSun} />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
