
import { useState } from "react";
import Cards from "./SingleBook";
import { Row, Container, Col} from "react-bootstrap";
import CommentArea from "./CommentArea";

//console.log({ books });
function AllTheBook({libriFiltrati}) {
  
  const [select, setColor] = useState(null)  //diventa NULL perche selezioniamo asin libro
  const change = (asin) => {
    setColor(asin)
  }
    
    //console.log(search)
  return (
    <Container>
        <>
      <Row>
        <Col md={8}>
        <Row>
        {libriFiltrati.map((b) => (
          <Cards key={b.asin} book={b} select={select} change={change} />
        ))}
      </Row>
        </Col>
        <Col md={4}>
        { select && <CommentArea asin={select}/> }
        </Col>
      </Row>
     
    </>
      
    </Container>
  );
}
export default AllTheBook;