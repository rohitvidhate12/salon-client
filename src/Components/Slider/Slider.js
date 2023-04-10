import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          {/* <Image
          fluid
          style={{ position: "relative" }}
          src="/Images/Slider1.jpg"
        /> */}
          <img
            className="d-block w-100"
            src="/Images/Slider1.jpg"
            alt="First slide"
          />

          <Carousel.Caption style={{ position: "absolute", top: "50%" }}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          {/* <Image
          fluid
          style={{ position: "relative" }}
          src="/Images/Slider2.jpg"
        /> */}
          <img
            className="d-block w-100"
            src="/Images/Slider2.jpg"
            alt="First slide"
          />

          <Carousel.Caption style={{ position: "absolute", top: "50%" }}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            fluid
            style={{ position: "relative" }}
            src="/Images/Slider2.jpg"
          />
          {/* <img
          className="d-block w-100"
          src="/Images/Slider1.jpg"
          alt="First slide"
        /> */}

          <Carousel.Caption style={{ position: "absolute", top: "50%" }}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Slider;
