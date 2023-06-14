import React from "react";
import { Card } from "react-bootstrap";

function EducationCard({education}) {
  return (<>
    <div className="col-4 px-4" >
    <div className="mb-4 fw-normal">{education.university}</div>
    <div className="d-flex justify-content-between" >
     <div>{education.student}</div>
     <div className="box">{education.date}</div>
    </div>
    </div> 
    <div className="col-8 px-5 ">
      <div className="mb-4">{education.degree}</div>
    <p>
      {education.para}
    </p>
    </div>
   
    </>
  );
}
  

export default EducationCard;