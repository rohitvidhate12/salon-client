import React, { Fragment, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/esm/Image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Paper from "@mui/material/Paper";
import { Button } from "react-bootstrap";

const OurServices = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1401 },
      items: 4,
    },

    xLarge: {
      breakpoint: { max: 1400, min: 1201 },
      items: 3,
    },
    large: {
      breakpoint: { max: 1200, min: 993 },
      items: 3,
    },
    medium: {
      breakpoint: { max: 992, min: 769 },
      items: 2,
    },

    small: {
      breakpoint: { max: 768, min: 577 },
      items: 1,
    },
    xSmall: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };
  return (
    <Fragment>
      <Container fluid style={{ marginTop: "20px" }}>
        <Container>
          <Row>
            <Carousel responsive={responsive}>
              <Col
                style={{
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Paper elevation={6}>
                  <Image
                    fluid
                    rounded="20%"
                    src="Images/FacialTreatments.jpg"
                    style={{
                      height: "50vh",
                      width: "40vh",
                      marginBottom: "15px",
                      marginTop: "15px",
                    }}
                  />

                  <h5 style={{ marginBottom: "15px" }}>Facial treatment</h5>
                  <p style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                    Facial treatments involve deep-cleaning and moisturizing the
                    face, often including the use of steam, masks, and massage.
                  </p>

                  <Button
                    style={{
                      marginBottom: "15px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      backgroundColor: "black",
                      color: "white",
                      borderColor: "gold",
                    }}
                  >
                    Book Now
                  </Button>
                </Paper>
              </Col>

              <Col
                style={{
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Paper elevation={6}>
                  <Image
                    fluid
                    rounded="20%"
                    src="Images/Manicure.jpg"
                    style={{
                      height: "50vh",
                      width: "40vh",
                      marginBottom: "15px",
                      marginTop: "15px",
                    }}
                  />

                  <h5 style={{ marginBottom: "15px" }}>Manicures</h5>
                  <p style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                    Manicure involves grooming and painting the nails, often
                    including shaping, buffing, and cuticle care.
                  </p>

                  <Button
                    style={{
                      marginBottom: "15px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      backgroundColor: "black",
                      color: "white",
                      borderColor: "gold",
                    }}
                  >
                    Book Now
                  </Button>
                </Paper>
              </Col>

              <Col
                style={{
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Paper elevation={6}>
                  <Image
                    fluid
                    rounded="20%"
                    src="Images/HairColoring.webp"
                    style={{
                      height: "50vh",
                      width: "40vh",
                      marginBottom: "15px",
                      marginTop: "15px",
                    }}
                  />

                  <h5 style={{ marginBottom: "15px" }}>HairColoring</h5>
                  <p style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                    Hair coloring involves changing the color of hair using
                    various techniques, such as highlights, lowlights, and
                    all-over color.
                  </p>

                  <Button
                    style={{
                      marginBottom: "15px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      backgroundColor: "black",
                      color: "white",
                      borderColor: "gold",
                    }}
                  >
                    Book Now
                  </Button>
                </Paper>
              </Col>

              <Col
                style={{
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Paper elevation={6}>
                  <Image
                    fluid
                    rounded="20%"
                    src="Images/HairCutMen.jpg"
                    style={{
                      height: "50vh",
                      width: "40vh",
                      marginBottom: "15px",
                      marginTop: "15px",
                    }}
                  />

                  <h5 style={{ marginBottom: "15px" }}>Hair Cut</h5>
                  <p style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                    Hair treatments such as cuts and colorings are some of the
                    most common salon services.Pretty much famous.
                  </p>

                  <Button
                    style={{
                      marginBottom: "15px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      backgroundColor: "black",
                      color: "white",
                      borderColor: "gold",
                    }}
                  >
                    Book Now
                  </Button>
                </Paper>
              </Col>
            </Carousel>
          </Row>
        </Container>
      </Container>
    </Fragment>
  );
};

export default OurServices;
