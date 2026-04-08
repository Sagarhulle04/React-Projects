import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UpdateForm = ({ flowers }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (flowers) {
      setName(flowers.name);
      setImage(flowers.image);
      setPrice(flowers.price);
    }
  }, [flowers]);

  async function getUpdateData(e) {
    e.preventDefault();

    await axios.put(
      `https://69d33482336103955f8ea792.mockapi.io/yes/addFlower/${flowers.id}`,
      {
        name,
        image,
        price,
      },
    );
    alert("Updated Successfully");
    navigate("/");
  }

  return (
    <Form
      onSubmit={getUpdateData}
      className="w-50 mx-auto border border-black p-3 rounded-2"
    >
      <Form.Group className="mb-3">
        <Form.Label>Flower Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  );
};

export default UpdateForm;
