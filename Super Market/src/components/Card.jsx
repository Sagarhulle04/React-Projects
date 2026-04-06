import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { IndianRupee } from "lucide-react";

function CardLayout({ data }) {
  // console.log(data);
  const { thumbnail, title, id, description, price } = data;

  const { cart, setCart } = useCart();

  function handleAddToCart() {
    // console.log(data);
    const obj = {
      id,
      title,
      thumbnail,
      quantity: 1,
      description,
      description,
      price,
    };
    setCart((cart) => [...cart, obj]);
    alert(`Item added to cart : ${title}`);
  }

  console.log(cart);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={thumbnail}
          className="border-bottom h-40"
        />
        <Card.Body>
          <Card.Title> {title} </Card.Title>
          <Card.Text>{description.slice(0, 80)}</Card.Text>
          <Card.Text>
            Price : <IndianRupee size={15} />
            {price}
          </Card.Text>
          <div className="d-flex gap-2 justify-center align-center">
            <Link to={`/${id}`}>
              <Button variant="outline-primary">Buy Now</Button>
            </Link>
            <Button variant="outline-primary" onClick={handleAddToCart}>
              Add To Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardLayout;
