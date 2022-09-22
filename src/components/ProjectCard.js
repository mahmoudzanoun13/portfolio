import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, github }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project pic" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a
            rel="noreferrer"
            target="_blank"
            className="btn-h center-btn"
            href={github}
          >
            <span className="btn-item-h">View</span>
          </a>
        </div>
      </div>
    </Col>
  );
};
