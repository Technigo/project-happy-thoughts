import React from 'react'
import ('button.css')

export const LikeButton = props => {
  const {hearts, thoughtId} = props
  const APImessages = `https://technigo-thoughts.herokuapp.com/${thoughtId}/like`
  
  const handleClick= () => {
    fetch(APImessages, {
      method:'POST',
      headers: {"Content-Type": "application/json" },
      body:""
    },[])
    .then(() => {
      props.liked(thoughtId)
    })
  }
 
  return(
  <div className= "heart-button">
    <button 
    className= {hearts > 5 ? 'superliked' : hearts > 0 ? 'liked' : 'unliked' }
    onClick={handleClick}>❤️</button>
    <p className="number-of-likes">x {hearts}</p>
  </div>  
  )

}