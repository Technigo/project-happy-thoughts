import React from "react"

const LikeButton = ({ thought, messageID, onLikeMessage }) => {

  return (
    <div className="like-wrapper">
    <button 
      className="like-button" 
      onClick={() => onLikeMessage(messageID)}>
        <span role="img" aria-label="like emoji">💖</span></button>x{thought.hearts}
    </div>
  )

}

export default LikeButton;