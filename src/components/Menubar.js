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
            width="50"
            height="auto"
            style={{ padding: "1px" }}
            className="d-inline-block align-top"
            id="Logo"
            alt="CapeMusicAcademy Logo"
          />
          {/* <span>Cape Music Academy</span> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" id="navbarScroll" />
        <Navbar.Collapse id="navCollapse">
          <Nav className="me-auto  my-lg-0" id="navbarLinks" navbarScroll>
            <Nav.Link href="#action1" id="navLink">Home</Nav.Link>
            <Nav.Link href="#action2" id="navLink">About</Nav.Link>
            <Nav.Link href="#action3" id="navLink">Events</Nav.Link>
            <Nav.Link href="#action4" id="navLink">Courses</Nav.Link>
            <Nav.Link href="#action5" id="navLink">Contacts</Nav.Link>
          </Nav>
          <Button id="navBtn"
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

    // <nav id="Nav">
    //   <div id="Navbar-Container">
    //     <div id="NavbarLogo">
    //       {/* <h2>Cape Music Academy</h2> */}
    //     </div>
    //     <div id="Mobile-Icon">
    //       <div id="FaBars"></div>
    //     </div>
    //     <div id="NavMenu">
    //       <div id="NavItem">
    //         <div id="NavLinks" href="#action1">Home</div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Menubar;
