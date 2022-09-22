import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/recipe-box-project.jpg";
import projImg2 from "../assets/img/crazydolphin.jpg";
import projImg3 from "../assets/img/smartbrainproject.jpg";
import projImg4 from "../assets/img/instagramproject.jpeg";
import projImg5 from "../assets/img/eye4mediaproject.png";
import projImg6 from "../assets/img/calculatorproject.jpg";
import projImg7 from "../assets/img/robofriendsproject.jpg";
import projImg8 from "../assets/img/redstoreproject.jpg";
import projImg9 from "../assets/img/cardsproject.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const UIProjects = [
    {
      title: "Food Recipe Box",
      description: "Design & Development",
      imgUrl: projImg1,
      github: "https://github.com/mahmoudzanoun13/recipe-box",
    },
    {
      title: "Crazy Dolphin",
      description: "Design & Development",
      imgUrl: projImg2,
      github: "https://github.com/mahmoudzanoun13/crazydolphin",
    },
    {
      title: "Smart Brain",
      description: "Design & Development",
      imgUrl: projImg3,
      github: "https://github.com/mahmoudzanoun13/smart-brain",
    },
    {
      title: "Instagram Clone",
      description: "Design & Development",
      imgUrl: projImg4,
      github: "https://github.com/mahmoudzanoun13/instagram-clone",
    },
    {
      title: "Eye4Media",
      description: "Design & Development",
      imgUrl: projImg5,
      github: "https://github.com/mahmoudzanoun13/eye4media",
    },
    {
      title: "Calculator App",
      description: "Design & Development",
      imgUrl: projImg6,
      github: "https://github.com/mahmoudzanoun13/calculator-app",
    },
    {
      title: "Robo Friends",
      description: "Design & Development",
      imgUrl: projImg7,
      github: "https://github.com/mahmoudzanoun13/robofriends",
    },
    {
      title: "Red Store",
      description: "Design & Development",
      imgUrl: projImg8,
      github: "https://github.com/mahmoudzanoun13/redstore",
    },
    {
      title: "Four Cards",
      description: "Design & Development",
      imgUrl: projImg9,
      github: "https://github.com/mahmoudzanoun13/four-card",
    },
  ];

  const fullProjects = [
    {
      title: "Smart Brain",
      description: "Design & Development",
      imgUrl: projImg3,
      github: "https://github.com/mahmoudzanoun13/smart-brain",
    },
    {
      title: "Instagram Clone",
      description: "Design & Development",
      imgUrl: projImg4,
      github: "https://github.com/mahmoudzanoun13/instagram-clone",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I passionate about learning the latest technologies. I'm
                    seeking to create web apps that serve millions of people
                    with awesome UI/UX and responsive apps to help in their life
                    and make them more efficient and easier.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Front End</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Full Stack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Back End</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {UIProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {fullProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="color sharp"></img>
    </section>
  );
};
