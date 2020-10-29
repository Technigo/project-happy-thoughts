import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const NewComment = ({onCommentChange}) => {
  const[newComment, setNewComment]=useState("");

  const handleSubmit=event=>{
    event.preventDefault ();
    onCommentChange(newComment)
    setNewComment ("")
  }



  return (
    <div className="new-comment">What's making you happy right now?
      <form onSubmit ={handleSubmit}>
        <input 
          type="text" 
          required
          value= {newComment}
          onChange={event => setNewComment(event.target.value)}
          className="new-comment__text" />
        <button 
          type="submit" value="Add Comment"className="new-comment__button"><FontAwesomeIcon icon={faHeart} color="red" /> Send Happy Thoughts <FontAwesomeIcon icon={faHeart} color="red" /></button>
      </form>
    </div>
  )
};

export default NewComment;
