import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function AddComments({ asin, loadComments }) {
    const initialFormSate = {
        rate: '',
        comment: '',
        elementId: asin
    }
    //asin passato come prop
    const [formValue, setFormValue] = useState(initialFormSate)
    const [alert, setAlert] = useState(null//cambia stato per alert commento inserito

    )






    const handleChange = (event) => {  //funzione per prendere input

        setFormValue({ ...formValue, [event.target.name]: event.target.value })
        //prende il valore value e aggiorna array
        /* let a= 'ciao'
        let b= a
        a= 'a tutti'
        console.log(b) = 'ciao'
        */
        /*        let a={asin: 'patrizia'} per avre copia precisa si fa {...} anche per gli array
               let b= a
               a={nome:'michele'}
               console.log(b)  = {nome:'michele'} */


    }
    const handleSaveComment = async () => {
        try {
            const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhhYWJmYmQzOTNmYzAwMTU5NzNmNGMiLCJpYXQiOjE3MjAzNjQwMjgsImV4cCI6MTcyMTU3MzYyOH0.yjiPrGR-5KrfnEent8KV-w_Kx0DC4yliIzkVJsOdx1Y"
                },
                method: "POST",
                body: JSON.stringify(formValue)
            }
            )
            if (response.ok) {
                loadComments()
                setFormValue(initialFormSate)
                setAlert({
                    success: true,
                    message: 'commento inserito'

                })
            } else { //alert('inserisci un rate 1 a 5')
                setAlert({
                    success: false,
                    message: 'inserisci un rate 1 a 5'

                })
            }

        }
        catch (error) {
            //alert('errore generico')
            setAlert({
                success: false,
                message: 'errore generico'
            })
        }
        setTimeout(() => {
            setAlert(null)  //set per tempo x per far sparire alert
        }, 2000)
    }

    return (
        //{ alert modificato } onClose x chiudere alert

        <>


            {alert && <Alert key={alert.success ? 'success' : 'danger'} variant={alert.success ? 'success' : 'danger'} onClose={() => setAlert(null)} dismissible>{alert.message}</Alert>}
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Rate 1 of 5</Form.Label>
                    <Form.Control onChange={handleChange} type="number" placeholder="Rate" min='1' max='5' name='rate' value={formValue.rate} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Comment</Form.Label>
                    <Form.Control onChange={handleChange} as="textarea" rows={3} name='comment' value={formValue.comment} />

                </Form.Group>
                <Button onClick={handleSaveComment} variant="primary">Send Comment</Button>

            </Form>
        </>
    )
}


export default AddComments


// //passare come prop da commentArea a commentList e poi da commentList ad AddComment la funzione loadComments e resettare i valori del form. 

