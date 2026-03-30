import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useCart } from "../context/CartContext";
import { IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, setCart } = useCart();
  console.log(cart);

  function handleRemoveItem(id) {
    setCart((cart) => cart.filter((data) => data.id !== id));
    console.log(id);
  }

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  if (cart.length === 0)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <h1>Cart is empty. Add the items </h1>
        <p>
          <Link to="/">Click Here</Link>
        </p>
      </div>
    );

  return (
    <div className="  d-flex gap-2 flex-wrap">
      <div className=" w-100 d-flex justify-content-between align-items-center">
        <h1>Cart Items</h1>
        <h3> {cart.length} items </h3>
      </div>

      {cart.map((data) => (
        <Card
          key={data.id}
          className=" w-100 d-flex flex-row align-items-center"
          style={{ width: "40rem" }}
        >
          <Card.Img
            src={data.thumbnail}
            style={{ width: "10rem", height: "10rem", objectFit: "cover" }}
          />

          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>{data.description}</Card.Text>
            <Card.Title>
              Price : <IndianRupee size={17} />
              {data.price}
            </Card.Title>
            <Button variant="danger" onClick={() => handleRemoveItem(data.id)}>
              Remove
            </Button>
          </Card.Body>
        </Card>
      ))}

      <h3
        style={{
          paddingTop: "1.2rem",
          backgroundColor: "white",
        }}
      >
        Total Price : <IndianRupee />
        {Math.round(totalPrice)}
      </h3>
    </div>
  );
}

export default Cart;
