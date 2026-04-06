import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards({ flower, onDelete }) {
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
          <Card.Title> {flower.name} </Card.Title>
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
