import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import './ImageCarousel.css';

const ImageCarousel = () => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array di immagini/tecnologie
  const slides = [
    {
      title: 'React',
      img: '/images/React-icon.svg.png',
      description: 'Libreria JavaScript per costruire interfacce utente moderne e reattive',
      color: '#61dafb'
    },
    {
      title: 'JavaScript',
      img: '/images/Unofficial_JavaScript_logo_2.svg.png',
      description: 'Linguaggio di programmazione versatile per web development',
      color: '#f7df1e'
    },
    {
      title: 'C#',
      img: '/images/Logo_C_sharp.svg.png',
      description: 'Linguaggio potente per sviluppo backend e applicazioni enterprise',
      color: '#9b4f96'
    },
    {
      title: 'HTML/CSS',
      img: '/images/HTML5_logo_and_wordmark.svg.png',
      description: 'Le fondamenta del web design moderno e responsive',
      color: '#e44d26'
    },
    {
      title: 'SQL',
      img: '/images/Sql_data_base_with_logo.png',
      description: 'Database management e query per gestione dati',
      color: '#00758f'
    },
    {
      title: 'Angular',
      img: '/images/icone-angulaire-rouge.png',
      description: 'Framework completo per applicazioni web scalabili',
      color: '#dd0031'
    },
    {
      title: 'Vite',
      img: '/images/Vitejs-logo.svg.png',
      description: 'Build tool velocissimo per progetti moderni',
      color: '#646cff'
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-section" style={{ background: theme.background }}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ color: theme.primary }}
      >
        Tecnologie & Competenze
      </motion.h2>

      <div className="carousel-container">
        <motion.button
          className="carousel-button prev"
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            background: theme.cardBg,
            color: theme.primary,
            border: `2px solid ${theme.primary}`,
          }}
        >
          <FaChevronLeft />
        </motion.button>

        <div className="carousel-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="carousel-slide"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              style={{
                background: theme.cardBg,
                border: `2px solid ${theme.primary}40`,
              }}
            >
              <motion.div
                className="slide-image"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <img 
                  src={slides[currentIndex].img} 
                  alt={slides[currentIndex].title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                />
                <div className="slide-placeholder" style={{ display: 'none', color: theme.primary }}>
                  {slides[currentIndex].title.charAt(0)}
                </div>
              </motion.div>

              <h3 style={{ color: theme.primary }}>
                {slides[currentIndex].title}
              </h3>

              <p style={{ color: theme.textSecondary }}>
                {slides[currentIndex].description}
              </p>

              <div
                className="slide-progress-bar"
                style={{ background: `${theme.primary}20` }}
              >
                <motion.div
                  className="slide-progress"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.5 }}
                  style={{
                    background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
                  }}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: index === currentIndex ? theme.primary : `${theme.primary}40`,
                }}
              />
            ))}
          </div>
        </div>

        <motion.button
          className="carousel-button next"
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            background: theme.cardBg,
            color: theme.primary,
            border: `2px solid ${theme.primary}`,
          }}
        >
          <FaChevronRight />
        </motion.button>
      </div>
    </div>
  );
};

export default ImageCarousel;
