import axiosInstance from '../utils/axiosInstance';  // Import axios instance

// Login function
const login = async (email, password) => {
  try {
    const response = await axiosInstance.post('/login', { email, password });
    return response.data;  // Return response data (usually the token or user info)
  } catch (error) {
    console.error("Login failed:", error.response || error.message);  // Handle error and log
    throw error;  // Rethrow the error to be handled by the calling function
  }
};

// Register function
const register = async (userData) => {
  try {
    const response = await axiosInstance.post('/register', userData);  // Assuming /register endpoint
    return response.data;  // Return response data (e.g., confirmation or user data)
  } catch (error) {
    console.error("Registration failed:", error.response || error.message);  // Handle error and log
    throw error;  // Rethrow the error to be handled by the calling function
  }
};

// Logout function (optional, depending on your implementation)
const logout = () => {
  // You might want to clear user data from local storage or session storage here
  localStorage.removeItem('user');  // Example: Remove user from local storage
};

// Get current user (if you are storing user info in localStorage)
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));  // Retrieve user data from local storage
};

// Exporting the functions
export default {
  login,
  register,
  logout,
  getCurrentUser,
};
