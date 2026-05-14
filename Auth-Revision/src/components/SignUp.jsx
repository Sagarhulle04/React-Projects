import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/register",
        { name, email, password, role },
        { withCredentials: true },
      );
      toast.success("Registed Successfully");
      const data = await res.data;
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div
      style={{
        maxWidth: "60%",
        margin: "4.5rem auto",
        border: "1px solid black",
        borderRadius: "2rem",
      }}
      className="p-4"
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        <Form.Select
          className="mb-3"
          onChange={(e) => setRole(e.target.value)}
          aria-label="Default select example"
        >
          <option>Select the role</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </Form.Select>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
