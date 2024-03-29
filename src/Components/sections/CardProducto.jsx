import React from "react";
import { Card,Button, Col } from "react-bootstrap";

const CardProducto = ({ producto}) => {
    return (

    <Col xs={12} md={6}>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>
            <span className="mb-2">
          {producto.description}
            </span>
            <span className="fs-4">
                {producto.category}
            </span>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
    </Col>
    );
};

export default CardProducto ; 