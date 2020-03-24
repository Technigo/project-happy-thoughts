import React from 'react'


export const Like = (thought) => {

    
  const sendLike = "https://technigo-thoughts.herokuapp.com/likedThoughtId/like"  
  const handleClick = () => {
    fetch(sendLike, {
      method: "POST", 
      body: "", 
      headers: { "Content-Type": "application/json" }
    }).then(() => {
      thought.onThoughtLiked(thought._id)
    })
  }

  return (
    <button onClick={handleClick}><span role="img" aria-label="like-heart" style={thought.hearts === 0 ? {backgroundColor: '#ccc9c9'} : {backgroundColor: '#ffb2b2'}}>♥️</span></button>
  )
}
