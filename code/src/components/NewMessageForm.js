import React from 'react'

import { API_URL } from '../reusables/urls'

export const NewMessageForm = ({ newMessage, setNewMessage, messageList, setMessageList }) => {

    const onNewMessageChange = (e) => {
        setNewMessage(e.target.value)
      }

      // function when submitting the new message

      const handleSubmit = (e) => {
        e.preventDefault()
      
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ message: newMessage })
        };
    
        fetch(API_URL, options)
          .then(res => res.json())
          .then(newPost => setMessageList([...messageList, newPost]))
          .catch(error => console.error(error))
          
          setTimeout(() => handleSubmit(), 2000)
          
          window.location.reload()
      }

      return (
        <div className='newThoughtsContainer'>
          <form onSubmit={handleSubmit} className='form'>
            <label htmlFor='newMessage' className='newMessage'>
              What's making you happy right now?
            </label>
            <textarea
              id='newMessage'
              type='text'
              minLength='5'
              maxLength='140'
              required
              value={newMessage}
              onChange={onNewMessageChange}>
            </textarea>

            <button className='submitButton' type='submit'>
              <span role='img' aria-label='heart emoji'>&#128151;</span> 
              &nbsp; Send Happy Thought &nbsp;
              <span role='img' aria-label='heart emoji'>&#128151;</span>
            </button>
          
        </form>
        </div>
      )
}