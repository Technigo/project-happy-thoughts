import React from 'react'
import './Name.css'

export const Name = (props) => {
  return (
    <p className="name">
      {props.name}
    </p>

  )
}