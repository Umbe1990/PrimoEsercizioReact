
import Cards from "./SingleBook";
import { Row, Container} from "react-bootstrap";


//console.log({ books });
function AllTheBook({libriFiltrati}) {
    
    //console.log(search)
  return (
    <Container>
        <>
      
     
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