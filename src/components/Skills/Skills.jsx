import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import color from '../../assets/img/color-sharp.png'
import TrackVisibility from "react-on-screen";
import "animate.css";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  }

const Skills = () => {
  return (
 <section className='skill' id='skills'>
    <Container>
<Row>
<Col>
<div className='skill-bx'>
  <TrackVisibility>
  {({isVisible})=>
   <div className={isVisible? 'animate__animated animate__pulse':''}>
   <h2>
       Skills
   </h2>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt vero reiciendis iusto assumenda beatae eius labore praesentium dolor repellat. Nobis tempore nulla ad voluptate quas velit, laudantium officia consectetur?</p>
     </div>
  }
 
  </TrackVisibility>
<Carousel className='skill-slider' responsive={responsive} infinite={true}>
    <div className='item'>
        <img src={''} alt='skill1'/>
        <h5>Web dev</h5>
    </div>
    <div className='item'>
        <img src={''} alt='skill1'/>
        <h5>Web dev</h5>
    </div>
    <div className='item'>
        <img src={''} alt='skill1'/>
        <h5>Web dev</h5>
    </div>
    <div className='item'>
        <img src={''} alt='skill1'/>
        <h5>Web dev</h5>
    </div>
    <div className='item'>
        <img src={''} alt='skill1'/>
        <h5>Web dev</h5>
    </div>
</Carousel>
</div>
</Col>
</Row>
    </Container> 
    <img src={color} alt="" className='background-image-left'/>
 </section>
  )
}

export default Skills