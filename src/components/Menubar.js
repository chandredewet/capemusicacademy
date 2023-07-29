import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Logo from "../assets/Logo1.png";
import "./Menubar.css";

const Menubar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary py-0" id="navbar">
      <Container fluid style={{ backgroundColor: "black", color: "white" }}>
        <Navbar.Brand href="#">
          <img
            src={Logo}
            width="auto"
            height="50"
            className="d-inline-block align-top"
            id="Logo"
            alt="CapeMusicAcademy Logo"
          />
          <p>Cape Music Academy</p>
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
          </Nav>
          <Button
            variant="outline-light"
            style={{
              width: 200,
              height: 60,
              border: "2px solid white",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Sign Up
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;
