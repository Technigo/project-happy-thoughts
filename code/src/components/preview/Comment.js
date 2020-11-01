import React from 'react';
import moment from "moment";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Comment = ({ comment, onLiked }) => {
  return (
    <div className="preview-comment">
      <p>{comment.message}</p>
      <div className="preview-comment__details">
        <span>
          <button
            onClick={onLiked}
            type="button"
            className={`preview-comment__button ${comment.hearts > 0 ? "preview-comment__button--color-rose" : ""}`}>
            <FontAwesomeIcon icon={faHeart} color="red" />
          </button>
          <span className="preview-comment__heart"> x {comment.hearts}</span>
        </span>
        <span className="preview-comment__time">
          {moment(comment.createdAt).fromNow()}
        </span>
      </div>
    </div>
  )
};

export default Comment;
