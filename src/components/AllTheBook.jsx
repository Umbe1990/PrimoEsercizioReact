import books from "./data/fantasy.json";
import Cards from "./SingleBook";
import { Row, Container,InputGroup,Form } from "react-bootstrap";
import { useState } from "react";

//console.log({ books });
function AllTheBook() {
    const[search,setSearch]= useState('')
    const[libriFiltrati, setLibriFiltrati]=useState(books)
    const filter =(e)=>{
      setSearch(e.target.value)
      const filtrati=books.filter((b)=>{
        return e.target.value.toLowerCase()===''? b : b.title.toLowerCase().includes(e.target.value.toLowerCase())|| b.asin.includes(e.target.value)
  })
  setLibriFiltrati(filtrati)
    }
    //console.log(search)
  return (
    <Container>
        <>
      <InputGroup className="mb-3">
        
        <Form.Control onChange={filter} aria-label="Text input with checkbox"placeholder="
        inserisci libro" />
      </InputGroup>
     
    </>
      <Row>
        {libriFiltrati.map((b) => (
          <Cards key={b.asin} book={b} />
        ))}
      </Row>
    </Container>
  );
}
export default AllTheBook;