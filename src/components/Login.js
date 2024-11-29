import React, { useState } from "react";
import { useAuth } from "../utils/auth"; // Import authentication context
import "../styles/Login.css"; // Ensure your CSS is imported

const Login = () => {
  const { login } = useAuth(); // Login function from AuthContext
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userName && password) {
      try {
        await login(userName, password);
        setSuccessMessage("Login successful!");
        setErrorMessage("");
      } catch (error) {
        setErrorMessage("Login failed. Please check your credentials.");
        setSuccessMessage("");
      }
    } else {
      setErrorMessage("Please fill in all fields");
      setSuccessMessage("");
    }
  };

  return (
    <div className="page-container"> {/* Center the form */}
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
          {successMessage && <div className="success">{successMessage}</div>}
          {errorMessage && <div className="error">{errorMessage}</div>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
