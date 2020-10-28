import React from 'react' 
import './happyHeart.css'

export const HappyHeart = ({onLiked, heart, messageId}) => {
  const handleClick = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${messageId}/like`, {
      method: 'POST', 
      body: '',
      headers: { 'Content-Type': 'application/json' }
    }).then(() => onLiked(messageId))
  }

    return(
      <div className="heart-wrapper">
        <button 
          className="heart-button"
          onClick={handleClick}
          style={{ background: heart > 0 ? "#FFADAD" : "#EAEAEA"}}
        >
          <span role="img" aria-label="heart">{'❤️'}</span>
        </button>
        <p className="heart-text">x {heart}</p>
      </div>
    )
}
