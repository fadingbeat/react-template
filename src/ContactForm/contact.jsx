import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FormErrors } from "./errors";
import Modal from "react-bootstrap/Modal";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      formErrors: { name: "", email: "" },
      nameValid: false,
      emailValid: false,
      formValid: false,
      open: false,
    };
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;

    switch (fieldName) {
      case "name":
        nameValid = value.length > 0;
        fieldValidationErrors.name = nameValid ? "" : " is invalid";
        break;
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        nameValid: nameValid,
        emailValid: emailValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.nameValid && this.state.emailValid,
    });
  }
  render() {
    return (
      <div>
        <div>
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <Form onSubmit={this.handleSubmit} className="contact-form">
          <div className="form-group">
            <h1>What is your favorite animal?</h1>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="input"
                name="name"
                placeholder="Enter name"
                required
                defaultValue={this.state.name}
                onChange={(event) => this.handleUserInput(event)}
              />
              <Form.Control.Feedback>Ok</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
                defaultValue={this.state.email}
                onChange={(event) => this.handleUserInput(event)}
              />
              <Form.Control.Feedback>Ok</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Animals</Form.Label>
              <Form.Select aria-label="Default select example" required>
                <option value="mačka">Cat</option>
                <option value="pas">Dog</option>
                <option value="hrčak">Hamster</option>
              </Form.Select>
            </Form.Group>
            <Button
              onClick={this.onOpenModal}
              variant="secondary"
              type="submit"
              disabled={!this.state.formValid}
            >
              Submit
            </Button>
          </div>
        </Form>
        <Modal show={this.state.open} onHide={this.onCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Message</Modal.Title>
          </Modal.Header>
          <Modal.Body>Success</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.onCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Contact;
