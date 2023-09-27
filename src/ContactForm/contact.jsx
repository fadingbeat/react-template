import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="contact-form"
      >
        <div className="form-group">
          <h1>What is your favorite animal?</h1>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="input" placeholder="Enter name" required />
            <Form.Control.Feedback>Ok</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
            <Form.Control.Feedback>Ok</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Animals</Form.Label>
            <Form.Select aria-label="Default select example" required>
              <option value="mačka">Mačka</option>
              <option value="pas">Pas</option>
              <option value="hrčak">Hrčak</option>
            </Form.Select>
          </Form.Group>
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Contact;
