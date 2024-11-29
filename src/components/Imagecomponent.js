import React from 'react';
import logo from '../Images/logo.png'; // Path to your logo image
import background from '../Images/background.jpg'; // Path to your background image

const ImageComponent = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Ensures the background stays fixed while scrolling
        height: '90vh', // Makes sure the div takes up the full height of the viewport
        width: '100%', // Ensures the div takes up the full width
        display: 'flex',
        flexDirection: 'column', // Aligns content vertically
        justifyContent: 'center', // Centers the content vertically
        alignItems: 'center', // Centers the content horizontally
        textAlign: 'center',
        color: 'white', // Text color on the background
      }}
    >
      {/* Logo */}
      <img src={logo} alt="RoadReady Logo" style={{ width: '200px', marginBottom: '20px' }} />
      
      {/* Welcome Text */}
      <h1>RoadReady</h1>
      <p>Your trusted car rental platform</p>
    </div>
  );
};

export default ImageComponent;