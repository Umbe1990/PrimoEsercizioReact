import { useState } from 'react';
import SingleComments from './SingleComments'
import {ListGroup,Alert} from 'react-bootstrap';

function CommentList({comments,loadComments}){
    const [alert, setAlert] = useState(null//cambia stato per alert commento inserito

    )
return(
    <>
        {alert && <Alert key={alert.success ? 'success' : 'danger'} variant={alert.success ? 'success' : 'danger'} onClose={() => setAlert(null)} dismissible>{alert.message}</Alert>}
   
    <ListGroup>
        {comments.map((c)=> <SingleComments key={c._id} comment={c} loadComments={loadComments} setAlert={setAlert} />) }
    </ListGroup>
    </>
   
    
)
} 
export default CommentList