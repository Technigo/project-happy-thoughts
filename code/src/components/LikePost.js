import React from 'react'

import { LIKE_URL } from '../reusable/urls'

const LikePost = ({ name, hearts, messageList, setMessageList, fetchMessageList }) => {

  const handleClick = () => {
    postHearts(name)
  }

  const postHearts = (messageId) => {
    fetch(LIKE_URL(messageId),{
      method: 'POST',
      headers: { "Content-Type": "application/json" }
    }) 
      .then (() => {
      onLiked(messageId)
      fetchMessageList()
    }) 
      .catch(err => console.error(err))
  }

  const onLiked = (messageId) => {
    const updatedMessageList = messageList.map(thought => {
      if (thought._id === messageId) {
        thought.hearts += 1
      }
      return thought
    })
    setMessageList(updatedMessageList)
  }

  return (
    <p>
      <button 
      name={name} 
      className={hearts === 0 ? 'like-btn zero' : 'like-btn'}
      onClick={handleClick}>
        <span 
        className="heart-emoji" 
        role="img" 
        aria-label="heart-emoji">❤️
        </span>
      </button>
      x {hearts}
    </p>
  )
}
export default LikePost