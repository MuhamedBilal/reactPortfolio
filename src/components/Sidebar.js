import React from "react";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import img from '../2.png'

function Sidebar() {
  return (
    <div className="h-100 p-4 bg-dark text-light sidebar">
      <div className="text-center mb-2">
        <img src={img} className="circleimg mb-3"></img>
        <h5 className="mb-3">MB</h5>
        <p className="text-light mb-3 ">MEARN Stack Developer</p>
        <div className="mb-3 " >
          <a className=" mx-2 fs-2 circle text-light" href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>

          <a className=" mx-2 fs-2 circle text-light" href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a className=" mx-2 fs-2 circle text-light" href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        
      </div>
      

      <div className="p-3 ">
      <hr />
        <div>
       
          <div className="d-flex justify-content-between align-items-center">
            <span className="box mb-3">Age</span>
            <span>26</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span className="box mb-3">residence</span>
            <span>26</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span className="box mb-3">residence</span>
            <span>26</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span className="box mb-3">residence</span>
            <span>26</span>
          </div>
        </div>
        <hr />
        <div className="mb-3">
          <h3 className="mb-3">Langs</h3>
          <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span> bangla</span>
           <span>100%</span>
          </div>
          <div
            className="progress border border-warning p-1 bg-dark"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar bg-warning" style={{ width: "100%" }}>
             
            </div>
          </div>
          </div>
          <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span> bangla</span>
           <span>100%</span>
          </div>
          <div
            className="progress border border-warning p-1 bg-dark"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar bg-warning" style={{ width: "100%" }}>
             
            </div>
          </div>
          </div>
          <div className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span> bangla</span>
           <span>100%</span>
          </div>
          <div
            className="progress border border-warning p-1 bg-dark"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar bg-warning" style={{ width: "100%" }}>
             
            </div>
          </div>
          </div>

        </div>
        <hr className="my-3" />

        <Button variant="primary" className="mt-3 w-100 btn btn-warning text-light">
          <FontAwesomeIcon icon={faDownload}  />
          Download CV
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
