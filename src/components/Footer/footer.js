import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../Theme/themeContext";
import "../../index.css";
import "../../assets/footer.css";

const Footer = () => {
  const [currentPath, setCurrentPath] = useState("");
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(currentPath);
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <footer>
      <div className={`footer-container text-center`}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/chelwebdeveloper"
        >
          <i
            className={`fa-brands fa-linkedin fa-beat emojis-${theme} pb-3 mr-3`}
          ></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/123sites/activity-quest"
        >
          <i
            className={`fa-brands fa-github fa-beat emojis-${theme} pb-3 mr-3`}
          ></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:cfreitas12345@gmail.com"
        >
          <i
            className={`fa-solid fa-envelope fa-beat emojis-${theme} pb-3`}
          ></i>
        </a>
      </div>
      <div className="text-center">
        <h4 className={`title-${theme}`}>
          🌟 Activity Quest{" "}
          <span
            className="star-emoji"
            role="img"
            aria-label="Stars"
            aria-hidden="false"
          >
            🌟
          </span>
          {""}
        </h4>
        <p>
          <div className={`copyright-${theme}`}>
            Copyright © Chel Freitas and Gayle Hoefer | C & G, Inc.
          </div>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
