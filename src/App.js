import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
// import Calender from "./components/Calender/calender";
import Home from "./pages/Home.js";
// import Account from "./pages/Account.js";
// import Favorites from "./pages/Favorites.js";
// import Login from "./pages/Login.js";
// import Logout from "./pages/Logout.js";
// import Search from "./pages/Search.js";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Home />} />
        <Route path="/favorites" element={<Home />} />
        {/* <Route path="/calender" element={<Calender />} /> */}
        {/* <Route path="/account" element={<Account />} /> */}
        <Route path="/signup" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/logout" element={<Home />} />
      </Navbar>
    </BrowserRouter>
  );
}
