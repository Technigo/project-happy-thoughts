import React from 'react'


import './heartButton.css'

export const HeartButton = (props) => {
  const { hearts, id, onThoughtLiked } = props

  const handleClick = () => {
    fetch('https://technigo-thoughts.herokuapp.com/${id}/like',
    {method: 'POST',})
    .then(() => {
      onThoughtLiked(id)
    })
  }
  return (
    <div className='likes-container'>
      <button onClick={handleClick} className="heart-count-btn">❤️</button>
    <p className='counter'>x {hearts}</p>
    </div>
    
  )
  

}