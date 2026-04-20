import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Cards({ car, onDelete }) {
  return (
    <Card style={{ width: "18rem" }}>
      {/* Only image clickable */}
      <Link style={{ textDecoration: "none" }} to={`/update/${car.id}`}>
        <Card.Img
          variant="top"
          style={{ width: "100%", height: "13rem" }}
          src={car.image}
        />
      </Link>

      <Card.Body>
        <Card.Title>{car.name}</Card.Title>

        <Card.Text>
          {(car.description || "").slice(0, 80)}...
          <span style={{ color: "blue" }}> Read More</span>
        </Card.Text>

        <div className="d-flex gap-2">
          <Button variant="outline-primary">Buy Now</Button>

          <Button variant="outline-danger" onClick={() => onDelete(car.id)}>
            Delete
          </Button>

          <Link to={`/update/${car.id}`}>
            <Button variant="outline-success">Edit</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;
