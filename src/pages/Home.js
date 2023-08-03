import React, { useState, useEffect } from "react";
import "../App.css";
import "../index.css";
import "./Navbar";

const Home = ({ handlePageChange }) => {
  const [currentPath, setCurrentPath] = useState("");
  console.log(currentPath);

  useEffect(() => {
    console.log(currentPath);
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <main>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        {/* <!-- Indicators --> */}
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
        </ol>

        {/* <!-- Wrapper for slides --> */}
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src="https://placehold.it/1200x400?text=IMAGE" alt="Image" />
            <div className="carousel-caption">
              <h3>Text goes here.</h3>
              <p>Paragraph.</p>
            </div>
          </div>
        </div>

        {/* <!-- Left and right controls --> */}
        <a
          className="left carousel-control"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="container text-center">
        <h3>What We Do</h3>
        <div className="row">
          <div className="col-sm-4"></div>
        </div>
      </div>
    </main>
  );
};

export default Home;
