import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeroSection from "./components/HeroSection";
import EducationSection from "./components/EducationSection";
import ServicesSection from "./components/ServicesSection";
import Sidebar from "./components/Sidebar";
import servicesData from "./data/servicesData";
import educationData from "./data/educationData";
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="container-fluid bg-black p-3">
    <div className="row" >
      <div className="col-sm-3" >
      <Sidebar/>
      </div>
		 <div className="col-sm-9" >
      <HeroSection />
      <ServicesSection servicesData={servicesData} />
      <EducationSection educationData={educationData} />
     </div>
    </div>
    </div>
  );
}

export default App;