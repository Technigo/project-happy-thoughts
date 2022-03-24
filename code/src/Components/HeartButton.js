import React from "react"

const HeartButton = ({ thought, messageID, fetchThoughts }) => {
  const sendLike = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    }
  
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${messageID}/like`, options)
    .then(res => res.json())
    .then(() => fetchThoughts())
  }

  return (
    <div className="like-wrapper">
    <button 
      className="like-button" 
      onClick={sendLike}>
        <span role="img" aria-label="like-emoji">💖</span></button>x{thought.hearts}
    </div>
  )

}

export default HeartButton;