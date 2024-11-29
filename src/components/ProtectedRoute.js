import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../utils/auth";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // Access the current user from context

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children; // Render the protected content
};

export default ProtectedRoute;
