import React from 'react';
import AnimatedLogo from './AnimatedLogo';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-logo-wrapper">
        <AnimatedLogo size={240} glow={true} />
      </div>
      <div className="loading-bar">
        <div className="loading-bar-inner"></div>
      </div>
      <div className="loading-text">
        <span>Caricamento Portfolio...</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
