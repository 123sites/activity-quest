import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./pages/Home.js";
import Signup from "./pages/Signup.js";
import Login from "./pages/Login.js";
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/navbar";
import { ThemeProvider } from "./components/Theme/themeContext";
import "@fortawesome/fontawesome-svg-core/styles.css";
import useLocalStorage from "./hooks/useLocalStorage";
import "../src/components/Motion/loginModal.js";
import "../src/pages/Login.js";
import "../src/pages/Account";
import "../src/pages/Signup.js";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <BrowserRouter>
      <ThemeProvider>
        {" "}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="./public/404.html">"404 Not Found!"</Route>
        </Routes>
        <div>
          <Footer />
        </div>
      </ThemeProvider>{" "}
    </BrowserRouter>
  );
}

export default App;
