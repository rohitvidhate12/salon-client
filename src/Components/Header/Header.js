import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/esm/Image";

const Header = () => {
  return (
    <Fragment>
      <Navbar
        expand="lg"
        style={{ backgroundColor: "white", position: "sticky" }}
      >
        <Container style={{ textAlign: "left" }}>
          <Navbar.Brand href="/home">
            <img
              src="/Images/Logo.jpg"
              width="60"
              height="60"
              className="rounded-5 d-inline-block align-top"
              alt="React Bootstrap logo"
              style={{ border: "2px solid black" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* style={{ display: "none" }} */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="/home"
                style={{ color: "black", fontSize: "18px" }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/about"
                style={{ color: "black", fontSize: "18px" }}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="/services"
                style={{ color: "black", fontSize: "18px" }}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="/career"
                style={{ color: "black", fontSize: "18px" }}
              >
                Career
              </Nav.Link>
              <Nav.Link
                href="/contact"
                style={{ color: "black", fontSize: "18px" }}
              >
                Contact Us
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>

            {/* Login and Avatar */}
            <Nav className="ms-auto">
              <Nav.Link
                href="/login"
                style={{ color: "black", fontSize: "18px" }}
              >
                Log In
                <Image
                  thumbnail
                  style={{ width: "40px", height: "40px", marginLeft: "10px" }}
                  alt="171x180"
                  src="/Images/Avatar.jpg"
                  roundedCircle
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
