import axiosInstance from '../utils/axiosInstance'; // Importing axios instance

// Registration service to call the API
const register = async (userData) => {
  try {
    // Sending a POST request to the /Authentication/register endpoint
    const response = await axiosInstance.post('/Authentication/register', userData);
    return response.data;  // Return the response data (e.g., success message, user details, etc.)
  } catch (error) {
    throw error;  // Catch and throw the error to be handled in the component
  }
};

export default {
  register,
};
