import React from 'react'

const PostBtn = ({ chars }) => {
  return (
    <div className="btn-container">
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
      <p>
        <span 
          className={chars > 140 ? 'chars-overstep' : ''}
        >
          {chars}
        </span>
        /140
      </p>
    </div>
  )
}

export default PostBtn