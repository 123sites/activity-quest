import React, { useState } from "react";
import Footer from "./Footer";
import Home from "./Home";

export default function WebpageContainer() {
  const [currentPage, setCurrentPage] = useState("Home");
  const handlePageChange = (page) => setCurrentPage(page);
  const changePage = (page) => setCurrentPage(page);
  const renderPage = () => {
    if (currentPage === "Footer") {
      return (
        <Footer
          changePage={changePage}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      );
    }
    return (
      <Home
        changePage={changePage}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    );
  };
}
