import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "./Footer.css";
import Facebook from "../assets/facebookIcon.png";
import Email from "../assets/emailIcon.png";
import Contact from "../assets/ContactIcon.png";
import Logo from "../assets/logos/cma-logo.png";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Modal from "react-bootstrap/Modal";

function Footer() {
  // Set Validation
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  // Set Show Message
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const form = useRef();
  const sendEmail = (e) => {
    // const form = e.currentTarget;
    // if (form.checkValidity() === false) {
    //   e.preventDefault();
    //   e.stopPropagation();
    // }

    setValidated(true);
    e.preventDefault();

    // Set EmailJS Public Key variables/ Tokens
    emailjs
      .sendForm(
        "service_n9w5cul",
        "template_vg9zzy9",
        form.current,
        "oOt9WwJwz6x-O9s33"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    // Container with Form,CTA Button, Google Maps and Contact Details.
    <Container fluid className="px-0 footer-container">
      <section class="header-section">
        <h2>
          Let's Get
          <br />
          In Touch
        </h2>
      </section>

      <section class="footer-section">
        <Form ref={form} noValidate validated={validated} onSubmit={sendEmail}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                id="nameInput"
                name="user_name"
                from="from_name"
                required
                type="text"
                placeholder="Full Name"
                // defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomEmail">
              <Form.Label>Email Address</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  id="emailInput"
                  name="user_email"
                  type="text"
                  placeholder="Email Address"
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomText">
              <Form.Label>What Can We Do For You?</Form.Label>
              <InputGroup>
                <Form.Control
                  id="textInput"
                  name="message"
                  as="textarea"
                  aria-label="With textarea"
                  placeholder="What Can We Do For You?"
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Button
            type="submit"
            id="submit-button"
            variant="outline-dark"
            style={{
              width: 200,
              height: 60,
              border: "3px solid #ff8800",
              fontWeight: "regular",
              color: "white",
            }}
            onClick={handleShow}
          >
            Submit form
          </Button>
          <Modal id="modalCard" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>THANK YOU!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Your Details Has Been Successfully Submitted
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={handleClose}
                style={{
                  width: 200,
                  height: 60,
                  backgroundColor: "#ff8800",
                  fontWeight: "regular",
                  color: "white",
                }}
              >
                OK
              </Button>
            </Modal.Footer>
          </Modal>
        </Form>
        <div class="map-section">
          <h2>Our Location</h2>
          <div class="map">
            <iframe
              title="map"
              id="map-frame"
              width="300"
              height="278"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=771&amp;height=600&amp;hl=en&amp;q=Block%20A%20%7C%20Western%20Cape%20Sports%20School%20%20Old%20Nooiensfontein%20Road%20%20Kuils%20River%20%207580+(Cape%20Music%20Academy)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/distance-area-calculator.html">
                measure acres/hectares on map
              </a>
            </iframe>
          </div>
        </div>
      </section>
      <div class="address-section">
        <p>
          Cape Music Academy <br />
          info@capemusicacademy.co.za <br />
          082 374 5791
        </p>
        <p>
          Block A | Western Cape Sports School <br />
          Old Nooiensfontein Road <br />
          Kuils River 7580
        </p>
      </div>
      <div className="socialMedia">
        <img src={Facebook} alt="Facebook Icon" className="px-4" />
        <img src={Email} alt="Email Icon" className="px-4" />
        <img src={Contact} alt="Contact or Telephone Icon" className="px-4" />
      </div>
      <div class="disclaimer">
        <div class="logo-primary">
          <Image src={Logo} alt="logo of cape music academy" fluid />
        </div>
        <p>
          © 2023 Privacy -Terms - A product by the Cape Music Academy - This
          website is created by Chezlin Benson & Chandre De Wet{" "}
        </p>
      </div>
    </Container>
  );
}

export default Footer;
