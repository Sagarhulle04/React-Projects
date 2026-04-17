import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (!name || !photo) return toast.error("All fields are required");
      await axios.post("http://localhost:3000/add", { name, photo });
      toast.success("Flower added successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Enter flower details to add</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Rose"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setPhoto(e.target.value)}
                placeholder="image url..."
              />
            </Form.Group>

            <Modal.Footer>
              <Button variant="outline-primary" type="submit">
                Save changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}

export default Add;
