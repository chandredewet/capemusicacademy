import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./Footer.css";
import Facebook from "../assets/facebookIcon.png";
import Email from "../assets/emailIcon.png";
import Contact from "../assets/ContactIcon.png";

function Footer() {
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
    <Container fluid className="px-0 footer-container">
      <section class="header-section">
        <h2>
          Let's Get
          <br />
          In Touch
        </h2>
      </section>
      <section class="footer-section">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                id="nameInput"
                required
                type="text"
                placeholder="Full Name"
                defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomEmail">
              <Form.Label>Email Address</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  id="emailInput"
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
          >
            Submit form
          </Button>
        </Form>
        <div class="map-section">
          <h2>Our Location</h2>
          <div class="map"></div>
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
        <p>
          © 2023 Privacy -Terms - A product by the Cape Music Academy - This
          website is created by Chezlin Benson & Chandre De Wet{" "}
        </p>
      </div>
    </Container>
  );
}

export default Footer;
