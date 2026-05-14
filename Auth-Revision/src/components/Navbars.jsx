import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navbars() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              style={{ textDecoration: "none", color: "black" }}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              Login
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/signUp"
              style={{ textDecoration: "none", color: "black" }}
            >
              SignUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
