import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards({ flower }) {
  const { name, photo } = flower;

  return (
    <div className="p-3">
      <Card
        style={{ width: "18rem", height: "max-content", cursor: "pointer" }}
      >
        <Card.Img className="h-30" variant="top" src={photo} />
        <Card.Body>
          <Card.Title> {name} </Card.Title>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
