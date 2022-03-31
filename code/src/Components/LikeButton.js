import React from "react"
// RENDERING LIKE BUTTON AND HOW MANY LIKES A MESSAGE HAS GOTTEN
const LikeButton = ({ thought, messageID, onLikeMessage, time }) => {

  return (
    <div className="like-wrapper">
      <div>
        <button 
          className="like-button" 
          onClick={() => onLikeMessage(messageID)}>
          <span role="img" aria-label="like emoji">💖</span></button>x{thought.hearts}
        </div>
        <p className="date">{time}</p>
    </div>
  )

}

export default LikeButton;