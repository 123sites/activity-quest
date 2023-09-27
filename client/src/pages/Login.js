import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { logIn } from "../api/auth.js";
import "../assets/index.css";
import "../assets/login.css";
import "../assets/navbar.css";
import "../components/Footer/footer.js";
import "../components/Motion/loginModal.js";
import { ThemeContext } from "../components/Theme/themeContext";
import "../index.css";

const Login = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

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

  const handleLogin = async () => {
    try {
      const result = await logIn({ username, password });
      navigate("/");
    } catch (err) {
      setErrors([err]);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <AnimatePresence>
      <main className="flex-row p-3 justify-center">
        <div className="message">
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
              className={`card d-flex p-1 box-${theme} row align-items-center text-center`}
            >
              <div>
                <h4
                  className={`card-header col p-2 m-1 loginBox-${theme} text-center fw-bolder login-card-header`}
                >
                  Login
                </h4>
                <div className="card-body">
                  <input
                    type="text"
                    className={`form-input loginInput-${theme}`}
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <br />
                  <input
                    type="password"
                    className={`form-input loginInput-${theme}`}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <br />
                  {!errors
                    ? ""
                    : errors.map((error) => (
                        <div className="text-danger">{error.message}</div>
                      ))}
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
