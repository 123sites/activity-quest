// ThemeToggle.js
import { useContext } from 'react';
import { ThemeContext } from './themeContext.js';

function ThemeToggle() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>Toggle Theme</button>
  );
}

export default ThemeToggle;
