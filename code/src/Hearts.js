import React, { useState } from 'react'
import './Hearts.css'

export const Hearts = (props) => {
  const [noOfHearts, setNoOfHearts] = useState(false)

  return (
    <div className="hearts">
      <button className="like-heart"> ❤️
      </button>

      x {props.hearts}
    </div >
  )

}

