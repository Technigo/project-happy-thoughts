import React from 'react'
import moment from 'moment' 
import './HappyFeed.css'

export const HappyFeed = ({ thought, onLiked }) => {
  const { message, hearts, createdAt, _id } = thought

  const handleClick = () => {
    fetch(`https://happy-thoughts-api-by-tuliany.herokuapp.com/${_id}/like`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    }).then(() => onLiked(_id))
  }

  return (
    <article className='happy-feed'>
      <h3>{message}</h3>
      <div className="comment">
        <button
          onClick={handleClick}
          className={ hearts > 0 ? 'liked' :  'notLiked' }
        >
          <span role='img' aria-label='Heart'>
            💜 x {hearts}
          </span> 
        </button>
       
         <p>{moment(createdAt).fromNow()}</p>
         </div>
    </article>
  )
}
