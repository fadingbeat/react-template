import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

class SuccessDialog extends Component {
  render() {
    return (
      <Modal.Dialog show={true}>
        <Modal.Header closeButton>
          <Modal.Title>Uspješna prijava</Modal.Title>
        </Modal.Header>
      </Modal.Dialog>
    );
  }
}

export default SuccessDialog;
