import React, { useState } from "react";

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
    <div>
      {signedUp ? (
        <div>
          <h1>Registration Successful</h1>
          <p>Your account has been created successfully.</p>
        </div>
      ) : (
        <div>
          <h1>Sign Up</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
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
          <button onClick={handleSignup}>Sign Up</button>
        </div>
      )}
    </div>
  );
};

export default Signup;
