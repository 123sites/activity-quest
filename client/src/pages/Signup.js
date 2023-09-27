import React, { useState, useEffect } from "react";
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
import { signUp } from "../api/auth.js";

const Signup = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  const [errors, setErrors] = useState(null);

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

  const handleSignup = async () => {
    if (password === confirmPassword) {
      try {
        const result = await signUp({ username, password });

        setSignedUp(true);
      } catch (err) {
        setErrors([err]);
      }
    } else {
      alert("Passwords do not match");
    }
  };

  // const validateEmail(email) {
  //   var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  //   return regex.test(email);
  // }

  return (
    <AnimatePresence>
      <main className="flex-row p-3 justify-center">
        <div className="message">
          {signedUp ? (
            <div>
              {/* <div className="text-center p-5"> */}
              <h1 className={`registrationMessage-${theme} fw-bolder`}>
                Registration Successful!
              </h1>
              <h3 className={`signupMessage-${theme} fw-boler`}>
                You are now logged in!
              </h3>
            </div>
          ) : (
            <div
              className={`card d-flex p-3 signupBox-${theme} align-items-center text-center`}
            >
              <div>
                <h4
                  className={`card-header col p-2 m-1 signup-${theme} text-center fw-bolder login-card-header`}
                >
                  Sign up
                </h4>
                <div className="card-body">
                  {/* <input
                    placeholder="Your email"
                    className={`form-input input-${theme} row`}
                    // value={email}
                    onChange={(e) => setUsername(e.target.value)}
                  /> */}
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
                  {!errors
                    ? ""
                    : errors.map((error) => (
                        <div className="text-danger">{error.message}</div>
                      ))}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 500 }}
                    onClick={handleSignup}
                    className={`btn-light m-3 btn-block btn-${theme} fw-bold`}
                    style={{ cursor: "pointer" }}
                  >
                    Sign up
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

export default Signup;
