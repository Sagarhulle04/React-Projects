import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

function UpdateForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCarIdDetails() {
      try {
        const res = await axios.get(`http://localhost:3000/${id}`, {
          withCredentials: true,
        });

        // ✅ because API returns array
        const data = res.data.data[0];

        if (data) {
          setName(data.name || "");
          setImage(data.image || "");
          setDescription(data.description || "");
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch car details");
      } finally {
        setLoading(false);
      }
    }

    getCarIdDetails();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:3000/update/${id}`,
        {
          name,
          image,
          description,
        },
        {
          withCredentials: true,
        },
      );

      toast.success("Car Updated Successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Update failed");
    }
  }

  if (loading) {
    return <h3 style={{ textAlign: "center" }}>Loading...</h3>;
  }

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Update Car Information</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {/* Name */}
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter car name"
              />
            </Form.Group>

            {/* Image */}
            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Enter image URL"
              />
            </Form.Group>

            {/* Description */}
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
              />
            </Form.Group>

            <Modal.Footer>
              <Button variant="outline-primary" type="submit">
                Update
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}

export default UpdateForm;
