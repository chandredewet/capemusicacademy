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
    <Container fluid className="px-0">
      <Menubar />
      <article
        className="article"
        style={{ backgroundImage: `url(${MobileHero})` }}
        alt="Guitarist Posing"
      >
        <h1 className="header">
          Sustainable <span style={{ color: "orange" }}>Musicians</span>
        </h1>
        <h2 className="headerTwo">Creative Entrepreneurs</h2>
        <Button variant="dark" style={{ width: 200, height: 60 }}>
          Enroll Now
        </Button>
        <Button variant="outline-light" style={{ width: 200, height: 60 }}>
          Sign Up
        </Button>
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
