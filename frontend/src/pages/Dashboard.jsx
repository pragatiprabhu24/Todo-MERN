import React from 'react';
import CreateTodo from '../components/CreateTodo';
import backgroundImage from '../asset/back.avif'; // Update the path

const Dashboard = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
    height: '100vh', // Adjust as needed
    // Add more styles if necessary
  };

  return (
    <div style={divStyle}>
      <CreateTodo />
    </div>
  );
};

export default Dashboard;
