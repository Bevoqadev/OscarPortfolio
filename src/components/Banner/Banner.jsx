import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headimg from "../../assets/img/header.png";
import { BsBoxArrowInDown } from "react-icons/bs";
import TrackVisibility from "react-on-screen";
import resume from "./Oscar_Anchabal_CV.pdf";
import "animate.css";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["QA Tester", "Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(300 - Math.random() + 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    }

    setIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my portfolio</span>
                  <h1>
                    {"I'm Oscar, "} <span className="wrap">{text} </span>
                  </h1>
                  <p>
                  I'm a beginner software developer and QA tester. I'm studying at Plataforma5. I am ready for my first work experience in the IT world and to keep learning new technologies and improving my skills. 
                  </p>
                  <a download href={resume} className="text-decoration-none">
                    <button>
                      Download resume
                      <BsBoxArrowInDown />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headimg} alt="Header" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
