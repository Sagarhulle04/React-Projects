import { Link } from "react-router-dom";

function Navigation() {
  return (
    <ul>
      <li>
        <Link
          style={{ textDecoration: "none", color: "beige" }}
          id="link"
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: "none", color: "beige" }} to="/explore">
          Explore{" "}
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: "none", color: "beige" }} to="/about">
          About Us
        </Link>
      </li>
      <li>
        <Link to="/contact" style={{ textDecoration: "none", color: "beige" }}>
          Contact{" "}
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
