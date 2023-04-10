import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/esm/Card";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import "./FeatureCard.css";

const FeatureCard = () => {
  return (
    <>
      <Container
        fluid
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundImage: "url(/Images/CardBackGround.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}

        // style={{
        //   display: "flex",
        //   flexDirection: "row",
        //   justifyContent: "space-around",
        // }}
      >
        <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ padding: 15, height: "50vh" }}
                variant="top"
                src="/Images/Trimming.jpg"
              />
              <Card.Body>
                <Card.Title>Trimming</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "tan", color: "white" }}
                >
                  Try
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ padding: 15, height: "50vh" }}
                variant="top"
                src="/Images/HairCut.jpg"
              />
              <Card.Body>
                <Card.Title>Hair Cut</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "tan", color: "white" }}
                >
                  Try
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ padding: 15, height: "50vh" }}
                variant="top"
                src="/Images/MakeUp.jpg"
              />
              <Card.Body>
                <Card.Title>Make Up</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "tan", color: "white" }}
                >
                  Try
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FeatureCard;
