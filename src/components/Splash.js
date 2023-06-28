import "./Splash.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import SplashAdd1 from "../assets/splash/splashAdd-1.png";

const Splash = () => {
  return (
    <Container fluid className="px-0 splash-container">
      <article class="splash-article-container">
        <h2>Latest News and Updates</h2>
        <div class="splash-block">
          <Image src={SplashAdd1} alt="person playing piano" fluid />
          <h2 class="splash-title">
            Admissions <span className="splash-hero-star">*</span> <br />
            Now Open
          </h2>
          <p>We are offering industry recognized courses</p>
        </div>
        <p>Ready to get started?</p>
        <p>Sign up or contact us</p>
        <Button variant="dark" style={{ width: 200, height: 60 }}>
          Sign Up
        </Button>
        <Button variant="dark" style={{ width: 200, height: 60 }}>
          Contact Us
        </Button>
      </article>
    </Container>
  );
};

export default Splash;
