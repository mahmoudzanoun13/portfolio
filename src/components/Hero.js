import personalPhoto from "../assets/img/myphoto.jpg";
import resume from "../assets/Mahmoud-Zanoun-FlowCV-Resume-2026-01-07.pdf";

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
              <p className="text-h mb-2-h">
                I'm a Frontend Web Developer with 3 years of hands-on experience building modern web
                applications using React and Next.js. I leverage AI tools to enhance productivity and
                streamline development workflows. I possess strong leadership and communication skills
                with fluency in Arabic and English. As a problem solver and dedicated professional, I'm
                passionate about staying current with the latest frontend technologies and best practices.
                I'm driven to create scalable web applications that serve millions of users, delivering
                exceptional UI/UX through responsive, performant interfaces that make people's lives more
                efficient and enjoyable.
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
