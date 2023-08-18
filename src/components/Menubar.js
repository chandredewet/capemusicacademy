import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Logo from "../assets/Logo1.png";
import "./Menubar.css";

const Menubar = () => {
  return (
    <Navbar expand="lg" className="navbar-dark bg-body-tertiary" id="navbar">
      <Container
        id="navbar-container"
        fluid
        style={{ backgroundColor: "black", color: "white" }}
      >
        <Navbar.Brand href="#">
          <img
            src={Logo}
            width="70"
            height="30"
            style={{ padding: "5px" }}
            className="d-inline-block align-top"
            id="Logo"
            alt="CapeMusicAcademy Logo"
          />
          {/* <span>Cape Music Academy</span> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" id="navbarScroll" />
        <Navbar.Collapse id="navCollapse">
          <Nav className="me-auto  my-lg-0" navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action3">Events</Nav.Link>
            <Nav.Link href="#action4">Courses</Nav.Link>
            <Nav.Link href="#action5">Contacts</Nav.Link>
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
