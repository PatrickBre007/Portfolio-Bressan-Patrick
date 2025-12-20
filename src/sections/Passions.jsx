import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import './Passions.css';

const Passions = () => {
  const { theme, changeTheme, currentTheme } = useTheme();
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage].passions;

  const passions = [
    {
      id: 'coding',
      title: t.coding.title,
      icon: '💻',
      description: t.coding.description,
      highlights: t.coding.highlights
    },
    {
      id: 'videogame',
      title: t.videogame.title,
      icon: '🎮',
      description: t.videogame.description,
      highlights: t.videogame.highlights
    },
    {
      id: 'pallavolo',
      title: t.pallavolo.title,
      icon: '🏐',
      description: t.pallavolo.description,
      highlights: t.pallavolo.highlights
    }
  ];

  return (
    <section id="passions" className="passions" style={{ background: theme.backgroundGradient }}>
      <div className="passions-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ color: theme.primary }}
        >
          {t.title}
        </motion.h2>

        <motion.p
          className="passions-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ color: theme.text }}
        >
          {t.subtitle}
        </motion.p>

        <div className="passions-grid">
          {passions.map((passion, index) => (
            <motion.div
              key={passion.id}
              className={`passion-card ${currentTheme === passion.id ? 'active' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => changeTheme(passion.id)}
              style={{
                background: currentTheme === passion.id 
                  ? `linear-gradient(135deg, ${theme.primary}40, ${theme.secondary}40)`
                  : theme.cardBg,
                border: `2px solid ${currentTheme === passion.id ? theme.primary : theme.primary}40`,
                cursor: 'pointer',
              }}
            >
              <motion.div
                className="passion-icon"
                animate={{
                  scale: currentTheme === passion.id ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 0.5,
                  repeat: currentTheme === passion.id ? Infinity : 0,
                  repeatDelay: 2,
                }}
              >
                {passion.icon}
              </motion.div>

              <h3 style={{ color: theme.primary }}>{passion.title}</h3>
              <p style={{ color: theme.textSecondary }}>{passion.description}</p>

              <div className="passion-highlights">
                {passion.highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    className="highlight-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    style={{ color: theme.text }}
                  >
                    <span style={{ color: theme.primary }}>▸</span> {highlight}
                  </motion.div>
                ))}
              </div>

              {currentTheme === passion.id && (
                <motion.div
                  className="active-indicator"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  style={{ background: theme.primary }}
                >
                  ✓ Tema Attivo
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Passions;
