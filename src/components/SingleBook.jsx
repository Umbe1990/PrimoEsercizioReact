import { Button, Card, Col } from "react-bootstrap";
import { useState } from "react";
import './SingleBook.css'
import CommentArea from "./CommentArea";


function Cards({ book }) {
  const [counter, setcounter] = useState(0);
  const [select, setColor] = useState(false)
  const change = () => {
    setColor(!select)
  }
  const increment = () => {
    setcounter(counter + 1);
  }

  //console.log(counter};
  //console.log(book)
  return (
    <Col md={4}>
      <Card style={{width: "22rem"}} className="mb-3" >
        <Card.Img src={book.img} onClick={change} className={select ? 'h-100 classColor' : 'h-100'} />
        <Card.Body>
          <Card.Text>{book.price} Euro</Card.Text>

          <Card.Title>{book.title}</Card.Title>

          <Button onClick={increment} variant="primary">
            Quantita {counter}
          </Button>
          {select && <CommentArea asin={book.asin}/>}
        </Card.Body>

      </Card>



    </Col>
  );
}

export default Cards;