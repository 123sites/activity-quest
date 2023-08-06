import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../assets/index.css";
import "../../assets/navbar.css";
import "../../assets/login.css";
import "../../App.css";

const Navbar = ({ handlePageChange }) => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    console.log(currentPath);
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="row col">
          <div className="navbar-header col">
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

            <Link className="navbar-brand brand p-4 d-flex" href="/">
              Activity Quest
            </Link>
          </div>
          <div className="nav-elements row">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-link">
                <li className="nav-link">
                  <Link
                    className={`nav-link link fs-6 text-center fw-bolder`}
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
              </li>
              <li className="nav-link link fw-boldest">
                <Link
                  className={`nav-link link fs-6 text-center fw-bolder`}
                  to="/account"
                >
                  Account
                </Link>
              </li>
              <li className="nav-link link fw-boldest">
                <Link
                  className={`nav-link link fs-6 text-center fw-bolder`}
                  to="/favorites"
                >
                  Favorites
                </Link>
              </li>
              <li className="nav-link link fw-boldest">
                <Link
                  className={`nav-link link fs-6 text-center fw-bolder`}
                  to="/signup"
                >
                  Sign-up
                </Link>
              </li>
              <li className="nav-link link fw-boldest">
                <Link
                  className={`nav-link link fs-6 text-center fw-bolder`}
                  to="/login"
                >
                  Log-in
                </Link>
              </li>
              <li className="nav-link link fw-boldest">
                <Link
                  className={`nav-link link fs-6 text-center fw-bolder`}
                  to="/logout"
                >
                  Log-out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
