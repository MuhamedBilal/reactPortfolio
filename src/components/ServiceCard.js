import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServiceCard({ title, description, icon }) {
  return (
    
    <Card className="bg-dark text-light mb-3">
      <Card.Body>
        <FontAwesomeIcon icon={icon} className="mr-3" />
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;