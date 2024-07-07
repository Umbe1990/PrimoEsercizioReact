import SingleComments from './SingleComments'
import ListGroup from 'react-bootstrap/ListGroup';
function CommentList({comments}){
return(
    <ListGroup>
        {comments.map((c)=> <SingleComments key={c._id} comment={c}/>) }
    </ListGroup>

   
    
)
} 
export default CommentList