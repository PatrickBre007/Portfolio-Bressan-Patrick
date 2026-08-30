import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import './Hero.css';

const Hero = () => {
  const { theme } = useTheme();
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage].hero;
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Array delle tue foto - metti i nomi delle foto che caricherai in /public/photos
  const photos = [
    '/photos/photo1.jpg',
    '/photos/photo2.jpg',
    '/photos/photo3.jpg',
    '/photos/photo4.jpg',
  ];

  // Scorrimento automatico delle foto ogni 3 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <section className="hero" style={{ background: theme.backgroundGradient }}>
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-title"
            style={{ color: theme.text }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t.greeting}{' '}
            <span style={{ color: theme.primary }}>Patrick Bressan</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            style={{ color: theme.textSecondary }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {t.subtitle}
          </motion.p>

          <motion.p
            className="hero-description"
            style={{ color: theme.text }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t.description}
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              className="hero-btn primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: theme.primary,
                color: theme.background,
              }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t.viewWork}
            </motion.button>

            <motion.button
              className="hero-btn secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                border: `2px solid ${theme.primary}`,
                color: theme.primary,
              }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t.downloadCV}
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div
            className="hero-photo-container"
            style={{
              border: `4px solid ${theme.primary}`,
              boxShadow: `0 0 30px ${theme.primary}40`,
            }}
          >
            {photos.map((photo, index) => (
              <motion.img
                key={index}
                src={photo}
                alt={`Patrick Bressan ${index + 1}`}
                className="hero-photo"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: currentPhotoIndex === index ? 1 : 0,
                  scale: currentPhotoIndex === index ? 1 : 0.95,
                }}
                transition={{ duration: 0.5 }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            ))}
            
            {/* Fallback se non ci sono foto */}
            <div 
              className="hero-avatar-fallback"
              style={{
                background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                opacity: photos.every((_, i) => i !== currentPhotoIndex) ? 1 : 0,
              }}
            >
              PB
            </div>

            {/* Indicatori */}
            <div className="photo-indicators">
              {photos.map((_, index) => (
                <button
                  key={index}
                  className={`photo-indicator ${currentPhotoIndex === index ? 'active' : ''}`}
                  onClick={() => setCurrentPhotoIndex(index)}
                  style={{
                    background: currentPhotoIndex === index ? theme.primary : `${theme.primary}40`,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ borderColor: theme.primary }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
