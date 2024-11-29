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

function App() {
  return (
    <Router> {/* Wrap the whole app with BrowserRouter */}
      <AuthProvider> {/* Now wrap your app with AuthProvider inside Router */}
        <div className="App">
          <Header />
          
          {/* Include ImageComponent */}
          <ImageComponent src="https://via.placeholder.com/150" alt="Sample Image" />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute> {/* ProtectedRoute checks if the user is authenticated */}
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
          </Routes>
          
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
