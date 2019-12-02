import React from 'react'
import sendLike from 'smarts.js'

const Thought = ({ text, likes, time }) => {
  
  return (
    <article>
      <p className="text">{text}</p>
      <div className='likes'>
        <div 
          className={likes > 0 ? "circle red" : "circle"} 
          onClick={() => window.location.reload(false)} 
          alt="Click to like"
        >
          <img src='/images/like.svg' alt="Likes" className="heart"/>
        </div>
        <p>x {likes}</p>
      </div>
      <div className='time'>
        <p>{time}</p>
      </div>
    </article>
  )
}

export default Thought