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
                JavaScript, ES6, TypeScript, HTML5, CSS3, SCSS, Reactjs,
                ContextAPI, Redux, Nextjs, RESTFUL APIs, Axios, MUI, BootStrap,
                Tailwindcss, Styled-Component, Nodejs, Expressjs, PostgreSQL,
                AJAX, JSON, Postman, Npm, Yarn, Webpack, TDD, Unit Testing,
                Integration Tests, End To End Tests, Jest, CI/CD, Git, GitHub,
                Firebase, Heroku, Netlify, Vercel, Problem Solving.
                <br />
                Work Hard, Time Management, Leadership, Work Under Pressure,
                Communication, Patient, Ambition.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="95 percent" />
                  <h5>Frontend Developer</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="80 percent" />
                  <h5>Web Designer</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="90 percent" />
                  <h5>Backend Developer</h5>
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
