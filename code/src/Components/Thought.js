import React from 'react'
import { sendLike } from '../smarts.js'
import TimeAgo from 'react-timeago'

const Thought = ({ id, text, likes, time, setReloadThoughts }) => {

  return (
    <article>
      <p className="text">{text}</p>
      <div className='likes'>
        <div 
          className={likes > 0 ? "circle red" : "circle"} 
          onClick={() => {
            sendLike(id)
            setReloadThoughts(reload => !reload)
          }}
          alt="Click to like"
        >
          <img src='/images/like.svg' alt="Likes" className="heart"/>
        </div>
        <p>x {likes}</p>
      </div>
      <div className='time'>
        <p><TimeAgo date={time}/></p>
      </div>
    </article>
  )
}

export default Thought