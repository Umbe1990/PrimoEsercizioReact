import SingleComments from './SingleComments'
import ListGroup from 'react-bootstrap/ListGroup';
function CommentList({comments,loadComments}){
return(
    <ListGroup>
        {comments.map((c)=> <SingleComments key={c._id} comment={c} loadComments={loadComments}/>) }
    </ListGroup>

   
    
)
} 
export default CommentList