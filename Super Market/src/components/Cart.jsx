import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useCart } from "../context/CartContext";
import { IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, setCart } = useCart();

  // 🟢 Remove item
  function handleRemoveItem(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  // 🟢 Increase quantity
  function handleIncrease(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  // 🟢 Decrease quantity
  function handleDecrease(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  }

  // 🟢 Total price
  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0,
  );

  // 🟢 Empty cart UI
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
        <h1>Cart is empty. Add the items</h1>
        <p>
          <Link to="/">Click Here</Link>
        </p>
      </div>
    );

  return (
    <div className="d-flex flex-column gap-3">
      {/* Header */}
      <div className="w-100 d-flex justify-content-between align-items-center">
        <h1>Cart Items</h1>
        <h3>{cart.length} items</h3>
      </div>

      {/* Cart Items */}
      {cart.map((data) => (
        <Card
          key={data.id}
          className="w-100 d-flex flex-row align-items-center"
          style={{ width: "40rem" }}
        >
          <Card.Img
            src={data.thumbnail}
            style={{
              width: "10rem",
              height: "10rem",
              objectFit: "cover",
            }}
          />

          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>{data.description}</Card.Text>

            <div className="d-flex justify-content-between align-items-center">
              {/* Price */}
              <Card.Title>
                Price : <IndianRupee size={17} />
                {data.price * data.quantity}
              </Card.Title>

              {/* Quantity Controls */}
              <div className="d-flex gap-2">
                <Button
                  variant="warning"
                  onClick={() => handleDecrease(data.id)}
                >
                  -
                </Button>

                <Button variant="light">{data.quantity}</Button>

                <Button
                  variant="warning"
                  onClick={() => handleIncrease(data.id)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Remove Button */}
            <Button
              variant="danger"
              className="mt-2"
              onClick={() => handleRemoveItem(data.id)}
            >
              Remove
            </Button>
          </Card.Body>
        </Card>
      ))}

      {/* Total Price */}
      <h3
        style={{
          paddingTop: "1rem",
          backgroundColor: "white",
        }}
      >
        Total Price : <IndianRupee /> {Math.round(totalPrice)}
      </h3>
    </div>
  );
}

export default Cart;
