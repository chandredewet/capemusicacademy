import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Logo from "../assets/Logo1.png";
import "./Menubar.css";

const Menubar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary py-0">
      <Container fluid style={{ backgroundColor: "black", color: "white" }}>
        <Navbar.Brand href="#">
          <img
            src={Logo}
            width="auto"
            height="50"
            className="d-inline-block align-top"
            alt="CapeMusicAcademy Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100%" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action2">Events</Nav.Link>
            <Nav.Link href="#action2">Courses</Nav.Link>
            <Nav.Link href="#action2">Contacts</Nav.Link>
            <Button variant="outline-success">Enroll Now</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;
