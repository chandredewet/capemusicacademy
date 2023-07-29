import "./Courses.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MusicGroup from "../assets/courses/music group.png";
import CourseIcon1 from "../assets/courses/course Icon.png";
import CourseIcon2 from "../assets/courses/course Icon2.png";
import CourseIcon3 from "../assets/courses/course Icon3.png";
import CourseIcon4 from "../assets/courses/course Icon4.png";

const Courses = () => {
  const containerStyle = {
    border: "none",
    boxShadow: "none",
  };

  return (
    <Container fluid className="px-0 courses-container" style={containerStyle}>
      <h2>Courses</h2>

      <section className="card-container">
        <Card
          style={{
            width: "18rem",
            textAlign: "center",
            backgroundColor: "#F29F05",
            marginBottom: "25px",
            border: "none",
          }}
        >
          <Card.Body className="card-styles">
            <Card.Title>Music Bridging Skills Program</Card.Title>
            <Card.Img
              variant="top"
              src={CourseIcon1}
              style={{ height: "118px", width: "auto", padding: "0 20px" }}
            />
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button
              id="card-button"
              style={{ width: 200, height: 60, outline: "none" }}
            >
              Read More
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "18rem",
            textAlign: "center",
            backgroundColor: "#F29F05",
            marginBottom: "25px",
            border: "none",
          }}
        >
          <Card.Body className="card-styles">
            <Card.Title>Live Event Audio Bridging Course</Card.Title>
            <Card.Img
              variant="top"
              src={CourseIcon2}
              style={{ height: "118px", width: "auto", padding: "0 20px" }}
            />
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button
              id="card-button"
              style={{ width: 200, height: 60, outline: "none" }}
            >
              Read More
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "18rem",
            textAlign: "center",
            backgroundColor: "#F29F05",
            marginBottom: "25px",
            border: "none",
          }}
        >
          <Card.Body className="card-styles">
            <Card.Title>Music Industry Practice</Card.Title>
            <Card.Img
              variant="top"
              src={CourseIcon3}
              style={{ height: "118px", width: "auto", padding: "0 20px" }}
            />
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button
              id="card-button"
              style={{ width: 200, height: 60, outline: "none" }}
            >
              Read More
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "18rem",
            textAlign: "center",
            backgroundColor: "#F29F05",
            marginBottom: "25px",
            border: "none",
          }}
        >
          <Card.Body className="card-styles">
            <Card.Title>Sound Production</Card.Title>
            <Card.Img
              variant="top"
              src={CourseIcon4}
              style={{ height: "118px", width: "auto", padding: "0 20px" }}
            />
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button
              id="card-button"
              style={{ width: 200, height: 60, outline: "none" }}
            >
              Read More
            </Button>
          </Card.Body>
        </Card>
      </section>

      <Image
        src={MusicGroup}
        className="course-image"
        alt="group of people with musical instruments in their hands"
        fluid
      />
    </Container>
  );
};

export default Courses;
