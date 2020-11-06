import React from 'react'

export const LikeButton = ({hearts, id, onThoughtLiked}) => {
  //This function fetches every indivual happy thought and how many likes it has:
    const handleClick = () => {
      fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`,
        {
          method: 'POST',
          headers: { "Content-Type": "application/json"},
          body: ''
        }).then(() => {
          onThoughtLiked(id)
        })
      }
  //This is the heart button icon, the background turns red when clicking on it:
    return (
      <div className='likes'>
        <button
          className='like-button'
          onClick={handleClick}
          style={{ background: hearts > 0 ? '#feacac': 'f2f0f0'}}
        >
          <span role='img' aria-label='Red heart emoji'>&#10084;&#65039;</span><span></span>
        </button>
       x {hearts}
      </div>
    )
  } 