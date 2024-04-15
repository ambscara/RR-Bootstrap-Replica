import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Background () {
  return (
<Card style={{ backgroundImage: 'url(path/to/instacart-background.jpg)' }}> 
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         Order groceries for delivery or pickup today
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Background;