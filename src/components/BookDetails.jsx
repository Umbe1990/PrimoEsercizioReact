
import { useParams } from "react-router";
import books from "./data/fantasy.json"
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import CommentArea from "./CommentArea";


function BookDetails() {
    const { asin } = useParams()
    const [book, setBook] = useState(books.find(book => book.asin === asin))


    return (

        <>
            <div className="d-flex">
                <div>
                    <Card style={{ width: "15rem" }} >
                        <Card.Img variant="top" src={book.img} />
                        <Card.Body>
                            <Card.Title>Title:{book.title}</Card.Title>
                            <Card.Text>
                               Price: {book.price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <CommentArea asin={asin}/>
                </div>

            </div>

        </>
    )
}



export default BookDetails