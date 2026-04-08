import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoAddCircle } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [data, setData] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post("https://69d33482336103955f8ea792.mockapi.io/yes/pizza", {
      name,
      image,
      price,
    });
    toast.success("Pizza Added Successfully");
    handleClose();
  }

  useEffect(() => {
    async function getPizzaData() {
      try {
        const res = await axios.get(
          "https://69d33482336103955f8ea792.mockapi.io/yes/pizza",
        );
        setData(res.data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    getPizzaData();
  }, [data]);

  function handleOpen() {
    setShow(true);
  }
  function handleClose() {
    setShow(false);
  }

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="outline-dark"
        className="m-3 px-4 py-1"
        style={{ fontSize: "1.5rem" }}
      >
        {" "}
        Create <IoAddCircle />{" "}
      </Button>

      {/* Cards */}

      <div
        style={{
          display: "flex",
          maxWidth: "90%",
          margin: "auto",
          gap: "1rem",
        }}
      >
        {data.map((pizza) => (
          <Card
            key={pizza.id}
            style={{
              width: "max-content",
            }}
          >
            <Card.Img
              variant="top"
              style={{ height: "15rem", width: "max-content" }}
              src={pizza.image}
            />
            <Card.Body>
              <Card.Title> {pizza.name} </Card.Title>
              <Card.Text className="text-success">
                {" "}
                <FaIndianRupeeSign size={15} />
                {pizza.price}
              </Card.Text>
              <Button variant="outline-dark">Order Now</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      {/* Cards */}

      {/* Create Modal */}
      {show && (
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title> Add Pizza To The List </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter pizza name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImage">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="IMAGE URL..."
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                  />
                </Form.Group>{" "}
                <Button variant="primary" type="submit">
                  Add
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      )}
      {/* Create Modal */}

      <ToastContainer />
    </div>
  );
};

export default App;
