import React from 'react';

export const Button = () => {
  return (
    <button type="submit" onSubmit={(event) => event.preventDefault()}>Send Happy Thought</button>
  )
}