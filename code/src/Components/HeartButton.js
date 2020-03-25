import React from 'react'

import './heartButton.css'

export const HeartButton = (props) => {
  const { hearts, id } = props

  const handleClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${id}/like`,{
      method: 'POST'
    }).then(() => {
      props.onThoughtLiked(id)
    })
  }
  return (
    <div className='likes-container'>
      <button 
        onClick={handleClick} 
        className='heart-count-btn'>
          <span area-label='heart-emoji' role='img' alt='heart-emoji'>{'❤️'}</span>
      </button>
    <p className='counter'>x {hearts}</p>
    </div>
    
  )
  

}