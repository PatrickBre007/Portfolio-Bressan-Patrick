import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaDownload } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import './Contact.css';

const Contact = () => {
  const { theme } = useTheme();
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage].contact;

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: t.email,
      value: 'patrick.bressan00@gmail.com',
      link: 'mailto:patrick.bressan00@gmail.com'
    },
    {
      icon: <FaPhone />,
      label: t.phone,
      value: '+39 392 055 7793',
      link: 'tel:+393920557793'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'Patrick Bressan',
      link: 'https://www.linkedin.com/in/patrick-bressan-290b5a153/'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: '@PatrickBre007',
      link: 'https://github.com/PatrickBre007?tab=repositories'
    },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/CV PATRICK BRESSAN.pdf';
    link.download = 'CV_Patrick_Bressan.pdf';
    link.click();
  };

  return (
    <section id="contact" className="contact" style={{ background: theme.backgroundGradient }}>
      <div className="contact-container">
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
          className="contact-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ color: theme.text }}
        >
          {t.subtitle}
        </motion.p>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05, x: 10 }}
                style={{
                  background: theme.cardBg,
                  border: `1px solid ${theme.primary}40`,
                }}
              >
                <div
                  className="contact-icon"
                  style={{
                    background: `${theme.primary}20`,
                    color: theme.primary,
                  }}
                >
                  {contact.icon}
                </div>
                <div className="contact-details">
                  <span className="contact-label" style={{ color: theme.textSecondary }}>
                    {contact.label}
                  </span>
                  <span className="contact-value" style={{ color: theme.text }}>
                    {contact.value}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="cv-download"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{
              background: theme.cardBg,
              border: `2px solid ${theme.primary}`,
            }}
          >
            <h3 style={{ color: theme.primary }}>{t.downloadCV}</h3>
            <p style={{ color: theme.textSecondary }}>
              {t.subtitle}
            </p>

            <motion.button
              className="cv-button"
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                color: theme.background,
              }}
            >
              <FaDownload />
              {t.downloadCV}
            </motion.button>

            <div className="cv-stats">
              <div className="stat-item">
                <span
                  className="stat-number"
                  style={{ color: theme.primary }}
                >
                  4+
                </span>
                <span
                  className="stat-label"
                  style={{ color: theme.textSecondary }}
                >
                  Anni Esperienza
                </span>
              </div>
              <div className="stat-item">
                <span
                  className="stat-number"
                  style={{ color: theme.primary }}
                >
                    10+
                </span>
                <span
                  className="stat-label"
                  style={{ color: theme.textSecondary }}
                >
                  Progetti Completati
                </span>
              </div>
              <div className="stat-item">
                <span
                  className="stat-number"
                  style={{ color: theme.primary }}
                >
                  10+
                </span>
                <span
                  className="stat-label"
                  style={{ color: theme.textSecondary }}
                >
                  Tecnologie
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          style={{ color: theme.textSecondary }}
        >
          <p>© 2025 Patrick Bressan. Tutti i diritti riservati.</p>
          <p>Made with React + Vite + Three.js</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
