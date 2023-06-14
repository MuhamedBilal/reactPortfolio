import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "./ServiceCard";

function ServicesSection({ servicesData }) {
  return (
    <section className="mb-5" >
       <h2 className="text-light text-center mb-4">Services</h2>
        <Row >
          {servicesData.map(({ title, description, icon }) => (
            <Col md={4} key={title}>
              <ServiceCard
                title={title}
                description={description}
                icon={icon}
              />
            </Col>
          ))}
        </Row>
     
    </section>
  );
}

export default ServicesSection;