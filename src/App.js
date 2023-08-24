import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Calender from "./components/Calender/calender";
import { createContext, useState } from "react";
import Home from "./pages/Home.js";
import Signup from "./pages/Signup.js";
import Login from "./pages/Login.js";
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/navbar";
import { ThemeProvider } from "./components/Theme/themeContext";
import "@fortawesome/fontawesome-svg-core/styles.css";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/calender" element={<Calendar />} /> */}
          {/* <Route path="/account" element={<Account />} /> */}
          {/* <Route path="/favorites" element={<Favorites /> } /> */}
          <Route path="/footer" element={<Footer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="./public/404.html">"404 Not Found!"</Route>
        </Routes>
        <div>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
