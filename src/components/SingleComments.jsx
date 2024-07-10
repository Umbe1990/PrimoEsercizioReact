import {ListGroup,Button} from 'react-bootstrap';

function SingleComments({comment,loadComments}) {

    const handleClearComment = async ()=>{
       try {const response= await  fetch(`https://striveschool-api.herokuapp.com/api/comments/`+ comment._id,{
          headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhhYWJmYmQzOTNmYzAwMTU5NzNmNGMiLCJpYXQiOjE3MjAzNjQwMjgsImV4cCI6MTcyMTU3MzYyOH0.yjiPrGR-5KrfnEent8KV-w_Kx0DC4yliIzkVJsOdx1Y"
              },
          method: "delete",
          
          }
        ) 
        if(response.ok){
          loadComments()
          alert('commento cancellato')
        }}
        catch (error) {
          alert('errore generico')
      }
        
        
        
      }
      const handleModificComment = async ()=>{
        await  fetch(`https://striveschool-api.herokuapp.com/api/comments/`+ comment._id,{
          headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhhYWJmYmQzOTNmYzAwMTU5NzNmNGMiLCJpYXQiOjE3MjAzNjQwMjgsImV4cCI6MTcyMTU3MzYyOH0.yjiPrGR-5KrfnEent8KV-w_Kx0DC4yliIzkVJsOdx1Y"
              },
          method: "PUT",
          body: JSON.stringify()
          
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
            <Button onClick={handleModificComment} variant="secondary">Modifica</Button>
            <Button onClick={handleClearComment} variant="danger">Cancella comment</Button>
            
            

          
            
            
        </>
    )
}

export default SingleComments



/* const handleSaveComment = async ()=>{
    await  fetch("https://striveschool-api.herokuapp.com/api/comments/",{
      headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhhYWJmYmQzOTNmYzAwMTU5NzNmNGMiLCJpYXQiOjE3MjAzNjQwMjgsImV4cCI6MTcyMTU3MzYyOH0.yjiPrGR-5KrfnEent8KV-w_Kx0DC4yliIzkVJsOdx1Y"
          },
      method: "POST",
      body: JSON.stringify(formValue)
      }
    ) 
    
    loadComments()
    
 */  