import React from "react";
import { Col } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

const ProjectsCard = ({ title, description, imgUrl, gitUrl, site }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {gitUrl ? (
            <a href={gitUrl}  target="_blank" rel="noreferrer">
              <BsGithub color="white" />
            </a>
          ) : (
            ""
          )}
          {site ? (
            <a href={site} target="_blank" rel="noreferrer">
              <BiLinkExternal color="white" />
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </Col>
  );
};

export default ProjectsCard;
