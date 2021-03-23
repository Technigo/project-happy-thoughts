import React from 'react'

import './Button.css'

const Button = ({ isSubmit }) => {
  return (
    <button type={isSubmit ? 'submit' : 'button'} className="button--like">
      <span role="img" aria-label="heart">
              ❤️
      </span>
    </button>
  )
}

export default Button;