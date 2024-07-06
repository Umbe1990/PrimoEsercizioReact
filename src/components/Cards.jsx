import { Button, Card, Col } from "react-bootstrap";
import { useState } from "react";
import   './Cards.css'

function Cards({ book }) {
  const [counter, setcounter] = useState(0);
  const[color, setColor]=useState(false)
  const change = ()=>{
    setColor(!color)
  }
  const increment = () => {
    setcounter(counter + 1);
  }

    //console.log(counter};
  //console.log(book)
  return (
    <Col md={4}>
      <Card onClick={change} className={color?'h-100 classColor':'h-100'}>
        <Card.Img src={book.img} />
        <Card.Body>
          <Card.Text>{book.price} Euro</Card.Text>

          <Card.Title>{book.title}</Card.Title>

          <Button onClick={increment} variant="primary">
            Quantita {counter}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;