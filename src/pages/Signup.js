import React, { useState } from "react";
import "../assets/index.css";
import "../assets/signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  const handleSignup = () => {
    // Simulate user registration (replace this with your actual registration logic)
    if (password === confirmPassword) {
      // Here, you might want to call an API to register the user
      setSignedUp(true);
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <main className="flex-row p-5 justify-center">
      <div>
        {signedUp ? (
          <div>
            <h1>Registration Successful</h1>
            <p>Your account has been created successfully.</p>
          </div>
        ) : (
          <div className="card d-flex p-2 m-0 align-items-center text-center">
            <h4 className="card card-header col text-center login-card-header">
              Sign Up
            </h4>
            <input
              type="text"
              className="form-input shadow-lg"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
              type="password"
              className="form-input shadow-lg"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <button
              onClick={handleSignup}
              className="btn-light m-3 btn-block fw-bold"
              style={{ cursor: "pointer" }}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Signup;
