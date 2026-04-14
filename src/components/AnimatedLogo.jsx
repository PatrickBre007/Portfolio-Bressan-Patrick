import React from 'react';
import './AnimatedLogo.css';
import logo from '../assets/logo/3693ffab-9977-4c5d-802b-33ee14bdeaf7.png';
import { motion } from 'framer-motion';

const AnimatedLogo = ({ size = 60, glow = false }) => {
  return (
    <div className={`animated-logo-container${glow ? ' glow' : ''}`} style={{ width: size, height: size }}>
      <motion.div
        className="animated-logo-circle"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
        style={{ width: size, height: size }}
      >
        <svg width={size} height={size} viewBox="0 0 100 100" className="animated-logo-svg">
          <circle
            cx="50" cy="50" r="45"
            stroke="#7B2FF2"
            strokeWidth="6"
            fill="none"
            strokeDasharray="20 10 5 10 10 5"
            strokeDashoffset="0"
          />
        </svg>
      </motion.div>
      <motion.img
        src={logo}
        alt="Logo"
        className="animated-logo-img"
        initial={{ filter: 'brightness(0.7)' }}
        animate={{ filter: [
          'brightness(0.7)',
          'brightness(1.15) drop-shadow(0 0 6px #7B2FF2)',
          'brightness(0.7)'
        ] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
        style={{ width: size * 0.7, height: size * 0.7, left: size * 0.15, top: size * 0.15 }}
      />
    </div>
  );
};

export default AnimatedLogo;
