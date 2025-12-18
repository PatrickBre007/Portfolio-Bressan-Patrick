import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import './Passions.css';

const Passions = () => {
  const { theme, changeTheme, currentTheme } = useTheme();

  const passions = [
    {
      id: 'coding',
      title: 'Coding',
      icon: '💻',
      description: 'Il coding è la mia passione principale. Amo creare soluzioni innovative e risolvere problemi complessi attraverso il codice.',
      highlights: [
        'Sviluppo Web Full Stack',
        'Architettura Software',
        'Clean Code & Best Practices',
        'Continuo apprendimento'
      ]
    },
    {
      id: 'videogame',
      title: 'Videogiochi',
      icon: '🎮',
      description: 'I videogiochi sono per me fonte di ispirazione. Mi affascinano la game design, la narrativa interattiva e le meccaniche di gioco.',
      highlights: [
        'Game Design Analysis',
        'Competitive Gaming',
        'Storytelling Interattivo',
        'Community Building'
      ]
    },
    {
      id: 'pallavolo',
      title: 'Pallavolo',
      icon: '🏐',
      description: 'La pallavolo mi ha insegnato il valore del lavoro di squadra, della comunicazione e della determinazione nel raggiungere obiettivi comuni.',
      highlights: [
        'Team Work',
        'Strategia e Tattica',
        'Disciplina e Costanza',
        'Leadership'
      ]
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
          Le Mie Passioni
        </motion.h2>

        <motion.p
          className="passions-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ color: theme.text }}
        >
          Clicca su una passione per cambiare il tema del portfolio
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
