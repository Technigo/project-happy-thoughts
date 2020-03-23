import React from 'react'
import { NewThought } from './NewThought'
import './newthoughtform.css'

export const NewThoughtForm = ({ onSubmit, value, onChange }) => {
  return (
    <article className="thought-form-wrapper">
      <form className="thought-form" onSubmit={onSubmit}>
        <div className="new-thought-container">
          <NewThought
            value={value}
            onChange={onChange} />
        </div>
        <button className="thougt-button" type="submit">
          <span className="heart-emoji" role="img" aria-label="red heart">❤️</span> Send Happy Thought <span className="heart-emoji" role="img" aria-label="red heart">❤️</span>
        </button>
      </form>
    </article>
  )
}