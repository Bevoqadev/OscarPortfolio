import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headimg from '../../assets/img/header.png'
import {BsBoxArrowInDown }from 'react-icons/bs'

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Fullstack Developer", 'QA Tester'];
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
        <Row >
          <Col xs={12} md={6} xl={6}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>
              {"I'm Klear, "} <span className="wrap">{text} </span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              ratione ipsa a odio excepturi neque, cupiditate architecto ipsum
              debitis at vitae quo, dignissimos quis qui est iusto asperiores
              culpa! Corporis?
            </p>
            <button onClick={() => {}}>Download resume<BsBoxArrowInDown/></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headimg} alt="Header image"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
