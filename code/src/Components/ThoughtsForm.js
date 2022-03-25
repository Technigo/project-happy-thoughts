import React from 'react'
import { HeartIcon } from './HeartIcon'


export const ThoughtsForm = ({newMessages, setNewMessages, onFormSubmit }) => {
    const handleChange = (event) => {
        setNewMessages(event.target.value)
    }

    return (
        <form onSubmit={onFormSubmit}>
            <h1 className='header-text'>What's making you happy right now?</h1>
            <textarea 
            className='text-input'
            type='text'
            value={newMessages} 
            onChange={handleChange}
            placeholder= 'Type happy thought here...'
            />

            <div className='text-container'>
              <button
              className='form-btn' 
              type='submit'
              disabled={newMessages.length < 6 || newMessages.length > 140}
              >
                  <HeartIcon label='heart'/>
                  Send Happy Thought!
                  <HeartIcon label='heart'/>
              </button>
              <span>{newMessages.length}/140</span>
            </div>
        </form>
    )
}







