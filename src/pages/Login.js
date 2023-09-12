import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/Footer/footer.js";
import "../assets/index.css";
import "../assets/login.css";
import "../App.css";
import "../assets/navbar.css";
import "../index.css";
import { useContext } from "react";
import { ThemeContext } from "../components/Theme/themeContext";
import "../components/Motion/loginModal.js";
import { motion, AnimatePresence } from "framer-motion";

const Login = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const modalVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: 30,
      transition: {
        duration: 0.3,
      },
    },
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling when modal is closed
    }
  }, [isOpen]);

  const { theme } = useContext(ThemeContext);
  const [currentPath] = useState("");
  console.log(currentPath);

  const handleLogin = () => {
    if (username === "user" && password === "password") {
      setLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <AnimatePresence>
      <main className="flex-row p-5 justify-center">
        <div className="card message">
          {loggedIn ? (
            <div>
              <h1>Welcome, {username}!</h1>
              <button onClick={handleLogout}>Logout</button>
              <p>
                Success! You may now head{" "}
                <Link to="/home">back to the homepage.</Link>
              </p>
            </div>
          ) : (
            <div
              className={`card d-flex p-2 box-${theme} align-items-center text-center`}
            >
              <div>
                <h4
                  className={`card-header col p-3 m-1 loginTop-${theme} text-center text-light login-card-header`}
                >
                  Login
                </h4>
                <div className="card-body">
                  <input
                    type="text"
                    className={`form-input input-${theme}`}
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <br />
                  <input
                    type="password"
                    className={`form-input input-${theme}`}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <br />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 500 }}
                    onClick={handleLogin}
                    className={`btn-light m-3 btn-block btn-${theme} fw-bold`}
                    style={{ cursor: "pointer" }}
                  >
                    Login
                  </motion.button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </AnimatePresence>
  );
};

export default Login;
