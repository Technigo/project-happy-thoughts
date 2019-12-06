import React from 'react'
import './PostedText.css'

export const PostedText = (props) => {
  return (
    <div className="posted-text">
      {props.text}
    </div>

  )
}