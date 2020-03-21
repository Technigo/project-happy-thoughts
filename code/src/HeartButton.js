import React from 'react'
import './heartbutton.css'

export const HeartButton = () => {
  return (
    <button className="heart-button" type="button">
      <span className="heart-emoji" role="img" aria-label="red heart">❤️</span>
    </button>
  )
}