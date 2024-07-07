import ListGroup from 'react-bootstrap/ListGroup';

function SingleComments({ comment}) {

    //console.log(id)
    return (
        <>
            <ListGroup.Item>rate {comment.rate}</ListGroup.Item>
            <ListGroup.Item>comment {comment.comment}</ListGroup.Item>
            <ListGroup.Item>author {comment.author}</ListGroup.Item>
            

          
            
            
        </>
    )
}

export default SingleComments