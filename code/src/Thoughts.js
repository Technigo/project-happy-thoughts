import moment from 'moment'
import React from 'react'
import Tooltip from 'react-tooltip-lite'

export const PostedThoughts = (props) => {
  const { message, createdAt, hearts, _id } = props.thought

  const handleClick = () => {
    fetch(`https://happy-thought-api-camilla.herokuapp.com/${_id}/like`, {
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
            <Tooltip content='Like' direction='up'>
            <span> ❤️ </span> 
            </Tooltip>
            </button>
            <span> x {hearts}</span> 
          </span> 
          <span>{moment(createdAt).fromNow()}</span> 
        </div>
      </div>
    </div>
  )}

  
