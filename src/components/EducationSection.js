import React from "react";
import { Container } from "react-bootstrap";
import EducationCard from "./EducationCard";


function EducationSection({ educationData }) {
  return (
    <section className="educationSection">
       <h2 className="text-light text-center mb-4">Education</h2>

      <Container className="heroSection p-5 bg-dark text-light">
       
      
        {educationData.map(education=>{
          return(
            <>
            
            <div className="row mb-3" key={education.degree}>
              <EducationCard education={education}/>
               </div>
               {education.bool ? <hr/> : ""} 
               </>
          )
        } )}
      
 
      </Container>
    </section>
  );
}

export default EducationSection;

