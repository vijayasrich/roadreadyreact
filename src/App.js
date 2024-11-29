import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use BrowserRouter for routing
import Header from "./components/Header";
import Footer from "./components/Footer";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./utils/auth"; // Assuming you have an AuthContext
import ImageComponent from "./components/Imagecomponent"; // Import the ImageComponent
import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="page-container">
          {/* Sidebar */}
          <div className="sidebar">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Register</a></li>
            </ul>
          </div>

          {/* Main Content Area */}
          <div className="main-content">
            <Header />
            <ImageComponent src="https://via.placeholder.com/150" alt="Sample Image" />
            
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              />
            </Routes>

            <Footer />
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
