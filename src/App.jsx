import { useEffect, useState } from 'react';
import GamePage from './pages/GamePage';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <main>
        <GamePage />
      </main>
    </ThemeProvider>
  );
}

export default App;
