import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/mahmoud-zanoun-517b14222"
              >
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/mahmoudzanoun13"
              >
                <img src={navIcon2} alt="github" />
              </a>
            </div>
            <p>Copyright © {new Date().getFullYear()}. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
