import React from "react";
import CalenderDisplay from "../components/Calender/calender";
import Navbar from "../components/Navbar/navbar.js";
import Footer from "../components/Footer/footer";

export default function Calender() {
  return (
    <>
      <Navbar />
      <CalenderDisplay />
      <Footer />
    </>
  );
}