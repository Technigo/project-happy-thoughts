import React from 'react'

const PostBtn = () => {
  return (
    <button 
      className="post-message-btn" 
      type="submit">
        <span 
          className="heart-emoji" 
          role="img" 
          aria-label="heart-emoji">
            ❤️
        </span>
          Send happy thought 
        <span 
          className="heart-emoji" 
          role="img" 
          aria-label="heart-emoji">
            ❤️
        </span>
    </button>
  )
}

export default PostBtn