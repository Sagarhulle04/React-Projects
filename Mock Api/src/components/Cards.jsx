import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useProduct } from "../context/ProductProvider";

function Cards({ flower, onDelete }) {
  const { handleUpdate } = useProduct();

  return (
    <div className="d-flex gap-2">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          style={{
            height: "18rem",
          }}
          src={flower.image}
        />
        <Card.Body>
          <div className="d-flex gap-3">
            <Card.Title> {flower.name} </Card.Title>
            <Link
              to={`/edit/${flower.id}`}
              onClick={handleUpdate}
              style={{ textDecoration: "none" }}
            >
              Update
            </Link>
          </div>
          <Card.Text>Price : {flower.price}</Card.Text>
          <div className="d-flex gap-2">
            <Button variant="outline-primary">Buy Now</Button>
            <Button
              variant="outline-danger"
              onClick={() => onDelete(flower.id)}
            >
              Remove
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
