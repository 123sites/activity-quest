import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Calender from "./components/Calender/calender";
import Home from "./pages/Home.js";
import { ThemeProvider } from "./components/Theme/themeContext";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/calender" element={<Calender />} /> */}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
