import React from 'react'

export const Message = ({ message, created, hearts }) => {
  return (
    <>
      <p>Message: {message} <br></br>{created}<br></br> Hearts: {hearts}</p>
    </>
  )
}