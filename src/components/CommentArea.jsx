import { useEffect, useState } from "react"
import CommentList from "./CommentList"
import AddComments from "./AddComments"


function CommentArea({asin}) {
    //console.log(asin)
    const [comments, setComments] = useState([])
    const loadComments = async () => {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhhYWJmYmQzOTNmYzAwMTU5NzNmNGMiLCJpYXQiOjE3MjAzNjQwMjgsImV4cCI6MTcyMTU3MzYyOH0.yjiPrGR-5KrfnEent8KV-w_Kx0DC4yliIzkVJsOdx1Y"
            }
        })
        const data = await response.json()
        //console.log(data)
        setComments(data)
    }
    useEffect(() => {
        loadComments()
    }, [])


    return (
        <>
        <AddComments asin={asin} loadComments={loadComments}></AddComments>
        <CommentList comments={comments} loadComments={loadComments}/>
        </>

    )
}
export default CommentArea