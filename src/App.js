import React from 'react';
import Header from './components/Header';
import './App.css';
import Home from './pages/Home';
import StarField from './components/StarField';
import ShootingStarField from './components/ShootingStarField';

const App = () => {
  return (
    <div className="relative min-h-screen bg-gradient-blue-night-to-sunset">
      <StarField numStars={150} />
      <ShootingStarField numStars={350} />
      <Header />
      <Home />
    </div>
  );
};

export default App;