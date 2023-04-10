import React, { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "react-bootstrap/esm/Container";
import { Grid, Paper } from "@mui/material";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import OurServices from "./ourServices";

const Services = () => {
  return (
    <Fragment>
      <Container>
        {/* Services Banner */}
        <Paper
          elevation={10}
          style={{
            padding: 2,
            backgroundColor: "red",
            position: "relative",
            backgroundImage: "url(/Images/ServicesBanner.jpeg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 400,
            width: "100%",
          }}
        >
          {/* Contents shown on the Banner */}
          <div style={{ marginTop: "8%" }}>
            <Row>
              <Col style={{ padding: 30, position: "absolute" }}>
                <h1 style={{ fontWeight: 300 }}>
                  Look and feel beautiful without overspending.
                </h1>
                <p style={{ marginTop: 10 }}>
                  Get salon-quality services at a fraction of the cost.
                </p>
                <Button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: 10,
                    borderRadius: 5,
                    borderColor: "gold",
                    marginTop: 5,
                  }}
                >
                  Click Here for Latest offers
                </Button>
              </Col>
            </Row>
          </div>
        </Paper>
      </Container>

      {/* Our Services */}
      <OurServices />

      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default Services;
