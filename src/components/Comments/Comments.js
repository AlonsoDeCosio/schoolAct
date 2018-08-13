import React from 'react'
import Comment from './Comment/Comment'

const rank = (props) => props.comment.map((comment, index) => {
    return <Comment
        key={comment.id}
        user={comment.user}
        timestamp={comment.timestamp}
        comment={comment.comment} 
        attachment={comment.attachment}/>
});

export default rank;