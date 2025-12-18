import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import './Projects.css';

const Projects = () => {
  const { theme } = useTheme();

  // Array di progetti - puoi personalizzarlo con i tuoi veri progetti
  const projects = [
    {
      title: 'Portfolio Per un Radiomatore',
      description: 'Portfolio interattivo con, Vite, React e temi dinamici. Presenta progetti, competenze e passioni in modo coinvolgente.',
      technologies: ['React', 'Vite', 'Three.js',],
      github: 'https://github.com/PatrickBre007/IV3OSC',
      demo: 'https://iv3osc.vercel.app/',
      image: '📡'
    },
    {
      title: 'PetApp ',
      description: 'WebApp con gestione animali domestici, veterinari e appuntamenti.',
      technologies: ['React', 'C#', 'SQL', 'API'],
      github: 'https://github.com/PatrickBre007/PetApp',
      demo: 'https://pet-app-alpha-six.vercel.app/',
      image: '🐾'
    },
    {
      title: 'Sito di Pulizie',
      description: 'Sito web professionale per azienda di pulizie con preventivi e servizi personalizzati.',
      technologies: ['React', 'Vite', 'Three.js'],
      github: 'https://github.com/PatrickBre007/Bix-pulito-pro',
      demo: 'https://bix-pulito-pro.vercel.app/',
      image: '🫧'
    },
    {
      title: 'Portfolio Personale',
      description: 'Il mio portfolio interattivo realizzato con React e Three.js, con animazioni 3D e temi dinamici.',
      technologies: ['React', 'Vite', 'Three.js'],
      github: 'https://github.com/tuousername/portfolio-personale',
      demo: '#',
      image: '💼'
    },
  ];

  return (
    <section id="projects" className="projects" style={{ background: theme.background }}>
      <div className="projects-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ color: theme.primary }}
        >
          I Miei Progetti
        </motion.h2>

        <motion.p
          className="projects-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ color: theme.textSecondary }}
        >
          Ecco alcuni dei progetti su cui ho lavorato
        </motion.p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              style={{
                background: theme.cardBg,
                border: `1px solid ${theme.primary}20`,
              }}
            >
              <div className="project-icon" style={{ fontSize: '4rem' }}>
                {project.image}
              </div>

              <h3 style={{ color: theme.primary }}>{project.title}</h3>
              <p style={{ color: theme.textSecondary }}>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="tech-tag"
                    style={{
                      background: `${theme.primary}20`,
                      color: theme.primary,
                      border: `1px solid ${theme.primary}40`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: theme.primary,
                    color: theme.background,
                  }}
                >
                  <FaGithub /> GitHub
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    border: `2px solid ${theme.primary}`,
                    color: theme.primary,
                  }}
                >
                  <FaExternalLinkAlt /> Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="github-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p style={{ color: theme.text }}>
            Vuoi vedere tutti i miei progetti?
          </p>
          <motion.a
            href="https://github.com/PatrickBre007?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
              color: theme.background,
            }}
          >
            <FaGithub size={24} />
            Visita il mio GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
