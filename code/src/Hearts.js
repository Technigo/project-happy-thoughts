import React, { useState } from 'react'
import './Hearts.css'

export const Hearts = (props) => {
  const [noOfHearts, setNoOfHearts] = useState(false)

  return (
    <div className="hearts">
      <button>
        <span className="like-heart"> ❤️</span>
      </button>

      x{props.hearts}
    </div >
  )

}

