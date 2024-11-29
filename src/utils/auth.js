import React, { createContext, useContext, useState } from "react";

// Create the AuthContext
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (userName, password) => {
    const response = await fetch("https://localhost:7020/api/Authentication/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    });

    if (response.ok) {
      const data = await response.json();
      setUser(data); // Save user data to state
      localStorage.setItem("token", data.token); // Save token for persistence
    } else {
      throw new Error("Login failed");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };
  const register = async (userName, email, password, role) => {
    const response = await fetch("https://localhost:7020/api/Authentication/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, email, password, role }),
    });
  
    if (response.ok) {
      const data = await response.json();
      return data; // Optional: return data for further handling
    } else {
      throw new Error("Registration failed");
    }
  };
  

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>

      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
