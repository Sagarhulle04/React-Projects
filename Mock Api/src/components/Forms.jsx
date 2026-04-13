import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useProduct } from "../context/ProductProvider";

function Forms() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const { submitData } = useProduct();

  return (
    <div>
      <Form
        onSubmit={(e) => submitData(e, { name, price, image })}
        className="w-50 mx-auto border  border-black p-3 rounded-2"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Flower Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter flower name"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="enter price"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Forms;
