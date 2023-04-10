import { Grid, Paper } from "@mui/material";
import React, { Fragment } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";

const WhyChooseBlooming = () => {
  return (
    <Fragment>
      <Container
        style={{
          padding: 5,
          // marginTop: "20px",
        }}
      >
        {/* Background */}
        <Grid container md={12}>
          <Grid item xs={false} md={1}></Grid>
          <Grid item md={10}>
            <Paper elevation={10} style={{ padding: 2 }}>
              <Image
                fluid
                //
                src="/Images/WhyChooseUs.jpg"
                style={{ width: "100%", height: "70vh" }}
              />
            </Paper>
          </Grid>

          {/* Content */}
          <Grid item xs={false} md={5 / 4}></Grid>
          <Grid item xs={12} md={19 / 2}>
            <Row
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Col
                xs={12}
                sm={12}
                md={10}
                lg={10}
                style={{
                  marginTop: "-20%",
                }}
              >
                <Paper
                  elevation={6}
                  style={{
                    backgroundImage: "url(/Images/WhyChooseUs2.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100vh",
                    padding: 10,
                  }}
                >
                  <h1 style={{ letterSpacing: "10px" }}>Why Choose Blooming</h1>

                  <h4 style={{ lineHeight: "1.4em" }}>
                    If you're looking for a salon that offers exceptional
                    services, a comfortable atmosphere, and a team of skilled
                    stylists, then Blooming is the perfect choice for you. With
                    years of experience in the industry, Blooming has
                    established a reputation as one of the best salons in town,
                    offering a wide range of services from haircuts and styling
                    to coloring and highlights. The team at Blooming is
                    dedicated to providing top-notch customer service and making
                    sure that every client leaves feeling pampered and
                    satisfied.
                  </h4>

                  <a href="#" style={{ textDecoration: "none" }}>
                    Click to see more
                  </a>
                </Paper>
              </Col>
            </Row>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default WhyChooseBlooming;
