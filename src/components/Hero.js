import personalPhoto from "../assets/img/myphoto.jpg";
import resume from "../assets/resume.pdf";

export const Hero = () => {
  return (
    <section id="hero-h">
      <div className="container-h">
        <h2 className="h2-h">ABOUT ME</h2>
        <div className="hero-wrapper-h">
          <div className="col-h">
            <img src={personalPhoto} alt="personal pic" className="image-h" />
          </div>
          <div className="col-h">
            <div className="text-wrapper-h">
              <p className="text-h">
                I'm Frontend Web Developer. Possess strong leadership and
                communication skills with fluency in Arabic and English. I'm a
                problem solver, hard worker, and passionate about learning the
                latest technologies. I'm seeking to create web apps that serve
                millions of people with awesome UI/UX and responsive apps to
                help in their life and make them more efficient and easier.
              </p>
              <p className="text-h mb-2-h">
                And here is some of my skills: HTML, CSS, JavaScript, Reactjs,
                Nodejs, Expressjs, PostgreSQl, Postman, Git, GitHub and Heroku.
              </p>
              <a
                rel="noreferrer"
                target="_blank"
                className="btn-h"
                href={resume}
              >
                <span className="btn-item-h">View Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
