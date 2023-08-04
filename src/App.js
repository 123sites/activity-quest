import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calender from "./components/Calender/calender";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/calender" element={<Calender />} />
      </Routes>
    </BrowserRouter>
  );
}
