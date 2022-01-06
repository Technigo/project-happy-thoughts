import React from 'react'

const PostAThought = ({
  newThought,
  onNewThoughtChange,
  onSubmit,
  title,
  placeholder,
}) => {
  return (
    <div className='post-a-thought-container'>
      <form onSubmit={onSubmit}>
        <label htmlFor='newThought'>
          <h2>{title}</h2>
          <textarea
            aria-label='Placeholder. Share your Happy Thoughts!'
            id='newThought'
            name='newThought'
            maxLength='140'
            minLength='5'
            // empty textarea is considered valid even if you have a minlength
            // added required to prevent valid empty textarea
            required
            placeholder={placeholder}
            value={newThought}
            onChange={onNewThoughtChange}
          />
        </label>
        <p className='remaining-chars'>
          Remaining characters: {140 - newThought.length}
        </p>
        <button
          aria-label='button to Send Happy Thought'
          type='submit'
          disabled={newThought.length < 5 || newThought.length > 140}
        >
          <span role='img' aria-label='heart emoji'>
            ❤️
          </span>
          &nbsp; Send Happy Thought &nbsp;
          <span role='img' aria-label='heart emoji'>
            ❤️
          </span>
        </button>
      </form>
    </div>
  )
}

export default PostAThought
