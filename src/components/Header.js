import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import "../styles/Header.css"; // Import the CSS for styling

const Header = () => {
  const { user } = useAuth();

  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {user ? (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;

