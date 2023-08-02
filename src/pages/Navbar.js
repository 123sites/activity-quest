import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../components/Theme/themeContext";
import "../App.css";

const Navbar = ({ handlePageChange }) => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    console.log(currentPath);
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <nav className="flex sticky">
      <div
        className={`container-fluid mt-4 shadow-lg homeBox-${theme} vContainer-${theme}`}
      ></div>
    </nav>
  );
};

export default Navbar;
