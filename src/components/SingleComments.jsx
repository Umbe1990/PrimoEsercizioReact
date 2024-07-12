import { useEffect, useState } from 'react';
import { ListGroup, Button, Form, Col,Alert } from 'react-bootstrap';

function SingleComments({ comment, loadComments,setAlert }) {

  const handleClearComment = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/` + comment._id, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhhYWJmYmQzOTNmYzAwMTU5NzNmNGMiLCJpYXQiOjE3MjAzNjQwMjgsImV4cCI6MTcyMTU3MzYyOH0.yjiPrGR-5KrfnEent8KV-w_Kx0DC4yliIzkVJsOdx1Y"
        },
        method: "delete",

      }
      )
      if (response.ok) {
        loadComments()
       setAlert({
        success: true,
        message: 'commento cancellato'
       })
      }
    }
    catch (error) {
      setAlert({
        success: false,
        message: 'errore generico'
       })
    }



  }

  //creazione stato per far uscire form

  const [isEdithing, setisEdithing] = useState(false)
  const [alertPut, setAlertPut] = useState(null//cambia stato per alert commento inserito della PUTTTTTTTTT

  )
  
  const [formValue, setformValue] = useState([])
  //funzione per cambiare lo stato 
  const editForm = () => {
    setisEdithing(!isEdithing)
  }
  useEffect (()=>{
    const inizialiState = {
      rate: comment.rate,
      comment: comment.comment,
      elementId: comment.commentid
      //usato use effetc per 
  
    }
    setformValue(inizialiState)
  },[comment])
  //creazione funione per cambiare il valore
  const handleChange = (event) => {  //funzione per prendere input

    setformValue({ ...formValue, [event.target.name]: event.target.value })
  }



  const handleModificComment = async () => {
    if(formValue.rate>5 || formValue.rate<1){ ///controllo x rate valore
      alert('rate errato')
      return // fare return per non far partite put
    }
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/` + comment._id, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhhYWJmYmQzOTNmYzAwMTU5NzNmNGMiLCJpYXQiOjE3MjAzNjQwMjgsImV4cCI6MTcyMTU3MzYyOH0.yjiPrGR-5KrfnEent8KV-w_Kx0DC4yliIzkVJsOdx1Y"
        },
        method: "PUT",
        body: JSON.stringify(formValue)
      }
      )
      if (response.ok) {
        loadComments()
       // setformValue(inizialiState)
        setisEdithing(false)

        setAlertPut({
          success: true,
          message: 'commento modificato'

      })
      }
      else {
        //alert('errore nella modifica')
        setAlertPut({
          success: false,
          message: 'errore nella modifica'

      })

      }
    }
    catch (error) {
      //alert('errore generico')
      setAlertPut({
        success: false,
        message: 'errore generico'

    })
    }
  }

  //console.log(id)
  return (
    <>
    {alertPut && <Alert key={alertPut.success ? 'success' : 'danger'} variant={alertPut.success ? 'success' : 'danger'} onClose={() => setAlertPut(null)} dismissible>{alertPut.message}</Alert>}
      {isEdithing  &&<Form className='border border-dark'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Rate 1 of 5</Form.Label>
                    <Form.Control onChange={handleChange}  type="number" placeholder="Rate" min='1' max='5' name='rate' value={formValue.rate} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Comment</Form.Label>
                    <Form.Control onChange={handleChange} as="textarea" rows={3} name='comment' value={formValue.comment} />

                </Form.Group>
                <Button onClick={handleModificComment}  variant="primary">Send Comment</Button>

            </Form> }
      <Col className='d-flex'>
        <div>
          <ListGroup.Item>rate {comment.rate}</ListGroup.Item>
          <ListGroup.Item>comment {comment.comment}</ListGroup.Item>
          <ListGroup.Item>author {comment.author}</ListGroup.Item>
        </div>
        <div className='d-flex flex-column ms-3' >
          <Button onClick={editForm} variant="secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
          </svg></Button>
          <Button onClick={handleClearComment} variant="danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg></Button>
        </div>
      </Col>








    </>
  )
}

export default SingleComments



