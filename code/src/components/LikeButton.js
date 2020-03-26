import React from 'react'

export const LikeButton = props => {
  const {hearts, thoughtId} = props
  const APImessages = `https://technigo-thoughts.herokuapp.com/${props.id}/like`
  const handleClick= () => {
    fetch(APImessages, {
      method:'POST',
      headers: {"Content-Type": "application/json" },
      body:""
    })
    .then(() => {
      props.liked(thoughtId)
    })
  }
 
  return(
  <div>
    <button className= "like-button" onClick={handleClick}>❤️</button>
    <p>x {hearts}</p>
  </div>  
  )

}