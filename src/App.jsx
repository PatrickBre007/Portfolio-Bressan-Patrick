import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import Hero from './sections/Hero';
import About from './sections/About';
import ImageCarousel from './components/ImageCarousel';
import Projects from './sections/Projects';
import Passions from './sections/Passions';
import Contact from './sections/Contact';
import ThreeBackground from './components/ThreeBackground';
import LanguageSelector from './components/LanguageSelector';
import './App.css';

function AppContent() {
  const { currentTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Simula caricamento (puoi sostituire con caricamento reale dati)
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const themeIcons = {
      coding: '💻',
      videogame: '🎮',
      pallavolo: '🏐'
    };
    const emoji = themeIcons[currentTheme] || '💻';
    const link = document.querySelector("link[rel*='icon']");
    if (link) {
      link.href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`;
    }
  }, [currentTheme]);

  if (loading) return <LoadingScreen />;

  return (
    <div className="App">
      <ThreeBackground theme={currentTheme} />
      <Navbar />
      <LanguageSelector />
      <Hero />
      <About />
      <ImageCarousel />
      <Projects />
      <Passions />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
