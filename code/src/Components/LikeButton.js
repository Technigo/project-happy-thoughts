import React from "react"
// RENDERING LIKE BUTTON AND HOW MANY LIKES A MESSAGE HAS GOTTEN
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