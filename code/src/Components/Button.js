import React, {useState, useEffect} from 'react'

import './button.css'

export const Button = () => {
  const [postThought, setPostThought] = useState([])
  return (
    <button className="btn" onClick={() => setPostThought()}>❤️ Send Happy Thought ❤️</button>
  )
}