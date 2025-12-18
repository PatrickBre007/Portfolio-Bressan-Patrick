import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import './About.css';

const About = () => {
  const { theme } = useTheme();

  const skills = [
    { name: 'C#', level: 80 },
    { name: 'JavaScript', level: 70 },
    { name: 'React', level: 65 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Angular', level: 65 },
    { name: 'SQL', level: 80 },
    { name: 'Vite', level: 60 },
  ];

  return (
    <section id="about" className="about" style={{ background: theme.background }}>
      <div className="about-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ color: theme.primary }}
        >
          Chi Sono
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p style={{ color: theme.text }}>
              Sono <strong style={{ color: theme.primary }}>Patrick Bressan</strong>, 
              un Full Stack Developer appassionato di tecnologia e innovazione. 
              Mi piace creare soluzioni digitali moderne, funzionali e con un'ottima user experience.
            </p>
            <p style={{ color: theme.textSecondary }}>
              La mia esperienza spazia dallo sviluppo frontend con React e Angular date alle mie vecchie esperienze lavorative, 
              al backend con C# e database SQL. Sono sempre alla ricerca di nuove sfide 
              e opportunità per crescere professionalmente.
            </p>
            <p style={{ color: theme.textSecondary }}>
              Oltre alla programmazione, sono appassionato di videogiochi e pallavolo, 
              passioni che mi insegnano il valore del teamwork, della strategia e della perseveranza.
            </p>
          </motion.div>

          <motion.div
            className="about-skills"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 style={{ color: theme.primary }}>Competenze Tecniche</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="skill-header">
                    <span style={{ color: theme.text }}>{skill.name}</span>
                    <span style={{ color: theme.primary }}>{skill.level}%</span>
                  </div>
                  <div
                    className="skill-bar"
                    style={{ background: `${theme.cardBg}` }}
                  >
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + 0.1 * index, duration: 1 }}
                      style={{
                        background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
