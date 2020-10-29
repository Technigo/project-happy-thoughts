import React from 'react'

export const HeartButton =  ({ hearts, thoughtId, liked  }) =>{
  
const LIKES_URL = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`

const handleClick = () => {
    fetch (LIKES_URL, {
        method: 'POST',
        body: '',
        headers: {'Content-Type': 'application/json'}
    })
    .then(() => liked(thoughtId))

}//end handleLikes

return (
    
        // <article className="message-card">
           <div className="heart-container">
        <button
        
         onClick={handleClick}
        className={hearts >5  ? 'heart-button very-liked' : hearts > 0 ? 'heart-button liked' : 'heart-button unliked'}
         >
         <span role='img' aria-label='Heart'> {"❤ "}
         </span>
         </button>
         <p className="nrOfLikes">x {hearts}</p>
         </div>
    // </article>
)

}