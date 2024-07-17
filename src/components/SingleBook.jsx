import { Button, Card, Col } from "react-bootstrap";
import { useContext, useState } from "react";
import './SingleBook.css'


import { ThemeContext } from "../context/ThemeContextProvider";//importato per cambiare sfondo delle card
import { Link } from "react-router-dom";



  //const [select, setColor] = useState(null)  //diventa NULL perche selezioniamo asin libro
function Cards({ book,change,select}) {
  const{theme}=useContext(ThemeContext) 
  const [counter, setcounter] = useState(0);
  const increment = () => {
    setcounter(counter + 1);
  }

  //console.log(counter};
  //console.log(book)
  return (
    <Col md={4}>
      <Card style={{width: "18rem"}} className={theme==='light'? 'mb-3':'text-light bg-danger'} >
        <Card.Img src={book.img} onClick={()=> change(book.asin)} className={select === book.asin ? 'h-100 classColor' : 'h-100'} />
        <Card.Body>
          <Card.Text>{book.price} Euro</Card.Text>

          <Card.Title>{book.title}</Card.Title>

        {/*   {/* <Button onClick={increment} variant="primary">
            Quantita {counter} }
          </Button> */}
          <Link to={`/bookdetails/${book.asin}`} variant="primary"> Dettaglio Libro </Link>
           
          
          
        </Card.Body>

      </Card>



    </Col>
  );
}

export default Cards;