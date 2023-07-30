import "./About.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import mic from "../assets/about/mobileaboutmic.png";
import pic1 from "../assets/about/mobileaboutpic1.png";
import pic2 from "../assets/about/mobileaboutpic2.png";
import pic3 from "../assets/about/mobileaboutpic3.png";

const About = () => {
  return (
    <Container fluid className="px-0 about-container">
      <section>
        <p className="about-hero-title">
          Enhance your musical skills with comprehensive training in theory,
          performance, and improvisation. <br />{" "}
          <span className="about-hero-star">*</span>{" "}
        </p>
        <Image src={mic} alt="microphone" className="about-hero-img" fluid />
      </section>
      <section class="about-article-container">
        <article>
          <Image
            src={pic1}
            className="about-image1"
            alt="man with guitar"
            fluid
          />
          <div>
            <h2>Unlock your musical potential</h2>
            <p>
              Whether you're passionate about vocals or instrumental
              performance, our academy offers a diverse range of departments to
              suit your interests. From guitar, bass, drums, and piano to our
              esteemed vocal program, our expert instructors provide
              comprehensive lessons designed to build your skills from the
              ground up. You'll learn everything from ear training and
              sight-reading to improvisation, teamwork, social skills, and live
              performance techniques.
            </p>
          </div>
        </article>
        <article>
          <Image
            src={pic2}
            className="about-image2"
            alt="Venue of music academy"
            fluid
          />
          <div>
            <h2>About Cape Music Academy</h2>
            <p>
              Cape Music Academy challenges students to attain their full
              potential as performers and creative entrepreneurs while
              establishing and promoting the best standards for music career
              progression.
            </p>
          </div>
        </article>
        <article>
          <Image
            src={pic3}
            className="about-image3"
            alt="group of students "
            fluid
          />
          <div>
            <h2>Join us if you are?</h2>
            <p>
              Apply today if you are an Unemployed Youth, a school leaver, an
              entrepreneur, a musician who need their prior learning to be
              recognized or if you are eager to broaden their knowledge to gain
              formal experience or recognize industry related training.
            </p>
          </div>
        </article>
      </section>
    </Container>
  );
};

export default About;
