import React from 'react'

const Counter = ({ chars }) => {
  const maxChar = 140

  return (
    <p className="counter">
      <span className={chars > 140 ? 'counter-red' : 'counter-green'}>
        {maxChar - chars}
      </span>
      /{maxChar}
    </p>
  )
}

export default Counter