import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedLogo from './AnimatedLogo';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import './Navbar.css';

const Navbar = () => {
  const { theme, currentTheme, changeTheme } = useTheme();
  const { currentLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  const t = translations[currentLanguage]?.navbar || translations.it.navbar;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: scrolled ? theme.cardBg : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div className="navbar-container">
        <motion.div
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
          style={{ color: theme.primary, display: 'flex', alignItems: 'center', gap: '0.7rem' }}
        >
          <AnimatedLogo size={70} glow={scrolled} />
          <span style={{ fontWeight: 'bold', fontSize: '1.3rem', letterSpacing: '1px' }}>Patrick Bressan</span>
        </motion.div>

        <div className="navbar-menu">
          <a onClick={() => scrollToSection('about')} style={{ color: theme.text }}>
            {t.about}
          </a>
          <a onClick={() => scrollToSection('projects')} style={{ color: theme.text }}>
            {t.projects}
          </a>
          <a onClick={() => scrollToSection('passions')} style={{ color: theme.text }}>
            {t.passions}
          </a>
          <a onClick={() => scrollToSection('contact')} style={{ color: theme.text }}>
            {t.contact}
          </a>
        </div>

        <div className="navbar-controls">
          {/* Theme Switcher */}
          <div className="theme-switcher">
            {Object.keys({ coding: 1, videogame: 1, pallavolo: 1 }).map((themeName) => (
              <motion.button
                key={themeName}
                onClick={() => changeTheme(themeName)}
                className={`theme-btn ${currentTheme === themeName ? 'active' : ''}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: currentTheme === themeName ? theme.primary : 'transparent',
                  border: `2px solid ${theme.primary}`,
                  color: currentTheme === themeName ? theme.background : theme.text,
                }}
              >
                {themeName === 'coding' && '💻'}
                {themeName === 'videogame' && '🎮'}
                {themeName === 'pallavolo' && '🏐'}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
