import React, { useState } from "react";

import Footer from "./Footer";

export default function WebpageContainer() {
  const [currentPage, setCurrentPage] = useState("Home");
  const handlePageChange = (page) => setCurrentPage(page);
  const changePage = (page) => setCurrentPage(page);
  const renderPage = () => {
    if (currentPage === "Footer") {
      return (
        <Footer handlePageChange={handlePageChange} currentPage="footer" />
      );
    }
    if (currentPage === "Home") {
      return <Home handlePageChange={handlePageChange} currentPage="home" />;
    }

    return (
      <div>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />

        {renderPage()}
        <Footer />
      </div>
    );
  };
}
