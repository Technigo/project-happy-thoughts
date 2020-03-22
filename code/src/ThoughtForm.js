import React from 'react'
import { NewThought } from './NewThought'

export const ThoughtForm = ({ onSubmit, value, onChange }) => {
  return (
    <div>
      <form className="thought-form" onSubmit={onSubmit}>
        <NewThought
          onChange={onChange} />
        <button className="thougt-button" type="submit">
          <span className="heart-emoji" role="img" aria-label="red heart">❤️</span> Send Happy Thought <span className="heart-emoji" role="img" aria-label="red heart">❤️</span>
        </button>
      </form>
    </div>
  )
}