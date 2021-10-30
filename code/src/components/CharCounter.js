import React from 'react'

const CharCounter = (props) => {
  const { countChar } = props
  return (
    <p className={
      countChar < 5 || countChar > 140 ? "red-text" : "black-text"
    }>{countChar}/140</p>
  )
}

export default CharCounter