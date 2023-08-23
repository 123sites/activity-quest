import { createContext, useState } from "react";

// import ReactSwitch from "react-switch"; // https://www.npmjs.com/package/react-switch

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    document.body.setAttribute(
      "data-theme",
      theme === "light" ? "dark" : "light"
    );
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
