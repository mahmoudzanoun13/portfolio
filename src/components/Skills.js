import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                JavaScript, ECMAScript(ES6), HTML5, CSS3, SCSS, Reactjs, Redux,
                BootStrap, Tailwindcss, Async, Styled-Component, Context,
                RESTFUL APIs, Nodejs, Expressjs, PostgreSQL, AJAX, JSON,
                Postman, Npm, Yarn, Webpack, Modules, TDD, Unit Testing,
                Integration Tests, End TO End Tests, Jest, CI/CD, Git, Github,
                Firebase, Heroku, Netlify, ComputerScience,
                InformationTechnology, ProblemSolving.
                <br />
                WorkHard, TimeManagement, Leadership, WorkUnderPressure,
                Communication, Patient, Ambition.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="95 percent" />
                  <h5>Front End Developer</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="80 percent" />
                  <h5>Web Design</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="90 percent" />
                  <h5>Back End Developer</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="color sharp"
      />
    </section>
  );
};
