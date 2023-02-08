import { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button} from "react-bootstrap";
/* import { HashLink } from 'react-router-hash-link'; */
import logo from "../../assets/img/logo.svg";
import {BsGithub} from 'react-icons/bs'
import {SlSocialLinkedin } from 'react-icons/sl'


const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      }
      setScrolled(false);
    };
    window.addEventListener("scroll", onScroll);

    return ()=> window.removeEventListener('scroll',onScroll)
  }, [scrolled]);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" width={100} height={100}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
             <BsGithub color="white"/>
              </a>
              <a href="#">
                <SlSocialLinkedin color='white'/>
              </a>
            </div>
          {/*  <HashLink to="#connect"> */}
              <button className="vvd">
                <span>Let's Connect</span>
              </button>
      {/*       </HashLink>  */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
