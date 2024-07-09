import {ListGroup,Button} from 'react-bootstrap';

function SingleComments({ comment,loadComments}) {

    const handleClearComment = async ()=>{
        await  fetch(`https://striveschool-api.herokuapp.com/api/comments/`+ comment._id,{
          headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhhYWJmYmQzOTNmYzAwMTU5NzNmNGMiLCJpYXQiOjE3MjAzNjQwMjgsImV4cCI6MTcyMTU3MzYyOH0.yjiPrGR-5KrfnEent8KV-w_Kx0DC4yliIzkVJsOdx1Y"
              },
          method: "delete",
          
          }
        ) 
        
        loadComments()
        
      }
    //console.log(id)
    return (
        <>
            <ListGroup.Item>rate {comment.rate}</ListGroup.Item>
            <ListGroup.Item>comment {comment.comment}</ListGroup.Item>
            <ListGroup.Item>author {comment.author}</ListGroup.Item>
            <Button onClick={handleClearComment} variant="danger">Danger</Button>
            
            

          
            
            
        </>
    )
}

export default SingleComments