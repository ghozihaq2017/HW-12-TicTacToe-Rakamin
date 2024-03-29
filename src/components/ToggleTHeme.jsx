// Utills
import { ThemeConsumer } from '../context/ThemeContext';

// Assets
import { FaMoon, FaSun } from 'react-icons/fa';

function ToggleTheme() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return (
          <button className="text-2xl" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun className="text-white" />}
          </button>
        );
      }}
    </ThemeConsumer>
  );
}

export default ToggleTheme;
