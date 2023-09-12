import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import { ThemeContext } from "../Theme/themeContext";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/index.css";
import "../../assets/navbar.css";
import "../../App.css";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ handlePageChange }) => {
  const [currentPath, setCurrentPath] = useState("");
  const { toggleTheme, theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(currentPath);
    setCurrentPath(window.location.pathname);
  }, [currentPath]);

  return (
    <nav className={`navbar navbar-expand-lg sticky-lg-top top-${theme}`}>
      <div className="container">
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
          <div className={`navbar-brand text-start col brand`}>
            Activity Quest
          </div>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link link-${theme} text-center`} to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item fw-boldest">
              <Link
                className={`nav-link link-${theme} text-center`}
                to="/account"
              >
                Account
              </Link>
            </li>
            <li className="nav-item fw-boldest">
              <Link
                className={`nav-link link-${theme} text-center`}
                to="/favorites"
              >
                Favorites
              </Link>
            </li>
            <li className="nav-item fw-boldest">
              <Link
                className={`nav-link link-${theme} text-center`}
                to="/signup"
              >
                Sign-up
              </Link>
            </li>
            <li className="nav-item fw-boldest">
              <AnimatePresence>
                <Link
                  className={`nav-link link-${theme} text-center`}
                  to="/login"
                >
                  Log-in
                </Link>
              </AnimatePresence>
            </li>
            <li className="nav-item fw-boldest">
              <Link
                className={`nav-link link-${theme} text-center link`}
                to="/logout"
              >
                Log-out
              </Link>
            </li>
          </ul>
          <div className="ml-3 mt-2 sun-moon">
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 500 }}
              style={{ cursor: "pointer" }}
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <FontAwesomeIcon icon={faMoon} className="m-1 sun-moon" />
              ) : (
                <FontAwesomeIcon icon={faSun} className="m-1 sun-moon" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">
    //       Navbar
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarTogglerDemo02"
    //       aria-controls="navbarTogglerDemo02"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Link
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link disabled" aria-disabled="true">
    //             Disabled
    //           </a>
    //         </li>
    //       </ul>
    //       <form className="d-flex" role="search">
    //         <input
    //           className="form-control me-2"
    //           type="search"
    //           placeholder="Search"
    //           aria-label="Search"
    //         />
    //         <button className="btn btn-outline-success" type="submit">
    //           Search
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
