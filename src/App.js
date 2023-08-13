import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Calender from "./components/Calender/calender";
import Home from "./pages/Home.js";
import Calender from "./pages/Calendar.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calender" element={<Calender />} />
      </Routes>
    </BrowserRouter>
  );
}
