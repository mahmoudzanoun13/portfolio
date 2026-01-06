import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import adepti from "../assets/img/adeptiproject.png";
import taheiya from "../assets/img/taheiya.png";
import scienceToonz from "../assets/img/science-toonz.png";
import crazyDolphin from "../assets/img/crazydolphin.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const UIProjects = [
    {
      title: "Adepti",
      description: "Design & Development",
      imgUrl: adepti,
      github: "https://www.adepti.co",
    },
    {
      title: "Taheiya",
      description: "Design & Development",
      imgUrl: taheiya,
      github: "https://mohaseb.sa",
    },
    {
      title: "Science Toonz",
      description: "Design & Development",
      imgUrl: scienceToonz,
      github: "https://sciencetoonz.com",
    },
    {
      title: "Crazy Dolphin",
      description: "Design & Development",
      imgUrl: crazyDolphin,
      github: "https://mahmoudzanoun13.github.io/crazydolphin",
    },
  ];

  const fullProjects = [];

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
                      <Nav.Item role="button">
                        <Nav.Link eventKey="first">Frontend</Nav.Link>
                      </Nav.Item>
                      <Nav.Item role="button">
                        <Nav.Link eventKey="second">Full Stack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item role="button">
                        <Nav.Link eventKey="third">Backend</Nav.Link>
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
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="color sharp"
      ></img>
    </section>
  );
};
