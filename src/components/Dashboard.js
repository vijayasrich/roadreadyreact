import React from "react";

const Dashboard = ({ user, logout }) => {
  return (
    <div>
      <h2>Your Dashboard</h2>
      <div>
        <h3>Profile Information:</h3>
        <p>Email: {user.email}</p>
        {/* Add other user information here */}
      </div>

      <div>
        <h3>Actions:</h3>
        <button onClick={logout}>Logout</button>
        {/* You can add other buttons for different actions like updating profile, etc. */}
      </div>
    </div>
  );
};

export default Dashboard;
