import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faComment as faCommentSolid } from '@fortawesome/free-solid-svg-icons'
import './commentsbutton.css'

export const CommentsButton = ({ handleClick, comments }) => {

  return (
    <button className="comment-bubble-button" type="button" onClick={handleClick}>
      <FontAwesomeIcon icon={comments > 0 ? faCommentSolid : faComment} className="comment-emoji" role="img" aria-label="comment bubble" />
    </button>
  )
}