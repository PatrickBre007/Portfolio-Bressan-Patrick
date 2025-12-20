import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { languages } from '../translations/translations';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { theme } = useTheme();
  const { currentLanguage, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="language-selector">
      {/* Cubo principale */}
      <motion.div
        className="language-cube"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
          boxShadow: `0 4px 20px ${theme.primary}66`,
        }}
      >
        <span className="current-flag">{currentLang?.flag}</span>
      </motion.div>

      {/* Menu lingue */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="language-menu"
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            style={{
              background: theme.cardBg,
              border: `2px solid ${theme.primary}`,
            }}
          >
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                className={`language-item ${currentLanguage === lang.code ? 'active' : ''}`}
                onClick={() => handleLanguageChange(lang.code)}
                whileHover={{ 
                  x: 8,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: currentLanguage === lang.code ? `${theme.primary}30` : 'transparent',
                  color: theme.text,
                }}
              >
                <span className="flag">{lang.flag}</span>
                <span className="name">{lang.name}</span>
                {currentLanguage === lang.code && (
                  <span className="check" style={{ color: theme.primary }}>✓</span>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
