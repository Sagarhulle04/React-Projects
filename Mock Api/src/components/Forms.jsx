import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Forms() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);

  async function submitData(e) {
    e.preventDefault();
    const data = await axios.post(
      "https://69d33482336103955f8ea792.mockapi.io/yes/addFlower",
      { name, price, image },
    );
    alert("Flower added successfully");
    setName("");
    setImage("");
    setPrice("");
  }

  return (
    <div>
      <Form
        onSubmit={submitData}
        className="w-50 mx-auto border border-black p-3 rounded-2"
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

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder=""
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
