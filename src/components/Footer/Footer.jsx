import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import {BsGithub} from 'react-icons/bs'
import {SlSocialLinkedin } from 'react-icons/sl'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/Bevoqadev"  target="_blank" rel="noreferrer">
               <BsGithub/>
              </a>
              <a href="https://www.linkedin.com/in/oscar-anchabal/"  target="_blank" rel="noreferrer">
                <SlSocialLinkedin />
              </a>
            </div>
            <p><AiOutlineCopyrightCircle/>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
