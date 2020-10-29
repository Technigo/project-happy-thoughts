import React from 'react';
import moment from "moment";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Comment = ({comment, onLiked}) => {  
  return (
    <div className="container-comment">
        <p>
          {comment.message} 
        </p>
        <div className="container-comment__details">
          <span>
          <button onClick={onLiked} type="button" className={comment.hearts > 0 ? "container-comment__button--color-rose" : "container-comment__button"}>
          <FontAwesomeIcon icon={faHeart} color="red" />
           </button> 
           <span className="container-comment__heart"> x {comment.hearts}</span>
           </span>
          <span className="container-comment__time">
          {moment(comment.createdAt).fromNow()}
          </span>
        </div>  
    </div>
  )
};

export default Comment;
