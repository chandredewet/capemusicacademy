import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Menubar from "./Menubar";
import "./Landing.css";
import MobileHero from "../assets/MobileHero.png";
import Facebook from "../assets/facebookIcon.png";
import Email from "../assets/emailIcon.png";
import Contact from "../assets/ContactIcon.png";

const Landing = () => {
  return (
    <Container fluid className="px-0 hero-container">
      <Menubar className="menubar" />
      <article
        className="article"
        style={{ backgroundImage: `url(${MobileHero})` }}
        alt="Guitarist Posing"
      >
        <h1 className="header">
          Sustainable <span style={{ color: "orange" }}>Musicians</span>
        </h1>
        <h2 className="headerTwo">Creative Entrepreneurs</h2>
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
