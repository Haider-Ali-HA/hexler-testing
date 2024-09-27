import React from 'react';
import '../../../public/styles/loading.css'

const Loading = () => {
  return (
    <div style={containerStyle}>
      <div className="loader"></div>
    </div>
  );
}

export default Loading;

// Container style to center the loader
const containerStyle = {
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh', // Full viewport height to center vertically
};
