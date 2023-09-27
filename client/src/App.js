import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Home from "./pages/Home.js";
import Account from "./pages/Account.js";
import Signup from "./pages/Signup.js";
import Login from "./pages/Login.js";
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/navbar";
import Favorites from "./pages/Favorites.js";
import { ThemeProvider } from "./components/Theme/themeContext";
import "@fortawesome/fontawesome-svg-core/styles.css";
import useLocalStorage from "./hooks/useLocalStorage";
import "../src/components/Motion/loginModal.js";
import "../src/pages/Login.js";
import "../src/pages/Account";
import "../src/pages/Signup.js";
import { getCurrentUser } from "./api/auth";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      setUser(await getCurrentUser());
    })();
  }, []);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  console.log("user: ", user);

  return (
    <BrowserRouter>
      <ThemeProvider>
        {" "}
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/home" element={<Home user={user} />} />
          <Route path="/account" element={<Account />} />
          <Route path="/favorites" element={<Favorites />} />
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
