import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Background() {
  return (
    <Card style={{ backgroundImage: 'url(path/to/instacart-background.jpg)', backgroundSize: 'cover' }}>
      <Card.Body>
        <Card.Title>Order groceries for delivery or pickup today</Card.Title>
        <Card.Text>
          Explore a wide variety of products and enjoy convenient shopping options.
        </Card.Text>
        <Button variant="primary">Start Shopping</Button>
      </Card.Body>
    </Card>
  );
}

export default Background;
