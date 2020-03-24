import moment from 'moment'
import React from 'react'

export const PostedThoughts = (props) => {
  const { message, createdAt, hearts, _id } = props.thought

  const handleClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${_id}/like`, {
      method: 'POST', 
    })
    .then(() => props.onLiked(_id))}

  return (
  <div className="Message-list">
    <div className="each-thought" >
      <div  className="thought" tabIndex='0'> {message} </div>
        <div className="time-and-likes"> 
        <span> <button 
        style= {hearts > 0 ? {backgroundColor: 'rgba(253, 174, 229, 0.896)'} : {backgroundColor: 'rgba(134, 105, 126, 0.279'}}
        className="heart-button" onClick={handleClick} tabIndex='0'> <span> ❤️ </span> </button> <span> x {hearts}</span> </span> 
          <span>{moment(createdAt).fromNow()}</span> 
    </div>
    </div>
  </div>
  )  }

  
