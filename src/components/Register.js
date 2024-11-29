import React, { useState } from "react";
import { useAuth } from "../utils/auth"; // Import authentication context
import "../styles/Register.css"; // Ensure your CSS is imported

const Register = () => {
  const { register } = useAuth(); // Register function from AuthContext
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // Initially no role is selected
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userName && email && password && role) {
      try {
        await register(userName, email, password, role);
        setSuccessMessage("Registration successful! You can now log in.");
        setErrorMessage("");
      } catch (error) {
        setErrorMessage("Registration failed. Please try again.");
        setSuccessMessage("");
      }
    } else {
      setErrorMessage("Please fill in all fields");
      setSuccessMessage("");
    }
  };

  return (
    <div className="page-container"> {/* Center the form */}
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            placeholder="User Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="Agent">Agent</option>
            <option value="Admin">Admin</option>
            <option value="Customer">Customer</option>
          </select>
          {successMessage && <div className="success">{successMessage}</div>}
          {errorMessage && <div className="error">{errorMessage}</div>}
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
