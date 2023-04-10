import React, { Fragment } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";

const Footer = () => {
  return (
    <Fragment>
      <Container style={{ marginTop: "20px" }}>
        {/* Icons */}
        <Row style={{ marginBottom: "20px" }}>
          <Col
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              // alignItems: "center",
            }}
          >
            {/* Facebook */}
            <Button
              href="#!"
              className="m-1"
              style={{
                fontSize: "15px",
                color: "white",
                backgroundColor: "black",
              }}
            >
              <i className="fa-brands fa-facebook fa-bounce"></i>
            </Button>

            {/* Instagram */}
            <Button
              href="#!"
              className="m-1"
              style={{
                fontSize: "15px",
                color: "white",
                backgroundColor: "black",
              }}
            >
              <i className="fa-brands fa-instagram fa-bounce"></i>
            </Button>

            {/* Whatsapp */}
            <Button
              href="#!"
              className="m-1"
              style={{
                fontSize: "15px",
                color: "white",
                backgroundColor: "black",
              }}
            >
              <i className="fa-brands fa-whatsapp fa-bounce"></i>
            </Button>

            {/* Google */}
            <Button
              href="#!"
              className="m-1"
              style={{
                fontSize: "15px",
                color: "white",
                backgroundColor: "black",
              }}
            >
              <i className="fa-brands fa-google fa-bounce"></i>
            </Button>
          </Col>
        </Row>

        {/* Subscribe FIeld */}
        <Row
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Col>
            <h6>Sign up for Exclusive Offers</h6>
          </Col>

          <Col>
            <Form>
              <Form.Control
                type="email"
                placeholder="Enter email address to get offers"
              />
            </Form>
          </Col>

          <Col>
            <Button
              style={{
                backgroundColor: "white",
                color: "black",
                border: "2px solid black",
              }}
            >
              Subscribe
            </Button>
          </Col>
        </Row>

        {/* Dummy Content */}
        <Row style={{ marginBottom: "20px" }}>
          <Col>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Copyright */}
      <Container
        fluid
        style={{
          backgroundColor: "darkgray",
        }}
      >
        <Row>
          <Col
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <span
              style={{
                color: "white",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                // alignItems: "center",
              }}
            >
              We are not breaching copyright laws &#169;
            </span>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Footer;
