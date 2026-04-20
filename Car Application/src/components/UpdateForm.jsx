import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

function UpdateForm() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [car, setCar] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getCarIdDetails() {
      const res = await axios.get(`http://localhost:3000/${id}`, {
        withCredentials: true,
      });
      setCar(res.data.data);
      console.log(res.data.data);
    }
    getCarIdDetails();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:3000/",
        { name, image, description },
        { withCredentails: true },
      );
      toast.success("Car Added Successfully");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Enter Car Information</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={car.name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setImage(e.target.value)}
                placeholder="IMAGE URL..."
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="outline-primary" type="submit">
                Add
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}

export default UpdateForm;
