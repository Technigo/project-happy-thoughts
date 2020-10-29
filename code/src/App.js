import React, { useEffect, useState } from 'react';

import NewComment from './components/create/NewComment';
import Comment from './components/preview/Comment';
import { CommentUrl } from './URLS'

export const App = () => {
  const [comments, setComments] = useState([]);
  const [error, setError]= useState("")

  const fetchComments = () => {
    fetch(CommentUrl)
      .then((res) => res.json())
      .then((data) => setComments(data.slice(0,10)))
  }

  useEffect(() => {
    fetchComments();
  }, []);

    const postComment = newComment =>{
      fetch(CommentUrl, {
        method:"POST",
        headers:{ "Content-Type": "application/json" },
        body: JSON.stringify({ message: newComment })
      })
      .then((response) => {
        if (response.ok) {
          fetchComments();
          setError('')
        } else {
         setError("Please write in text field")
        }
      })
    }

    const handleLiked = (comment) => {
      fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${comment._id}/like`,{
             method:"POST",
             headers:{ "Content-Type": "application/json" },
             body: "",
         })
         .then(()=>fetchComments())
    }

  return (
    <div className="container">
      <NewComment onCommentChange={postComment} error={error}/>

      {comments.map((comment)=>(
        <Comment comment={comment} onLiked={()=> handleLiked(comment)} key={comment._id} />
      ))}

    </div>
  );
};
