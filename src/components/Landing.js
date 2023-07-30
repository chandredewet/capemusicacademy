import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Menubar from "./Menubar";
import "./Landing.css";
import MobileHero from "../assets/Homepage-Right.png";
import Facebook from "../assets/facebookIcon.png";
import Email from "../assets/emailIcon.png";
import Contact from "../assets/ContactIcon.png";

const Landing = () => {
  const containerStyle = {
    border: "none",
    boxShadow: "none",
    margin: "0 auto",
    backgroundImage: `url(${MobileHero})`,
  };

  const headingStyle = {
    fontFamily: "roboto",
    fontSize: "24px",
    color: "orange",
    textTransform: "uppercase",
    background: "black",
    padding: "30px 0 60px",
    marginBottom: "0",
  };

  return (
    <Container fluid className="px-0 hero-container">
      <Menubar className="menubar" />
      <div id="headingContainer">
        <h1 style={headingStyle}>Cape Music Academy</h1>
        <h2 className="header">
          Sustainable <br /> Musicians
        </h2>
        <h2 className="headerTwo">Creative Entrepreneurs</h2>
      </div>

      <svg width="500" height="200" style={{ position: "absolute", left: "0" }}>
        <circle cx="200" cy="-70" r="40%" fill="black" />
      </svg>
      <article
        className="article"
        style={containerStyle}
        alt="Guitarist Posing"
      >
        <section id="cta-button">
          <Button
            variant="dark"
            style={{
              width: 200,
              height: 60,
              fontWeight: "bold",
              color: "white",
              background: "black",
              border: "5px",
              marginBottom: "15px",
            }}
          >
            Enroll Now
          </Button>
          <Button
            variant="outline-light"
            style={{
              width: 200,
              height: 60,
              border: "4px solid white",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Sign Up
          </Button>
        </section>

        <div className="socialMedia">
          <img src={Facebook} alt="Facebook Icon" className="px-4" />
          <img src={Email} alt="Email Icon" className="px-4" />
          <img src={Contact} alt="Contact or Telephone Icon" className="px-4" />
        </div>
      </article>
    </Container>
  );
};

export default Landing;
