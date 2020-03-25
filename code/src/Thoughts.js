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
          <span> 
            <button 
            className={hearts > 0 ? 'liked heart-button': 'notLiked heart-button'}
            onClick={handleClick} 
            tabIndex='0'> 
            <span> ❤️ </span> 
            </button>
            <span> x {hearts}</span> 
          </span> 
          <span>{moment(createdAt).fromNow()}</span> 
        </div>
      </div>
    </div>
  )}

  
