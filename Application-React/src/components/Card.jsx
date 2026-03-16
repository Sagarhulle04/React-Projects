import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards({ item }) {
  const { image, name, caption } = item;

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" style={{ height: "15rem" }} src={image} />
      <Card.Body>
        <Card.Title> {name} </Card.Title>
        <Card.Text>{caption}</Card.Text>
        <Button variant="primary">Click Here...</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
