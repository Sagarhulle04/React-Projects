import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoAddCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

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
  async function handleUpdateData(e) {
    e.preventDefault();
    await axios.put(
      `https://69d33482336103955f8ea792.mockapi.io/yes/pizza/${id}`,
      {
        name,
        image,
        price,
      },
    );
    toast.success("Pizza Updated Successfully");
    editHandleClose();
  }

  function getDataUpdate(pizza) {
    setEditData(pizza);
    setName(pizza.name);
    setImage(pizza.image);
    setPrice(pizza.price);
    setId(pizza.id);
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
  function modalHandleOpen() {
    setShowDeleteModal(true);
  }
  function modalHandleClose() {
    setShowDeleteModal(false);
  }
  function editHandleOpen() {
    setIsEdit(true);
  }
  function editHandleClose() {
    setIsEdit(false);
  }

  console.log(name, image, price);

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

      <div>
        <h1 className="text-center">
          <u>Your Pizza's List</u>
        </h1>

        <div
          style={{
            display: "flex",
            maxWidth: "90%",
            flexWrap: "wrap",
            margin: " 1.5rem auto",
            gap: "1rem",
          }}
        >
          {data.map((pizza) => (
            <Card
              key={pizza.id}
              style={{
                width: "17rem",
              }}
            >
              <Card.Img
                variant="top"
                style={{ height: "15rem", width: "100%" }}
                src={pizza.image}
              />
              <Card.Body>
                <div className="d-flex gap-2">
                  <Card.Title> {pizza.name} </Card.Title>
                  <Card.Title
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    onClick={() => {
                      setIsEdit(true);
                      getDataUpdate(pizza);
                    }}
                  >
                    {" "}
                    Edit{" "}
                  </Card.Title>
                </div>

                <Card.Text className="text-success">
                  {" "}
                  <FaIndianRupeeSign size={15} />
                  {pizza.price}
                </Card.Text>
                <div className="d-flex gap-2">
                  <Button variant="outline-dark">Order Now</Button>
                  <Button variant="outline-dark" onClick={modalHandleOpen}>
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
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

      {showDeleteModal && (
        <ModalDelete
          show={true}
          modalHandleClose={modalHandleClose}
          id={pizza.id}
        />
      )}

      {isEdit && (
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <Modal show={isEdit} onHide={editHandleClose}>
            <Modal.Header closeButton>
              <Modal.Title> Add Pizza To The List </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleUpdateData}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter pizza name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImage">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="IMAGE URL..."
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                  />
                </Form.Group>{" "}
                <Button variant="primary" type="submit">
                  Update
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

function ModalDelete({ show, modalHandleClose, id }) {
  async function handleDelete(id) {
    await axios.delete(
      `https://69d33482336103955f8ea792.mockapi.io/yes/pizza/${id}`,
    );
    toast.success("Pizza deleted successfully");
    modalHandleClose();
  }

  return (
    <Modal show={isEdit} onHide={modalHandleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Are You Sure you want to delete the pizza..</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleDelete(id)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default App;
