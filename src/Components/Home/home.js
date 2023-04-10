import { Fragment } from "react";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import Button from "react-bootstrap/esm/Button";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import WhyChooseBlooming from "./WhyChooseBlooming";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const bookAppointment = () => {
    navigate("/book-appointment");
  };
  return (
    <Fragment>
      {/* HomePage */}
      <Container fluid style={{ padding: 0, margin: 0, position: "relative" }}>
        {/* HomePage BackGround Image */}
        <Image
          fluid
          src="/Images/HomePage.jpg"
          style={{ width: "100%", height: "100vh" }}
        />

        {/* Book Now Button */}
        <Button
          variant="contained"
          style={{
            position: "absolute",
            color: "white",
            backgroundColor: "maroon",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          onClick={bookAppointment}
        >
          Book an Appointment
        </Button>
      </Container>

      {/* Why Choose Blooming */}
      <WhyChooseBlooming />

      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default Home;
