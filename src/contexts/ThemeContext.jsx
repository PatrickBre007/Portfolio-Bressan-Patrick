import { createContext, useContext, useState } from 'react';
import { themes } from '../themes/themes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('coding');

  const theme = themes[currentTheme];

  const changeTheme = (newTheme) => {
    if (themes[newTheme]) {
      setCurrentTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve essere usato dentro ThemeProvider');
  }
  return context;
};
