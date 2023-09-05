import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/Footer/footer.js";
import "../assets/index.css";
import "../assets/signup.css";
import "../App.css";
import "../assets/navbar.css";
import { useContext } from "react";
import "../index.css";
import { ThemeContext } from "../components/Theme/themeContext";
import "../components/Motion/loginModal.js";
import { motion, AnimatePresence } from "framer-motion";

const Signup = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signedUp, setSignedUp] = useState(false);
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

  const handleSignup = () => {
    if (password === confirmPassword) {
      setSignedUp(true);
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <AnimatePresence>
      <main className="flex-row p-5 justify-center">
        <div className={`outsideBox-${theme}`}>
          {signedUp ? (
            <div>
              <h1>Registration Successful</h1>
              <p>Your account has been created successfully.</p>
            </div>
          ) : (
            <div
              className={`card d-flex p-2 box-${theme} align-items-center text-center`}
            >
              <h4
                className={`card card-header signup-${theme} col p-2 m-0 mb-2 text-center`}
              >
                Sign Up
              </h4>
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
              <input
                type="password"
                className={`form-input input-${theme}`}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <br />
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 500 }}
                onClick={handleSignup}
                className={`btn-light m-3 btn-block btn-${theme} fw-bold`}
                style={{ cursor: "pointer" }}
              >
                Sign Up
              </motion.button>
            </div>
          )}
        </div>
      </main>
    </AnimatePresence>
  );
};

export default Signup;
