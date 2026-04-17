import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { GoPencil } from "react-icons/go";

function Cards({ flower, onDelete, onEdit }) {
  const { name, photo, id } = flower;

  return (
    <div className="p-3">
      <Card style={{ width: "18rem", cursor: "pointer" }}>
        <div style={{ position: "relative" }}>
          <Card.Img src={photo} />

          <GoPencil
            size={30}
            color="black"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
              background: "white",
              borderRadius: "50%",
              padding: "5px",
            }}
          />
        </div>

        <Card.Body>
          <Card.Title>{name}</Card.Title>

          <div className="d-flex gap-3 my-2">
            <Button variant="primary">Buy Now</Button>

            <Button variant="danger" onClick={() => onDelete(id)}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
