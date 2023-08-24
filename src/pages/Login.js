import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Footer/footer.js";
import "../assets/index.css";
import "../assets/login.css";
import "../App.css";
import "../assets/navbar.css";
import "../index.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulate authentication (replace this with your actual authentication logic)
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
    <main className="flex-row p-5 justify-center">
      <div className="card">
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
          <div className="d-flex flex-column login align-items-center text-center">
            <div>
              <h4 className="card-header col p-3 m-1 login-top text-center text-light login-card-header">
                Login
              </h4>
              <div className="card-body">
                <input
                  type="text"
                  className="form-input input shadow-lg"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                  type="password"
                  className="form-input input shadow-lg"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button
                  onClick={handleLogin}
                  className="btn-light m-3 btn-block fw-bold"
                  style={{ cursor: "pointer" }}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Login;
