// Definizione dei temi per il portfolio
export const themes = {
  coding: {
    name: 'Coding',
    primary: '#00ff88',
    secondary: '#00d4ff',
    background: '#0a0e27',
    backgroundGradient: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
    text: '#ffffff',
    textSecondary: '#a0a0a0',
    accent: '#ff00ff',
    cardBg: 'rgba(26, 31, 58, 0.8)',
    particles: true,
    icon: '💻'
  },
  videogame: {
    name: 'Videogame',
    primary: '#ff3366',
    secondary: '#ffcc00',
    background: '#1a0033',
    backgroundGradient: 'linear-gradient(135deg, #1a0033 0%, #330066 100%)',
    text: '#ffffff',
    textSecondary: '#b8b8b8',
    accent: '#00ffff',
    cardBg: 'rgba(51, 0, 102, 0.8)',
    particles: true,
    icon: '🎮'
  },
  pallavolo: {
    name: 'Pallavolo',
    primary: '#ff6b35',
    secondary: '#f7931e',
    background: '#0f1419',
    backgroundGradient: 'linear-gradient(135deg, #0f1419 0%, #1e2a35 100%)',
    text: '#ffffff',
    textSecondary: '#9ca3af',
    accent: '#ffd700',
    cardBg: 'rgba(30, 42, 53, 0.8)',
    particles: false,
    icon: '🏐'
  }
};

export const getTheme = (themeName) => {
  return themes[themeName] || themes.coding;
};
