import React from 'react'

export const ThoughtInput = (props) => {

  return (
    <section className='input-thought'>
      <form onSubmit={props.onSubmit}>
        <p>
          What is making you happy right now?
        </p>
        <textarea
          rows='2'
          type='text'
          onChange={event => props.onChange(event.target.value)}
          className='form-text'
          value={props.value}
        >
        </textarea>
        <button
          className='form-button'
          type='submit'
          disabled={props.value.length < 4 || props.value.length >= 140}
        >
          ❤️ Send Thought ❤️
        </button>
      </form>
      <p
        className='counter'>
        {props.value.length} / 140
      </p>
    </section>
  )
}