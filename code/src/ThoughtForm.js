import React from 'react'
import { NewThought } from './NewThought'
import './thoughtform.css'

export const ThoughtForm = ({ onSubmit, onChange }) => {
  return (
    <div>
      <form className="thought-form" onSubmit={onSubmit}>
        <div className="new-thought-container">
          <NewThought
            onChange={onChange} />
        </div>
        <button className="thougt-button" type="submit">
          <span className="heart-emoji" role="img" aria-label="red heart">❤️</span> Send Happy Thought <span className="heart-emoji" role="img" aria-label="red heart">❤️</span>
        </button>
      </form>
    </div>
  )
}