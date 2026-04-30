import axios from "axios";
import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInForm, setSignInForm] = useState(true);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (!signInForm) {
        await axios.post(
          "https://nodejs-uqbq.onrender.com/register",
          { name, email, password },
          { withCredentials: true },
        );
        toast.success("Account Created");
        setName("");
        setEmail("");
        setPassword("");
      } else {
        await axios.post(
          "https://nodejs-uqbq.onrender.com/login",
          { email, password },
          { withCredentials: true },
        );
        toast.success("Logged In Successfully");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  }

  return (
    <div
      style={{ width: "30%", margin: "7rem auto" }}
      className="border border-black p-4 rounded-5 bg-white"
    >
      <Form onSubmit={handleSubmit}>
        <h1 className="text-center">
          {!signInForm ? "SignUp Form" : "SignIn Form"}
        </h1>

        {signInForm === false && (
          <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
            <Form.Control
              type="text"
              className="p-2 rounded-3"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />
          </Form.Group>
        )}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            className="p-2 rounded-3"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            className="p-2 rounded-3"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {!signInForm ? "SignUp" : "SignIn"}
        </Button>

        <p>
          {" "}
          {signInForm ? (
            <p className="mt-3">
              Doesnt have an account :{" "}
              <span
                onClick={() => setSignInForm(false)}
                style={{ color: "blue", cursor: "pointer" }}
              >
                Register Here
              </span>
            </p>
          ) : (
            <p className="mt-3">
              Already have an account :{" "}
              <span
                onClick={() => setSignInForm(true)}
                style={{ color: "blue", cursor: "pointer" }}
              >
                Login Here
              </span>
            </p>
          )}{" "}
        </p>
      </Form>
    </div>
  );
}

export default SignUp;
