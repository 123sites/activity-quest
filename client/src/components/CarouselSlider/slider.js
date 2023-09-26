import React, { useState, useEffect } from "react";
import "../../index.css";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    console.log(currentPath);
    setCurrentPath(window.location.pathname);
  }, [currentPath]);

  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://unsplash.com/photos/eXVd7gDPO9A"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Click to join this event!</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=eeehttps://unsplash.com/photos/naFHFLV5cqU"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Click to join this event!</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://unsplash.com/photos/Sj_FOinWBPI"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Click to join this event!</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
