import React from 'react'
import './Hearts.css'

export const Hearts = (props) => {
  // const [noOfHearts, setNoOfHearts] = useState(false)

  return (
    <div className="hearts">
      <button className="like-heart"><span role="img" aria-label="heart-emoji"> ❤️</span>
      </button>

      x {props.hearts}
    </div >
  )

}

