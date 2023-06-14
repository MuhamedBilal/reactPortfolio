import React from "react";
import { Container, Button } from "react-bootstrap";
import  img from '../2.png'

function HeroSection() {
  return (
    // <section >
      
    //   <div className="text-left heroSection p-5 bg-dark text-light mb-5 mx-1">
    //    <span><h1>Welcome to my website</h1>
    //     <p>Learn more about what I can offer you</p>
    //     <Button variant="primary">Contact me</Button>
    //     </span>
    //     <span> <img src={img} style={{maxHeight: '300px'}}></img> </span>
    //     </div>
    // </section>
    // -----------------------------------------------------------
    <div className="text-left heroSection p-5 bg-dark text-light mb-5 mx-1" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
  <span>
    <h1>Welcome to my website</h1>
    <p>Learn more about what I can offer you</p>
    <Button variant="primary">Contact me</Button>
  </span>
  <span style={{flex: 1, marginLeft: '20px'}}>
    <img src={img} style={{maxHeight: '350px', float: 'right'}}></img>
  </span>
</div>
  );
}

export default HeroSection;