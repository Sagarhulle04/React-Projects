import { ShoppingCart } from "lucide-react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand style={{ fontSize: "1.6rem" }}>
            Super Market
          </Navbar.Brand>
        </Link>
        <Link to="/cart">
          {" "}
          <ShoppingCart color="black" style={{ cursor: "pointer" }} />
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
